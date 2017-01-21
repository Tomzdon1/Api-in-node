var mongoose = require('mongoose');

//Genre Schema

var miejscowosciSchema = mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    create_date:{
        type:Date,
        default:Date.now
    }
}); 

var Miejscowosc = module.exports = mongoose.model('Miejscowosc',miejscowosciSchema);

//Get Genres 
module.exports.getMiejscowosc = function(callback, limit ){
    Miejscowosc.find(callback).limit(limit);
}