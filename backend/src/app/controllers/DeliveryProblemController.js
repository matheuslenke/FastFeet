import * as Yup from 'yup';
import { Op } from 'sequelize';

import Order from '../models/Order';
import Recipient from '../models/Recipient';
import Deliveryman from '../models/Deliveryman';
import DeliveryProblem from '../models/DeliveryProblem';

import CancelationMail from '../jobs/CancelationMail';
import Queue from '../../lib/Queue';

class DeliveryProblemController {
  async index(req, res) {
    const { page = 1 } = req.query;

    const deliveryproblems = await DeliveryProblem.findAndCountAll({
      order: ['created_at', 'updated_at'],
      attributes: ['id', 'delivery_id', 'description'],
      limit: 6,
      offset: (page - 1) * 6,
      include: [
        {
          model: Order,
          as: 'order',
          attributes: ['id', 'product', 'canceled_at'],
        },
      ],
    });

    if (!deliveryproblems) {
      return res
        .status(400)
        .json({ error: 'There isnt any delivery problem for this delivery' });
    }
    deliveryproblems.rows = deliveryproblems.rows.filter(
      problem => problem.order.canceled_at === null
    );
    deliveryproblems.count = deliveryproblems.rows.length;

    return res.json(deliveryproblems);
  }

  async show(req, res) {
    const { delivery_id } = req.params;

    const deliveryproblems = await DeliveryProblem.findAndCountAll({
      where: {
        delivery_id,
      },
    });
    if (!deliveryproblems) {
      return res
        .status(400)
        .json({ error: 'There isnt any delivery problem for this delivery' });
    }
    return res.json(deliveryproblems);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      description: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation Fails' });
    }

    const { delivery_id } = req.params;
    const { description } = req.body;

    const order = await Order.findOne({
      where: {
        id: delivery_id,
        canceled_at: null,
      },
    });

    if (!order) {
      return res
        .status(400)
        .json({ error: 'Order doesnt exists or its canceled' });
    }

    const deliveryproblem = await DeliveryProblem.create({
      delivery_id,
      description,
    });

    return res.json(deliveryproblem);
  }

  async delete(req, res) {
    const { problem_id } = req.params;

    const deliveryproblem = await DeliveryProblem.findOne({
      where: {
        id: problem_id,
      },
    });
    if (!deliveryproblem) {
      return res.status(400).json({ error: 'Delivery problem not found' });
    }

    const order = await Order.findOne({
      where: {
        id: deliveryproblem.delivery_id,
      },
      include: [
        {
          model: Recipient,
          as: 'recipient',
          attributes: [
            'id',
            'name',
            'street',
            'number',
            'complement',
            'state',
            'city',
            'cep',
            'created_at',
          ],
        },
        {
          model: Deliveryman,
          as: 'deliveryman',
          attributes: ['name', 'email'],
        },
      ],
    });

    await order.update({
      canceled_at: new Date(),
    });

    await Queue.add(CancelationMail.key, {
      deliveryman: order.deliveryman,
      recipient: order.recipient,
      product: order.product,
      problem: deliveryproblem.description,
    });

    return res.json({ ok: true });
  }
}

export default new DeliveryProblemController();
