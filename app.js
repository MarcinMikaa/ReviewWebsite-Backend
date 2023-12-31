const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const passport = require("passport");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const bodyParser = require("body-parser");
const MongoStore = require("connect-mongo");

const { register } = require("./actions/register");
const { login } = require("./actions/login");
const { logout } = require("./actions/logout");
const { getUser } = require("./actions/get-user");
const { addNewReview } = require("./actions/add-new-review");
const { getReviews } = require("./actions/get-reviews");
const { addNewComment } = require("./actions/add-new-comment");
const { getComments } = require("./actions/get-comments");

const app = express();

mongoose.connect(
  "mongodb+srv://praktyki:praktyki2021@development.wtktz.mongodb.net/reviews-website",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log("Mongoose Is Connected");
  }
);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.use(
  session({
    secret: "secretcode",
    resave: true,
    saveUninitialized: true,
    store: MongoStore.create({
      mongoUrl: "mongodb+srv://praktyki:praktyki2021@development.wtktz.mongodb.net/sneakers-release",
    }),
  })
);

app.use(cookieParser("secretcode"));
app.use(passport.initialize());
app.use(passport.session());
require("./passportConfig")(passport);

app.post("/register", register);
app.post("/login", login);
app.get("/logout", logout);
app.get("/user", getUser);

app.get("/reviews", getReviews);
app.post("/add-review", addNewReview);

app.get("/comments", getComments);
app.post("/add-comment", addNewComment);

app.listen(4000, () => {
  console.log("Server has started");
});
