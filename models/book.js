var mongoose = require('mongoose');

//Book Schema

var bookSchema = mongoose.Schema({
    title:{
        type:String,
        require:true
    },
    genre:{
        type:String,
        require:true
    },
    description:{
        type:String,
        require:true
    },
    author:{
        type:String,
        require:true
    },
    publisher:{
        type:String,
    },
    pages:{
        type:String,
    },
    images_url:{
        type:String,
    },
    buy_url:{
        type:String,
    },
    create_date:{
        type:Date,
        default:Date.now
    }
}); 

var Book = module.exports = mongoose.model('Book',bookSchema);

//Get Genres 
module.exports.getBook = function(callback, limit ){
    Book.find(callback).limit(limit);
},
module.exports.getBookById = function(id, callback){
    Book.findById(id,callback);
}
// add Book 
module.exports.addBook = function(book, callback){
    Book.create(book,callback);
}