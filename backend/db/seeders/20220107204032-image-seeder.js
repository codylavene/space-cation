"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Images",
      [
        {
          url: "https://space-cation-images.s3.us-east-2.amazonaws.com/spot1/1641914067684.jpeg",
          spotId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          url: "https://space-cation-images.s3.us-east-2.amazonaws.com/spot1/1641914107029.jpg",
          spotId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          url: "https://space-cation-images.s3.us-east-2.amazonaws.com/spot1/1641914125865.jpeg",
          spotId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        /*--------------------------------------------------------------------*/
        {
          url: "https://space-cation-images.s3.us-east-2.amazonaws.com/spot2/1641914150388.jpeg",
          spotId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          url: "https://space-cation-images.s3.us-east-2.amazonaws.com/spot2/1641914176579.jpeg",
          spotId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          url: "https://space-cation-images.s3.us-east-2.amazonaws.com/spot2/1641914200182.jpeg",
          spotId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        /*--------------------------------------------------------------------*/
        {
          url: "https://space-cation-images.s3.us-east-2.amazonaws.com/spot3/1641914233673.jpeg",
          spotId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          url: "https://space-cation-images.s3.us-east-2.amazonaws.com/spot3/1641914250650.jpeg",
          spotId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        /*--------------------------------------------------------------------*/
        {
          url: "https://space-cation-images.s3.us-east-2.amazonaws.com/spot4/1641914271699.jpeg",
          spotId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          url: "https://space-cation-images.s3.us-east-2.amazonaws.com/spot4/1641914287574.jpeg",
          spotId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Images", null, {});
  },
};
