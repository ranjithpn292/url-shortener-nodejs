const mongoose = require("mongoose");

async function connectToMongoDB(url) {
  mongoose.connect(url).then(() => {
    "connected to Mongo DB";
  });
}

module.exports = {
  connectToMongoDB,
};
