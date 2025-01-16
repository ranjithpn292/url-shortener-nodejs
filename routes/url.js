const express = require("express");
const {
  handleGenerateNewShortURl,
  handleGetAnalytics,
  handleRedirectURL,
} = require("../controllers/url");
const router = express.Router();

router.post("/", handleGenerateNewShortURl);

router.get("/analytics/:shortId", handleGetAnalytics);

router.get("/:shortid", handleRedirectURL);

module.exports = router;
