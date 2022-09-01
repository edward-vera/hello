// let student = {
//     "name": "bob",
//     "age": "12",
//     "grade": "7",
//     "address": {
//         "street" : "1234 main street",
//         "city" : "Austin",
//         "state" : "tx",
//         "zip" : "78704"
//     } 

const { query } = require("express")

// }

let request = {

// ..some stuff
params: {
    "name": "bob",
}

}

let value = request.params.name;
request.query.name
request.query.id

// query parameters
_encoding=UTF8