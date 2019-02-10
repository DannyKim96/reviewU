var express = require("express");
var app = express();
var port = 8080;
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


var mongoose = require("mongoose");
var router = new express.Router();





//Connecting and initializing the database
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/node-demo", {
    useNewUrlParser:true
});

//Building and defining the schema of the database
var customerSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    phone: String,
    age:String
});

//Create our model
var User = mongoose.model("Customer", customerSchema);




//express routers response is to send a file by the name of index.html
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});


app.post("/addname", (req, res) => {
    var myData = new User(req.body);
    myData.save()
        .then(item => {
            res.send("item saved to database");
        })
        .catch(err => {
            res.status(404).send("unable to save to database");
        });
});
app.listen(port, () => {
    console.log("Server listening on port: " + port);
});




