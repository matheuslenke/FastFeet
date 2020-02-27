import * as Yup from 'yup';
import Deliveryman from '../models/Deliveryman';
import Order from '../models/Order';

class FinishDeliveryController {
  async update(req, res) {
    const schema = Yup.object().shape({
      signature_id: Yup.number().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation Fails' });
    }

    const { deliveryman_id, order_id } = req.params;
    const { signature_id } = req.body;

    const deliverymanExists = await Deliveryman.findByPk(deliveryman_id);

    if (!deliverymanExists) {
      return res.status(400).json({ error: 'Deliveryman not found' });
    }

    const order = await Order.findOne({
      where: {
        id: order_id,
        deliveryman_id,
        canceled_at: null,
      },
    });

    if (!order) {
      return res
        .status(400)
        .json({ error: 'Order doesnt exists or its canceled' });
    }

    const updatedOrder = order.update({
      signature_id,
      end_date: new Date(),
    });

    return res.json(updatedOrder);
  }
}

export default new FinishDeliveryController();
