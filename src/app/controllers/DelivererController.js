import * as Yup from 'yup';
import Deliverer from '../models/Deliverer';

class DelivererController {
  async index(req, res) {
    const deliverers = await Deliverer.findAll();
    return res.json(deliverers);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string()
        .required()
        .email(),
      avatar_id: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Falha na validação' });
    }

    const userExists = await Deliverer.findOne({
      where: { email: req.body.email },
    });

    if (userExists) {
      return res.status(400).json({ error: 'Deliverer already exists' });
    }

    const { id, name, email, avatar_id } = await Deliverer.create(req.body);

    return res.json({ id, name, email, avatar_id });
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string(),
      email: Yup.string()
        .required()
        .email(),
      avatar_id: Yup.string(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Falha na validação' });
    }
    const { email } = req.body;
    const deliverer = await Deliverer.findOne({
      where: {
        email,
      },
    });

    if (!deliverer) {
      return res.status(404).json({ error: 'Deliverer does not exists' });
    }
    const updatedDeliverer = await deliverer.update(req.body);

    return res.json(updatedDeliverer);
  }

  async delete(req, res) {
    const deliverer = await Deliverer.findByPk(req.params.id);

    if (!deliverer) {
      return res.status(404).json({ error: 'Deliverer does not exists' });
    }

    Deliverer.destroy({
      where: {
        id: req.params.id,
      },
    });

    return res.status(200).json({ text: 'Deliverer deleted!' });
  }
}

export default new DelivererController();
