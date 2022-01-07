"use strict";
module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define(
    "Review",
    {
      spotId: DataTypes.INTEGER,
      userId: DataTypes.INTEGER,
      rating: DataTypes.INTEGER,
      description: DataTypes.TEXT,
    },
    {}
  );
  Review.associate = function (models) {
    // associations can be defined here
    Review.belongsTo(models.User, { foreignKey: "userId" });
    Review.belongsTo(models.Spot, { foreignKey: "spotId" });
  };
  return Review;
};
