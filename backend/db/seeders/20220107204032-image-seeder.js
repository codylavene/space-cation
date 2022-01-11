"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Images",
      [
        {
          url: "https://space-cation-images.s3.us-east-2.amazonaws.com/spot1/1641914067684.jpeg",
          // url: "https://static.toiimg.com/photo/81386864.cms",
          spotId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          url: "https://space-cation-images.s3.us-east-2.amazonaws.com/spot1/1641914107029.jpg",
          // url: "https://nypost.com/wp-content/uploads/sites/2/2021/03/voyager-station-3.jpeg?quality=90&strip=all&w=1024",
          spotId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          url: "https://space-cation-images.s3.us-east-2.amazonaws.com/spot1/1641914125865.jpeg",
          // url: "https://cdn4.dogonews.com/images/c01c282d-e95f-4dd3-86c9-65efb6d20e38/ezgif-6-701391eb9fe1.jpeg",
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
