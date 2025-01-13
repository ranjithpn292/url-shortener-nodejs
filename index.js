const express = require("express");
const app = express();

const PORT_NUMBER = 8081;

app.listen(PORT_NUMBER, () => {
  console.log(`server is running on port: ${PORT_NUMBER}`);
});
