var express = require("express");
var router  = express.Router();

// Set root route.
router.get("/", function(req, res) {
    res.render("landing");
});

// Module exports.
module.exports = router;