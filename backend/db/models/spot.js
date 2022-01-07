"use strict";
module.exports = (sequelize, DataTypes) => {
  const Spot = sequelize.define(
    "Spot",
    {
      type: DataTypes.STRING,
      address: DataTypes.STRING,
      pets: DataTypes.BOOLEAN,
      totalOccupancy: DataTypes.INTEGER,
      totalBedrooms: DataTypes.INTEGER,
      totalBathrooms: DataTypes.INTEGER,
      description: DataTypes.TEXT,
      hasWifi: DataTypes.BOOLEAN,
      hasTV: DataTypes.BOOLEAN,
      hasAC: DataTypes.BOOLEAN,
      hasHeat: DataTypes.BOOLEAN,
      price: DataTypes.INTEGER,
      postedAt: DataTypes.DATE,
      latitude: DataTypes.FLOAT(8, 6),
      longitude: DataTypes.FLOAT(9, 6),
      hostId: DataTypes.INTEGER,
    },
    {}
  );
  Spot.associate = function (models) {
    // associations can be defined here
    Spot.belongsTo(models.User, { foreignKey: "hostId" });
    Spot.hasMany(models.Review, { foreignKey: "spotId" });
    Spot.hasMany(models.Reservation, { foreignKey: "spotId" });
    Spot.hasMany(models.Image, { foreignKey: "spotId" });
  };
  return Spot;
};
