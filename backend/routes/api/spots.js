const express = require("express");
const router = express.Router();
const asyncHandler = require("express-async-handler");
const { check } = require("express-validator");
const { handleValidationErrors } = require("../../utils/validation");
const { singlePublicFileUpload, singleMulterUpload } = require("../../awsS3");
const { Spot, Image, Review, Reservation, User } = require("../../db/models");
const { Op } = require("sequelize");
/*--------------------------------------------------------------------*/
// VALIDATION
const spotValidator = [
	check("name")
		.exists({ checkFalsey: true })
		.withMessage("You have to call your spot something..."),
	check("title")
		.exists({ checkFalsey: true })
		.withMessage("It's not good advertising to exclude the title..."),
	check("totalOccupants")
		.isInt({ min: 1 })
		.withMessage("If you're here, you want people to stay there, right?"),
	// check("")
	handleValidationErrors,
];
/*--------------------------------------------------------------------*/
// GET SINGLE SPOT
router.get(
	"/:id",
	asyncHandler(async (req, res) => {
		const spot = await Spot.findByPk(req.params.id, {
			include: [Image, Review, Reservation, User],
		});
		if (spot) {
			return res.json(spot);
		}
	})
);
// GET ALL SPOTS
router.get(
	"/",
	asyncHandler(async (req, res) => {
		const spots = await Spot.findAll({
			include: [Image, Review, User, Reservation],
		});

		return res.json(spots);
	})
);
// RESERVE A SPOT
router.post(
	"/:id/bookings",
	asyncHandler(async (req, res) => {
		const id = req.params.id;
		console.log(id);
		console.log("<><><><><><>", req.body);
		const {
			checkIn,
			checkOut,
			userId,
			hostId,
			spotId,
			price,
			guestCount,
			totalCost,
		} = req.body;
		const booking = {
			checkIn,
			checkOut,
			userId,
			hostId,
			spotId,
			price,
			guestCount,
			totalCost,
		};
		const reservation = await Reservation.create(booking);
		if (reservation) {
			return res.json({ reservation });
		} else res.json({ message: "Something went wrong, please try again." });
	})
);
// CREATE NEW SPOT
router.post(
	"/",
	// spotValidator,
	singleMulterUpload("image"),
	asyncHandler(async (req, res) => {
		const {
			type,
			name,
			title,
			pets,
			totalOccupancy,
			totalBedrooms,
			totalBathrooms,
			description,
			hasWifi,
			hasTV,
			hasAC,
			hasHeat,
			price,
			postedAt,
			coordinates,
			hostId,
		} = req.body;
		// const { spot } = req.body;
		const newSpot = {
			type,
			name,
			title,
			pets,
			totalOccupancy,
			totalBedrooms,
			totalBathrooms,
			description,
			hasWifi,
			hasTV,
			hasAC,
			hasHeat,
			price,
			postedAt,
			coordinates,
			hostId,
		};
		const createdSpot = await Spot.create(newSpot);
		if (createdSpot) {
			if (req.file) {
				const imageUrl = await singlePublicFileUpload(req.file);
				const newImage = await Image.create({
					url: imageUrl,
					spotId: createdSpot.id,
				});
				return res.json({ createdSpot, newImage });
			} else return res.json({ createdSpot });
		} else {
			return res.json({ message: "Failed" });
		}
	})
);
// DELETE BOOKING
router.delete(
	"/:spotId/bookings/:id",
	asyncHandler(async (req, res) => {
		const destroyed = Reservation.destroy({ where: { id: req.params.id } });
		if (destroyed) {
			return res.json({ message: "Destroyed", booking: req.params.id });
		} else {
			return res.json({ message: "Failed" });
		}
	})
);
// UPDATE BOOKING
router.put(
	"/:spotId/bookings/:id",
	asyncHandler(async (req, res) => {
		const id = req.params.id;
		console.log("<><><><><><><><><><><><><><><>");
		const {
			checkIn,
			checkOut,
			userId,
			hostId,
			spotId,
			price,
			guestCount,
			totalCost,
		} = req.body;
		const newRes = {
			checkIn,
			checkOut,
			hostId,
			userId,
			spotId,
			price,
			totalCost,
			guestCount,
		};
		const toUpdate = await Reservation.findByPk(id);
		console.log("STEP222222");
		const reservation = await toUpdate.update(newRes);
		if (reservation) {
			return res.json({ reservation });
		} else res.json({ message: "Something went wrong, please try again." });
	})
);
// UPDATE SPOT
router.put(
	"/:id",
	asyncHandler(async (req, res) => {
		const {
			type,
			name,
			title,
			pets,
			totalOccupancy,
			totalBedrooms,
			totalBathrooms,
			description,
			hasWifi,
			hasTV,
			hasAC,
			hasHeat,
			price,
			postedAt,
			coordinates,
			hostId,
		} = req.body;
		// const { spot } = req.body;
		const spotToUpdate = {
			type,
			name,
			title,
			pets,
			totalOccupancy,
			totalBedrooms,
			totalBathrooms,
			description,
			hasWifi,
			hasTV,
			hasAC,
			hasHeat,
			price,
			postedAt,
			coordinates,
			hostId,
		};
		// TODO: Update Spot
		// const newImage = await Image.findByPk(req.file);
		const spot = await Spot.findByPk(req.params.id);
		const updatedSpot = await spot.update(spotToUpdate);
		// return res.json({ spot });
		return res.json({ updatedSpot });
	})
);
// DELETE SPOT
router.delete(
	"/:id",
	asyncHandler(async (req, res) => {
		await Image.destroy({ where: { spotId: req.params.id } });
		await Review.destroy({ where: { spotId: req.params.id } });
		await Reservation.destroy({ where: { spotId: req.params.id } });
		const destroyed = await Spot.destroy({ where: { id: req.params.id } });
		if (destroyed) {
			return res.json({ message: "Destroyed" });
		} else {
			return res.json({ message: "Failed" });
		}
	})
);

router.get(
	"/categories/:type",
	asyncHandler(async (req, res) => {
		const type = req.params.type;
		const spots = await Spot.findAll({
			where: { type: type },
			include: [Image, Review, Reservation, User],
		});
		if (spots) {
			res.json({ spots });
		} else res.json({ message: "No spots of provided type" });
	})
);
router.post(
	"/:id/bookings",
	asyncHandler(async (req, res) => {
		const id = req.params.id;
		const {
			checkIn,
			checkOut,
			userId,
			hostId,
			spotId,
			price,
			guestCount,
			totalCost,
		} = req.body;
		const reservation = await Reservation.create(
			checkIn,
			checkOut,
			userId,
			hostId,
			spotId,
			price,
			guestCount,
			totalCost
		);
		if (reservation) {
			return res.json({ reservation });
		} else res.json({ message: "Something went wrong, please try again." });
	})
);

module.exports = router;
