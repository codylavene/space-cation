const express = require("express");
const asyncHandler = require("express-async-handler");
const { check } = require("express-validator");
const { handleValidationErrors } = require("../../utils/validation");
const { setTokenCookie, requireAuth } = require("../../utils/auth.js");
const { Spot, Image, Review, Reservation, User } = require("../../db/models");
const router = express.Router();
/*--------------------------------------------------------------------*/
// MIDDLEWARE
const validateSignup = [
  check("name")
    // .exists({ checkFalsy: true })
    // .withMessage(
    //   "Please provide your name (must be between 3 and 200 characters."
    // )
    .isLength({ min: 3, max: 200 })
    .withMessage(
      "Please provide your name (must be between 3 and 200 characters."
    ),
  check("username")
    // .exists({ checkFalsy: true })
    // .withMessage("Please provide a username between 4 and 30 characters.")
    .isLength({ min: 4, max: 30 })
    .withMessage("Username must be between 4 and 30 characters."),
  check("username").not().isEmail().withMessage("Username cannot be an email."),
  check("email")
    // .exists({ checkFalsy: true })
    // .withMessage("Please provide a valid email.")
    .isEmail()
    .withMessage("Please provide a valid email."),
  check("password")
    // .exists({ checkFalsy: true })
    // .withMessage("Password must be at least 6 characters")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters"),
  handleValidationErrors,
];
/*--------------------------------------------------------------------*/
// USER ROUTES
router.post(
  "/",
  validateSignup,
  asyncHandler(async (req, res) => {
    const { name, username, email, password } = req.body;
    const user = await User.signup({ name, username, email, password });

    await setTokenCookie(res, user);

    return res.json({ user });
  })
);

router.put(
  "/:id",
  asyncHandler(async (req, res) => {
    // const { isHost } = req.body;
    const { id } = req.params;
    const user = await User.findByPk(parseInt(id, 10));
    const updatedUser = await user.update({ isHost: req.body.isHost });

    // await setTokenCookie(res, user);
    if (updatedUser) {
      return res.json({ updatedUser });
    }
  })
);

router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const spots = await Spot.findAll({
      where: { hostId: req.params.id },
      include: [Image, Review, User, Reservation],
    });
    return res.json(spots);
  })
);
/*--------------------------------------------------------------------*/
// EXPORTS
module.exports = router;
