import * as Yup from 'yup';
import Order from '../models/Order';
import Deliveryman from '../models/Deliveryman';
import Recipient from '../models/Recipient';

import OrderMail from '../jobs/OrderMail';
import Queue from '../../lib/Queue';

import Mail from '../../lib/Mail';

class OrderController {
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
}

export default new OrderController();
