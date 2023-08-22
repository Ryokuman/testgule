const express = require("express");
const cors = require("cors");

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  const ip = req.header["x-forwarded-for"] || req.connection.remoteAddress;
  console.log(ip);

  res.send("404 not found");
});

app.use(cors());
app.listen(port, "0.0.0.0");
