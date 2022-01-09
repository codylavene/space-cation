const express = require("express");
const router = express.Router();
const asyncHandler = require("express-async-handler");
const { Spot, Image } = require("../../db/models");
/*--------------------------------------------------------------------*/

router.get(
  "/",
  asyncHandler(async (req, res) => {
    const spots = await Spot.findAll({ include: Image });
    console.log("Spots in API", [spots[0].dataValues]);
    return res.json({ spots });
  })
);

module.exports = router;
