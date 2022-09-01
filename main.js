console.log("loadin main.js")

const { response } = require('express');
let express = require('express')

let app = express();
let PORT = 8080;


// for any get request where the route is "/hello",
// send the string "hello" on the response
// REQUEST GOES FIRST! RESPONSE GOES SECOND! ALWAYS! REQ and RES 
// are just variable names!
app.get("/hello", function(req, res){
    res.send("Hello");
})

// this route should return string of the form
// "hello there :name"
// ex: request = /hello/bob, response = hello there bob
app.get("/hello/:name", function(req, res){
    // this line requests
    let value  = req.params.name;
    // this line responds
    res.send("hello there "+ value)
})


app.listen(PORT, function(){
    console.log("application started and listening on port", PORT);
})


// write a GET route definition that will do the following
// localhost:8080/bye?name=mike  needs to return -> "see ya later mike"
// localhost:8080/bye?name=bob  needs to return -> "see ya later mike"
// localhost:8080/bye -> "see ya later"

// hint you get the query params using: req.query.name

// HW:
// VV Route VV \\
app.get("/bye", function(req, res){
    let adios = req.query.name;
    if(adios){
    res.send("see ya later "+ adios)
    }else{
    res.send("see ya later")};
})
