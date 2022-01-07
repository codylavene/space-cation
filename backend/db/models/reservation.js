"use strict";
module.exports = (sequelize, DataTypes) => {
  const Reservation = sequelize.define(
    "Reservation",
    {
      userId: DataTypes.INTEGER,
      spotId: DataTypes.INTEGER,
      hostId: DataTypes.INTEGER,
      checkIn: DataTypes.DATE,
      checkOut: DataTypes.DATE,
      price: DataTypes.INTEGER,
      totalCost: DataTypes.INTEGER,
    },
    {}
  );
  Reservation.associate = function (models) {
    // associations can be defined here
    Reservation.belongsTo(models.User, { foreignKey: "userId" });
    Reservation.belongsTo(models.User, { foreignKey: "hostId" });
    Reservation.belongsTo(models.Spot, { foreignKey: "spotId" });
  };
  return Reservation;
};
