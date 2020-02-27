import * as Yup from 'yup';
import Order from '../models/Order';
import DeliveryProblem from '../models/DeliveryProblem';

class DeliveryProblemController {
  async index(req, res) {
    const { delivery_id } = req.params;

    const deliveryproblems = await DeliveryProblem.findAll({
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
    });

    await order.update({
      canceled_at: new Date(),
    });

    return res.json({ ok: true });
  }
}

export default new DeliveryProblemController();
