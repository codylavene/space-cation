"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Spots", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      type: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      title: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      pets: {
        allowNull: false,
        defaultValue: false,
        type: Sequelize.BOOLEAN,
      },
      totalOccupancy: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      totalBedrooms: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      totalBathrooms: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      description: {
        allowNull: false,
        type: Sequelize.TEXT,
      },
      hasWifi: {
        allowNull: false,
        defaultValue: false,
        type: Sequelize.BOOLEAN,
      },
      hasTV: {
        allowNull: false,
        defaultValue: false,
        type: Sequelize.BOOLEAN,
      },
      hasAC: {
        allowNull: false,
        defaultValue: false,
        type: Sequelize.BOOLEAN,
      },
      hasHeat: {
        allowNull: false,
        defaultValue: false,
        type: Sequelize.BOOLEAN,
      },
      price: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      postedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      coordinates: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      hostId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: "Users" },
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
    return queryInterface.dropTable("Spots");
  },
};
