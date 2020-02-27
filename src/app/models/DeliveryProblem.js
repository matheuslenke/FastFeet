import Sequelize, { Model } from 'sequelize';

class Deliveryman extends Model {
  static init(sequelize) {
    super.init(
      {
        delivery_id: Sequelize.NUMBER,
        description: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.Orders, {
      foreignKey: 'delivery_id',
      as: 'delivery_id',
    });
  }
}

export default Deliveryman;
