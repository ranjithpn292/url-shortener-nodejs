const shortid = require("shortid");
const URL = require("../models/url");

async function handleGenerateNewShortURl(req, res) {
  const body = req.body;
  if (!body.url) {
    return res.status(400).json({ error: "URL is required" });
  }
  const shortId = shortid();
  await URL.create({
    shortId: shortId,
    redirectURL: body.url,
    visitHistory: [],
  });

  return res.render("home", {
    shortURL: shortId,
  });
}

async function handleGetAnalytics(req, res) {
  const shortId = req.params.shortId;
  const result = await URL.findOne({ shortId });
  return res.json({
    totalClicks: result.visitHistory.length,
    analytics: result.visitHistory,
  });
}

async function handleRedirectURL(req, res) {
  const shortId = req.params.shortid;
  const entry = await URL.findOneAndUpdate(
    {
      shortId,
    },
    {
      $push: {
        visitHistory: {
          timeStamp: Date.now(),
        },
      },
    }
  );

  res.redirect(entry.redirectURL);
}

module.exports = {
  handleGenerateNewShortURl,
  handleGetAnalytics,
  handleRedirectURL,
};
