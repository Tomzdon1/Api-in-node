var mongoose = require('mongoose');

//Genre Schema

var genreSchema = mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    create_date:{
        type:Date,
        default:Date.now
    }
}); 

var Genre = module.exports = mongoose.model('Genres',genreSchema);

//Get Genres 
module.exports.getGenres = function(callback, limit ){
    Genre.find(callback).limit(limit);
}
// add genre 
module.exports.addGenres = function(genre, callback){
    Genre.create(genre,callback);
}