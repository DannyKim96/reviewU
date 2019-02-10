const mongoose = require('mongoose');
const express = require('express');


const app = express();


// development environment only - local environment
//mongoose.connect('mongodb://localhost/TEST');


//create a variable for mongoose connection
//let db = mongoose.connection;

//listen to the connected event
//in the instance the database is connected, print log connected, etc.
// db.on('connected', function() {
//     console.log('connected to db');
// });

//listen to the event of  disconnection
// db.on('disconnected', function() {
//     console.log("disconnected from database");
// });

//connection error handling
// db.on('error', function(error) {
//     console.log("error connecting to database", error)
// });


// app.get('/TEST', function (req,res) {
//    Users.find({}, function(err, TEST) {
//        if(err) {
//            console.log(err);
//        } else {
//            res.render('index', {
//                TEST:TEST
//            });
//        }
//    });
// });

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";
//var name = document.getElementById("exampleInputFirstName");

MongoClient.connect(url, function(err, db) {
    if(err) throw err;
    var dbo  = db.db("testdb");
    var obj = {name: "testUser", email: "test@test.com"};




    /*Find all data within your collection*/

    // dbo.collection("users").find({}).toArray(function(err, result) {
    //     if (err) throw err;
    //     console.log(result);
    //     db.close();
    // })

    /* Find specified data within your collection provided */
    //
    // dbo.collection("users").findOne({}, function(err, result) {
    //     if(err) throw err;
    //     console.log(result.email);
    //     db.close();
    //
    // })


   /* Insert a document inside of that collection -- object variable must be created  */

    // dbo.collection("users").insertOne(obj, function(err, res) {
    //     if(err) throw err;
    //     console.log("1 document inserted");
    //     db.close();
    // })


  /* Create a collection   */

    // dbo.createCollection("users", function(err, res) {
    //     if (err) throw err;
    //     console.log("Collection Created");
    //     db.close();
    // })

})