"use strict";
// const faker = require("faker");
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
          email: "fake@userone.io",
          hashedPassword: bcrypt.hashSync("fakeUserOne"),
        },
        {
          name: "Fake User Two",
          username: "fake-user2",
          email: "fake@usertwo.io",
          hashedPassword: bcrypt.hashSync("fakeUserTwo"),
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
