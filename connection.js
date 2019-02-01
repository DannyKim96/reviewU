const mongoose = require('mongoose');

//ES6 Promises6
mongoose.Promise = global.Promise;


//Connect to the db before tests run
before(function(done){

  //Connect to mongodb
  mongoose.connect('mongodb://localhost/reviewUDatabase', {useNewUrlParser: true});﻿

  //Listen to connection once and then execute function
  mongoose.connection.once('open',function(){

    console.log('Connection has been made, now make fireworks...');
    done();
  //if error has been made use this function instead
  }).on('error',function(error){
    console.log('Connection error:', error);
  });


});
