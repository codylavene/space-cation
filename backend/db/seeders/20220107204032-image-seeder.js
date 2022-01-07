"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Images",
      [
        {
          url: "https://static.toiimg.com/photo/81386864.cms",
          spotId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          url: "https://nypost.com/wp-content/uploads/sites/2/2021/03/voyager-station-3.jpeg?quality=90&strip=all&w=1024",
          spotId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          url: "https://cdn4.dogonews.com/images/c01c282d-e95f-4dd3-86c9-65efb6d20e38/ezgif-6-701391eb9fe1.jpeg",
          spotId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        /*--------------------------------------------------------------------*/
        {
          url: "https://www.esa.int/var/esa/storage/images/esa_multimedia/images/2011/02/international_space_station/17901086-3-eng-GB/International_Space_Station_pillars.jpg",
          spotId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          url: "https://static.euronews.com/articles/stories/04/03/37/22/1440x810_cmsv2_00552c61-5a59-51d2-89c5-3078243af9f2-4033722.jpg",
          spotId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          url: "https://static01.nyt.com/images/2020/10/30/science/00SCI-OUTTHERE-SCENES12/00SCI-OUTTHERE-SCENES12-mobileMasterAt3x.jpg",
          spotId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        /*--------------------------------------------------------------------*/
        {
          url: "https://cdn.images.express.co.uk/img/dynamic/151/750x445/1234000.jpg",
          spotId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          url: "https://i.cbc.ca/1.4599200.1522345817!/fileImage/httpImage/space-junk-artist-s-impression.jpg",
          spotId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          url: "https://w0.peakpx.com/wallpaper/503/166/HD-wallpaper-arcadia-anime-spaceship-captain-harlock-space-battlecruiser-pirate-ship.jpg",
          spotId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          url: "https://i.pinimg.com/originals/50/a0/99/50a0993b93d53ef6413da80273fcae0d.jpg",
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
