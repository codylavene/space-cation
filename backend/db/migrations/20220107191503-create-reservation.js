"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Reservations", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      userId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: "Users" },
      },
      spotId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: "Spots" },
      },
      hostId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: "Users" },
      },
      checkIn: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      checkOut: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      price: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      totalCost: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("Reservations");
  },
};
