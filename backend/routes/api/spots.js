const express = require("express");
const router = express.Router();
const asyncHandler = require("express-async-handler");
const { Spot, Image, Review, Reservation, User } = require("../../db/models");
/*--------------------------------------------------------------------*/
// GET SINGLE SPOT
router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const spot = await Spot.findByPk(req.params.id);
    if (spot) {
      return res.json(spot);
    }
    console.log("Spot in API", spot, " SpotId", spot.id);
  })
);
// GET ALL SPOTS
router.get(
  "/",
  asyncHandler(async (req, res) => {
    const spots = await Spot.findAll({
      include: Image,
      // TODO: include all associations
    });
    console.log("Spots in API", [spots[0].dataValues]);
    return res.json(spots);
  })
);
// CREATE NEW SPOT
router.post(
  "/",
  asyncHandler(async (req, res) => {
    console.log(req.body);
    // TODO: Creating new Spot
    return;
  })
);
// UPDATE SPOT
router.put(
  "/:id(/\\d+/)",
  asyncHandler(async (req, res) => {
    console.log(req.body);
    // TODO: Update Spot
    return;
  })
);
// DELETE SPOT
router.delete(
  "/:id",
  asyncHandler(async (req, res) => {
    console.log(req.body);
    const destoyed = await Spot.destroy();
    if (destroyed) {
      return res.json({ message: "Destroyed" });
    } else {
      return res.json({ message: "Failed" });
    }
  })
);
module.exports = router;
