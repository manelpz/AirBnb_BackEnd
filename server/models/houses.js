'use strict';
module.exports = (sequelize, DataTypes) => {
  var Houses = sequelize.define('Houses', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue:DataTypes.UUIDV4
    },
    name: DataTypes.STRING,
    price: DataTypes.DECIMAL(10,2),
    type: {type:DataTypes.ENUM,values:["R","A","H"]},
    rate: DataTypes.DECIMAL(5,1),
    description: DataTypes.TEXT,
    photos: DataTypes.ARRAY(DataTypes.STRING),
    status: {type:DataTypes.ENUM,values:["B","A"]}
  }, {});
  Houses.associate = function(models) {
    Houses.belongsTo(models.Users,{foreignKey:"userId"})
    Houses.hasMany(models.Bookings)
    Houses.hasOne(models.Addresses)
    Houses.hasOne(models.Facilities)
  };
  return Houses;
};