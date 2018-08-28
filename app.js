var express    = require("express"),
    app        = express(),
    bodyParser = require("body-parser");

var indexRoutes = require("./routes/index");


/********** App Configs **********/

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + "/public"));
app.set("view engine", "ejs");

// Routes config
app.use("/", indexRoutes);


/********** LISTEN **********/

// Tell Express to listen for requests (start server)
app.listen(process.env.PORT, process.env.IP, function() {
    console.log("ComParice Server Started.");
});