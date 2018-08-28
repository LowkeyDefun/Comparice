var express = require("express");
var router  = express.Router();

// root route
router.get("/", function(req, res) {
    res.render("compare");
});

// compare route
router.post("/", function(req, res) {
    console.log(req.body);
    res.render("compare");
});

// module exports
module.exports = router;
