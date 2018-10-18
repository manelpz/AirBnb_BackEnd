'use strict';
//defaultValue:Sequelize.UUIDV4 lo modificamos para que no sea autoincremental 
//asi como es un string en ves de un numero 
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue:Sequelize.UUIDV4
      },
      name: {
        type: Sequelize.STRING
      },
      lastname: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING,
        unique:true
      },
      password: {
        type: Sequelize.STRING
      },
      gender: {
        type: Sequelize.ENUM,
        values:["M","F"]
      },
      birth_date: {
        type: Sequelize.DATE
      },
      paypal_id: {
        type: Sequelize.STRING
      },
      type: {
        type: Sequelize.ENUM,
        values:["guest","owner","both"]
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Users');
  }
};