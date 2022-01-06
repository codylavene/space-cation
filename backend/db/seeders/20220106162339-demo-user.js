"use strict";
const faker = require("faker");
const bcrypt = require("bcryptjs");
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Users",
      [
        {
          name: "Demo User",
          username: "demo-user",
          email: "demo@user.io",
          hashedPassword: bcrypt.hashSync("password"),
        },
        {
          name: "Fake User One",
          username: "fake-user1",
          email: faker.internet.email(),
          hashedPassword: bcrypt.hashSync(faker.internet.password()),
        },
        {
          name: "Fake User Two",
          username: "fake-user2",
          email: faker.internet.email(),
          hashedPassword: bcrypt.hashSync(faker.internet.password()),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(
      "Users",
      { username: { [Op.in]: ["demo-user", "fake-user1", "fake-user2"] } },
      {}
    );
  },
};
