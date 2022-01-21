const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

const indexRouter = require("./routes/index");

const app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  switch (err.status) {
    case 404:
      res
        .status(404)
        .send("Sorry, the resource you are looking for does not exist.");
      break;
    case 401:
      res
        .status(401)
        .send(
          "Sorry, the resource you are looking for requires authorization."
        );
      break;
    case 403:
      res
        .status(403)
        .send(
          "Sorry, the resource you are looking for is inaccessable at this time to you."
        );
      break;
    case 408:
      res.status(408).send("Sorry, the request timed out. Please try again.");
      break;
    case 410:
      res.status(410).send("Gone.");
      break;
    default:
      res
        .status(500)
        .send(
          "Sorry, something appears wrong with the server. Kindly contact the system admin to correct this issue or wait a little while."
        );
      break;
  }
});

module.exports = app;
