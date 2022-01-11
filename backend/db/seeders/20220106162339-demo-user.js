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
          isHost: false,
        },
        {
          name: "FakeJeff Bezos",
          username: "fake-jeff1",
          email: "fakejeff@fakeorigin.io",
          hashedPassword: bcrypt.hashSync("fakeUserOne"),
          isHost: true,
        },
        {
          name: "FakeElon Musk",
          username: "fake-elon2",
          email: "fakeelon@fakex.io",
          hashedPassword: bcrypt.hashSync("fakeUserTwo"),
          isHost: true,
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(
      "Users",
      { username: { [Op.in]: ["demo-user", "fake-jeff1", "fake-elon2"] } },
      {}
    );
  },
};
