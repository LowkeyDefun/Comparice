// dependencies
var express    = require("express"),
    app        = express(),
    bodyParser = require("body-parser");

// routes
var indexRoutes   = require("./routes/index"),
    compareRoutes = require("./routes/compare");


/********** App Configs **********/

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + "/public"));
app.set("view engine", "ejs");

// routes config
app.use("/", indexRoutes);
app.use("/compare", compareRoutes);


/********** LISTEN **********/

// Tell Express to listen for requests (start server).
app.listen(process.env.PORT, process.env.IP, function() {
    console.log("ComParice Server Started.");
});