const router = require("express").Router();
const asyncHandler = require("express-async-handler");
const {
  setTokenCookie,
  restoreUser,
  requireAuth,
} = require("../../utils/auth.js");
const { User } = require("../../db/models");
/*--------------------------------------------------------------------*/
// TEST ROUTES FOR USER AUTH
router.get(
  "/set-token-cookie",
  asyncHandler(async (req, res) => {
    const user = await User.findOne({
      where: {
        username: "demo-user",
      },
    });
    setTokenCookie(res, user);
    return res.json({ user });
  })
);

router.get("/restore-user", restoreUser, (req, res) => {
  return res.json(req.user);
});

router.get("/require-auth", requireAuth, (req, res) => {
  return res.json(req.user);
});
/*--------------------------------------------------------------------*/
// EXPORTS
module.exports = router;
