const router = require("express").Router();
const spotsRouter = require("./spots");
const sessionRouter = require("./session");
const usersRouter = require("./users");
/*--------------------------------------------------------------------*/
router.use("/session", sessionRouter);
router.use("/users", usersRouter);
router.use("/spots", spotsRouter);
/*--------------------------------------------------------------------*/
// TEST ROUTES FOR USER AUTH

// router.post("/test", function (req, res) {
//   res.json({ requestBody: req.body });
// });

// router.get(
//   "/set-token-cookie",
//   asyncHandler(async (req, res) => {
//     const user = await User.findOne({
//       where: {
//         username: "demo-user",
//       },
//     });
//     setTokenCookie(res, user);
//     return res.json({ user });
//   })
// );

// router.get("/restore-user", restoreUser, (req, res) => {
//   return res.json(req.user);
// });

// router.get("/require-auth", requireAuth, (req, res) => {
//   return res.json(req.user);
// });
/*--------------------------------------------------------------------*/
// EXPORTS
module.exports = router;
