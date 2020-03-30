import * as Yup from 'yup';
import { Op } from 'sequelize';

import Deliveryman from '../models/Deliveryman';
import File from '../models/File';

class DeliverymanController {
  async index(req, res) {
    const { q = '' } = req.query;

    try {
      const deliverymans = await Deliveryman.findAll({
        where: {
          name: { [Op.iLike]: `%${q}%` },
        },
        attributes: ['id', 'name', 'email'],
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
      avatar_id: Yup.string().required(),
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
      email: Yup.string()
        .required()
        .email(),
      avatar_id: Yup.string(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Falha na validação' });
    }
    const { email } = req.body;
    const deliveryman = await Deliveryman.findOne({
      where: {
        email,
      },
    });

    if (!deliveryman) {
      return res.status(404).json({ error: 'Deliveryman does not exists' });
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
