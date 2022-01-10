const express = require("express");
const router = express.Router();
const apiRouter = require("./api");
/*--------------------------------------------------------------------*/
router.use("/api", apiRouter);
/*--------------------------------------------------------------------*/
// SERVING FRONTEND (XSRF-TOKEN)
// STATIC ROUTES
if (process.env.NODE_ENV === "production") {
  const path = require("path");

  router.get("/", (req, res) => {
    res.cookie("XSRF_TOKEN", req.csrfToken());
    return res.sendFile(
      path.resolve(__dirname, "../../frontend", "build", "index.html")
    );
  });

  router.use(express.static(path.resolve("../frontend/build")));

  router.get(/^(?!\/?api).*/, (req, res) => {
    res.cookie("XSRF_TOKEN", req.csrfToken());
    return res.sendFile(
      path.resolve(__dirname, "../../frontend", "build", "index.html")
    );
  });
}

if (process.env.NODE_ENV !== "production") {
  router.get("/api/csrf/restore", (req, res) => {
    res.cookie("XSRF_TOKEN", req.csrfToken());
    return res.json();
  });
}
/*--------------------------------------------------------------------*/
module.exports = router;
