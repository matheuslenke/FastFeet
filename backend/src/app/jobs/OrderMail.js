import Mail from '../../lib/Mail';

class OrderMail {
  get key() {
    return 'OrderMail';
  }

  async handle({ data }) {
    const { deliveryman, recipient, product } = data;

    console.log('A fila executou');

    await Mail.sendMail({
      to: `${deliveryman.name} <${deliveryman.email}>`,
      subject: 'Nova encomenda registrada',
      template: 'order',
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
      },
    });
  }
}

export default new OrderMail();
