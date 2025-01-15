const express = require("express");
const URL = require("../models/url");
const router = express.Router();

router.get("/", (req, res) => {
  const allURLs = URL.find({});
  res.render("home", {
    urls: allURLs,
  });
});

module.exports = router;
