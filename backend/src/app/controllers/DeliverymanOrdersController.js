import { Op } from 'sequelize';
import {
  startOfDay,
  endOfDay,
  parseISO,
  setSeconds,
  setMinutes,
  setHours,
  isAfter,
  isBefore,
} from 'date-fns';
import Deliveryman from '../models/Deliveryman';
import Order from '../models/Order';
import Recipient from '../models/Recipient';

class DeliverymanOrdersController {
  async index(req, res) {
    const { deliveryman_id } = req.params;

    const deliverymanExists = await Deliveryman.findByPk(deliveryman_id);

    if (!deliverymanExists) {
      return res.status(400).json({ error: 'Deliveryman not found' });
    }
    const orders = await Order.findAll({
      where: {
        deliveryman_id,
        end_date: null,
        canceled_at: null,
      },
      attributes: ['id', 'product', 'start_date'],
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
      ],
    });
    return res.json(orders);
  }

  async update(req, res) {
    const { deliveryman_id, order_id } = req.params;
    const { start_date } = req.body;
    const deliverymanExists = await Deliveryman.findByPk(deliveryman_id);

    const incoming_date = parseISO(start_date);

    if (!deliverymanExists) {
      return res.status(400).json({ error: 'Deliveryman not found' });
    }
    const now = new Date();

    const totalPickups = await Order.findAndCountAll({
      where: {
        deliveryman_id,
        start_date: {
          [Op.between]: [startOfDay(now), endOfDay(now)],
        },
      },
    });

    if (totalPickups.count > 5) {
      return res
        .status(400)
        .json({ error: 'You exceeded the limit of deliveries for today' });
    }

    const order = await Order.findByPk(order_id);
    if (!order) {
      return res.status(400).json({ error: 'Order doesnt exists' });
    }

    const startWorkDay = setSeconds(setMinutes(setHours(now, 7), 59), 59);
    const endWorkDay = setSeconds(setMinutes(setHours(now, 18), 0), 0);

    if (
      isBefore(incoming_date, startWorkDay) ||
      isAfter(incoming_date, endWorkDay)
    ) {
      return res.status(400).json({
        error: 'You are only allowed to withdraw from 8:00 am to 6:00 pm',
      });
    }

    const updated = await order.update({
      start_date,
    });

    return res.json(updated);
  }
}

export default new DeliverymanOrdersController();
