const express = require("express");
const asyncHandler = require("express-async-handler");
const { setTokenCookie, requireAuth } = require("../../utils/auth.js");
const { User } = require("../../db/models");
const router = express.Router();
/*--------------------------------------------------------------------*/
// USER ROUTES
router.post(
  "/",
  asyncHandler(async (req, res) => {
    const { name, username, email, password } = req.body;
    const user = await User.signup({ name, username, email, password });

    await setTokenCookie(res, user);

    return res.json({ user });
  })
);
/*--------------------------------------------------------------------*/
// EXPORTS
module.exports = router;
