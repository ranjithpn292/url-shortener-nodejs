const express = require("express");

const path = require("path");
const app = express();
const urlRoute = require("./routes/url");
const URL = require("./models/url");
const { connectToMongoDB } = require("./connect");
const staticRouter = require("./routes/staticRouter");

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

const PORT_NUMBER = 8081;

// middleware - plugins
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//routes
app.use("/url", urlRoute);
app.use("/", staticRouter);

// UI view engine routes

app.get("/test", async (req, res) => {
  const allURLs = await URL.find({});
  res.render("home", {
    urls: allURLs,
  });
});

// connect to DB
connectToMongoDB("mongodb://localhost:27017/urlshortstore");

app.listen(PORT_NUMBER, () => {
  console.log(`server is running on port: ${PORT_NUMBER}`);
});
