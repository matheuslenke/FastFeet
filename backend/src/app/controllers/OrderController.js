import * as Yup from 'yup';
import { Op } from 'sequelize';
import Order from '../models/Order';
import Deliveryman from '../models/Deliveryman';
import DeliveryProblem from '../models/DeliveryProblem';
import Recipient from '../models/Recipient';
import File from '../models/File';

import OrderMail from '../jobs/OrderMail';
import Queue from '../../lib/Queue';

class OrderController {
  async show(req, res) {
    const { orderId } = req.params;

    if (!orderId) {
      return res.status(400).json({ error: 'Not a valid id' });
    }

    const order = await Order.findByPk(orderId);

    if (!order) {
      return res.status(400).json({ error: 'No order with that id' });
    }

    return res.json(order);
  }

  async index(req, res) {
    const { page = 1, name = '' } = req.query;

    if (page == 0) {
      return res.status(400).json({ error: 'Not a valid page' });
    }
    const orders = await Order.findAndCountAll({
      where: {
        product: {
          [Op.iLike]: `%${name}%`,
        },
      },
      attributes: ['product', 'id', 'start_date', 'canceled_at', 'end_date'],
      limit: 6,
      offset: (page - 1) * 6,
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
          attributes: ['id', 'name', 'email'],
          include: [
            {
              model: File,
              as: 'avatar',
              attributes: ['id', 'name', 'path', 'url'],
            },
          ],
        },
        {
          model: File,
          as: 'signature',
          attribures: ['id', 'name', 'path', 'url'],
        },
      ],
    });

    return res.json(orders);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      deliveryman_id: Yup.number().required(),
      recipient_id: Yup.number().required(),
      product: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }
    const { deliveryman_id, recipient_id, product } = req.body;

    /**
     * Check if deliveryman_id is an existing deliveryman
     */
    const deliveryman = await Deliveryman.findOne({
      where: { id: deliveryman_id },
    });

    if (!deliveryman) {
      return res
        .status(401)
        .json({ error: 'There isnt a deliveryman with this id' });
    }

    /**
     * Check if recipient_id is from a valid recipient
     */
    const recipient = await Recipient.findOne({
      where: {
        id: recipient_id,
      },
    });

    if (!recipient) {
      return res
        .status(401)
        .json({ error: 'There isnt a recipient with this id' });
    }

    /**
     * Making the request to database
     */

    const order = await Order.create({
      deliveryman_id,
      recipient_id,
      product,
    });

    await Queue.add(OrderMail.key, {
      deliveryman,
      recipient,
      product,
    });

    return res.json(order);
  }

  async update(req, res) {
    const { orderId } = req.params;

    if (!orderId) {
      return res.status(400).json({ error: 'Not a valid id' });
    }

    const order = await Order.findByPk(orderId);

    if (!order) {
      return res.status(400).json({ error: 'No order with that id' });
    }

    await order.update(req.body);

    return res.json({ ok: true });
  }

  async delete(req, res) {
    const { orderId } = req.params;

    const order = await Order.findByPk(orderId);

    if (!order) {
      return res.status(400).json({ error: 'Order not found' });
    }

    if (order.signature_id) {
      const signature = await File.findOne({
        where: {
          id: order.signature_id,
        },
      });

      await signature.destroy();
    }

    await DeliveryProblem.destroy({
      where: {
        delivery_id: orderId,
      },
    });

    await order.destroy({
      where: {
        id: orderId,
      },
    });

    return res.json({ ok: true });
  }
}

export default new OrderController();
