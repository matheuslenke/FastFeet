import * as Yup from 'yup';
import { Op } from 'sequelize';

import Deliveryman from '../models/Deliveryman';
import File from '../models/File';

class DeliverymanController {
  async show(req, res) {
    const { deliveryman_id } = req.params;

    const deliveryman = await Deliveryman.findByPk(deliveryman_id);

    if (!deliveryman) {
      return res.status(400).json({ error: 'Deliveryman not found' });
    }

    return res.json(deliveryman);
  }

  async index(req, res) {
    const { page = 1, name = '' } = req.query;

    if (page <= 0) {
      return res.status(400).json({ error: 'Not a valid page' });
    }

    try {
      const deliverymans = await Deliveryman.findAndCountAll({
        where: {
          name: { [Op.iLike]: `%${name}%` },
        },
        attributes: ['id', 'name', 'email'],
        limit: 6,
        offset: (page - 1) * 6,
        include: [
          {
            model: File,
            as: 'avatar',
            attributes: ['id', 'name', 'path', 'url'],
          },
        ],
      });
      return res.json(deliverymans);
    } catch (err) {
      return res.status(400).json({ error: 'Erro ao listar entregadores' });
    }
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string()
        .required()
        .email(),
      avatar_id: Yup.string(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Falha na validação' });
    }

    try {
      const userExists = await Deliveryman.findOne({
        where: { email: req.body.email },
      });

      if (userExists) {
        return res.status(400).json({ error: 'Deliveryman already exists' });
      }

      const { id, name, email, avatar_id } = await Deliveryman.create(req.body);

      return res.json({ id, name, email, avatar_id });
    } catch (err) {
      return res.status(400).json({ error: err.messege });
    }
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string(),
      email: Yup.string().email(),
      avatar_id: Yup.string(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Falha na validação' });
    }

    const { id } = req.params;
    const { email } = req.body;

    const deliveryman = await Deliveryman.findByPk(id);

    if (!deliveryman) {
      return res.status(400).json({ error: 'Deliveryman does not exists' });
    }

    if (email && email !== deliveryman.email) {
      const emailExists = await Deliveryman.findOne({
        where: {
          email,
        },
      });

      if (emailExists) {
        return res.status(404).json({ error: 'Email already exists' });
      }
    }

    const updatedDeliveryman = await deliveryman.update(req.body);

    return res.json(updatedDeliveryman);
  }

  async delete(req, res) {
    const deliveryman = await Deliveryman.findByPk(req.params.id);

    if (!deliveryman) {
      return res.status(404).json({ error: 'Deliveryman does not exists' });
    }

    Deliveryman.destroy({
      where: {
        id: req.params.id,
      },
    });

    return res.status(200).json({ text: 'Deliveryman deleted!' });
  }
}
export default new DeliverymanController();
