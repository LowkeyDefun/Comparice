var express = require("express");
var router  = express.Router();
var https = require('https');

// Send https query. 
function web_query(query){
    https.get(query, (res) => {
        console.log('statusCode:', res.statusCode);
        console.log('headers:', res.headers);
    
        res.on('data', (d) => {
            process.stdout.write(d);
        });
    
    }).on('error', (e) => {
        console.error(e);
    });
}

// Construct the https query.
function constr_query(info){
    let constr_query;
    for (let key in info) {
        if (constr_query)
            constr_query.concat("+" + info[key]);
        else
            constr_query = info[key];
    }
    return constr_query;
}


// root route
router.get("/", function(req, res) {
    res.render("compare");
});

// compare route
router.post("/", function(req, res) {
    console.log(req.body);
    let query_str = constr_query(req.body);
    web_query("https://www.office.co.uk/view/search?search=" + query_str);
    res.render("results", {results: [1, 2, 3]});
});

// module exports
module.exports = router;
