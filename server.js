const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const config = require("./server/database/DB");
const AdHouseRouter = require("./server/routes/AdHouseRoutes");
const app = express();
const PORT = 4200;

mongoose.connect(config.DB, { useNewUrlParser: true }).then(
  () => {
    console.log("Database is connected");
  },
  err => {
    console.log(`Can not connect to the database${err}`);
  }
);
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/adHouse", AdHouseRouter);

app.listen(PORT, () => {
  console.log("Server is running on Port: ", PORT);
});
