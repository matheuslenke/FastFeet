import * as Yup from 'yup';
import Recipient from '../models/Recipient';

class RecipientController {
  async index(req, res) {
    const recipients = await Recipient.findAll();

    return res.json(recipients);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      street: Yup.string().required(),
      complement: Yup.string().required(),
      state: Yup.string().required(),
      city: Yup.string().required(),
      cep: Yup.string().required(),
      number: Yup.number().required(),
    });

    /**
     * Verifica de os dados estão na forma correta
     */
    if (!(await schema.isValid(req.body))) {
      return res
        .status(400)
        .json({ error: 'Falha na validação da requisição' });
    }
    const {
      id,
      name,
      street,
      complement,
      state,
      city,
      cep,
      number,
    } = await Recipient.create(req.body);

    return res.json({ id, name, street, complement, state, city, cep, number });
  }

  async update(req, res) {
    const recipient = await Recipient.findByPk(req.params.id);

    if (!recipient) {
      return res.status(404).json({ error: 'This recipient does not exists' });
    }

    await recipient.update(req.body);
    return res.json(recipient);
  }
}

export default new RecipientController();
