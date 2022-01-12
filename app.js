const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const passport = require("passport");
const session = require("express-session");

const app = express();

mongoose.connect(
  // URL ,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log("Mongoose Is Connected");
  }
);

app.use(
  session({
    secret: "secretcode",
    reseve: true,
    saveUninitialized: true,
  })
);

app.listen(4000, () => {
  console.log("Server has started");
});
