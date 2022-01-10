const express = require("express");
const router = express.Router();
const asyncHandler = require("express-async-handler");
const { Spot, Image, Review, Reservation, User } = require("../../db/models");
/*--------------------------------------------------------------------*/

router.get(
  "/",
  asyncHandler(async (req, res) => {
    const spots = await Spot.findAll({
      include: { model: Image },
      // { model: { User, as: "hostId" } },
      // { model: Review },
      // { model: Reservation },
    });
    console.log("Spots in API", [spots[0].dataValues]);
    return res.json(spots);
  })
);

module.exports = router;
