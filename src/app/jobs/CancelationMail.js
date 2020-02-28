import Mail from '../../lib/Mail';

class CancelationMail {
  get key() {
    return 'CancelationMail';
  }

  async handle({ data }) {
    const { deliveryman, recipient, product, problem } = data;

    console.log('A fila de cancelamento executou');

    await Mail.sendMail({
      to: `${deliveryman.name} <${deliveryman.email}>`,
      subject: 'Cancelamento de entrega',
      template: 'cancelation',
      context: {
        deliveryman: deliveryman.name,
        name: recipient.name,
        street: recipient.street,
        number: recipient.number,
        city: recipient.city,
        state: recipient.state,
        complement: recipient.complement,
        zipcode: recipient.cep,
        product,
        problem,
      },
    });
  }
}

export default new CancelationMail();
