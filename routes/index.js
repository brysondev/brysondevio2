const express = require("express");
const router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index");
});

/* Get Sprays converter page. */
router.get("/sprays", function (req, res, next) {
  res.render("vtf", { title: "Spray Converter" });
});

module.exports = router;
