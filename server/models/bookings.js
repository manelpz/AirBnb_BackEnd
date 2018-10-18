'use strict';
module.exports = (sequelize, DataTypes) => {
  const Bookings = sequelize.define('Bookings', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue:DataTypes.UUIDV4
    },
    start_date: DataTypes.DATE,
    due_date: DataTypes.DATE,
    status: {type:DataTypes.ENUM,values:["CF","CC","PN"]},
    total_price: DataTypes.DECIMAL(10,2),
    num_guest: DataTypes.INTEGER,
    paypal_confirmation: DataTypes.STRING
  }, {});
  Bookings.associate = function(models) {
    // associations can be defined here
    Bookings.belongsTo(models.Users,{foreignKey:"userId"})
    Bookings.belongsTo(models.Houses,{foreignKey:"houseId"})
    Bookings.hasOne(models.Comments)
  };
  return Bookings;
};