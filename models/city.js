var mongoose = require('mongoose');

var citySchema = mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    create_date:{
        type:Date,
        default:Date.now
    }
});
var City = module.exports = mongoose.model('City',citySchema);

// getCity
module.exports.getCities = function(callback,limit){
    City.find(callback).limit(limit);
}