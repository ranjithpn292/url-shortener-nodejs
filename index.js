const express = require("express");
const app = express();

const urlRoute = require("./routes/url");
const URL = require("./models/url");
const { connectToMongoDB } = require("./connect");

const PORT_NUMBER = 8081;

// iddleware - plugins
app.use(express.json());

app.get("/:shortid", async (req, res) => {
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
});

// connect to DB
connectToMongoDB("mongodb://localhost:27017/urlshortstore");

//routes
app.use("/url", urlRoute);

app.listen(PORT_NUMBER, () => {
  console.log(`server is running on port: ${PORT_NUMBER}`);
});
