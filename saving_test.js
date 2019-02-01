
const assert = require('assert');
const Users = require('../models/user')
//Describe tests
describe('Saving records', function(){

  //Create tests
  it('Saves a record to the database', function(done){

    var char = new Users({
      name:'Danny Kim',
      phone:'123456789'
    });

    char.save().then(function(){
      assert(char.isNew === false);
      done();
    });

  });

});
