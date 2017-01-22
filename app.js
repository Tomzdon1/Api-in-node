var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

app.use(bodyParser.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
Genre = require('./models/genre.js');
Book = require('./models/book.js');
City = require('./models/city.js');
//Connect to mongoose
mongoose.connect('mongodb://localhost/api');
var db = mongoose.connection;

app.get('/',function(req,res){
    
    res.send('Hellooo World');
});
app.get('/api/genres', function(req,res){
    Genre.getGenres(function(err,genres){
        if(err) {
            throw err;
        }
        res.json(genres);
    });
});
app.post('/api/genres', function(req,res){
    var genre = req.body;
    Genre.addGenres(genre, function(err,genre){
        if(err) {
            throw err;
        }
        res.json(genre);
    });
});
app.get('/api/books', function(req,res){
    Book.getBook(function(err,books){
        if(err) {
            throw err;
        }
        res.json(books);
    });
});
app.get('/api/books/:_id', function(req,res){
    Book.getBookById(req.params._id ,function(err,books){
        if(err) {
            throw err;
        }
        res.json(books);
    });
});
app.post('/api/books', function(req,res){
    var book = req.body;
    Book.addBook(book, function(err,book){
        if(err) {
            throw err;
        }
        res.json(book);
    });
});
app.get('/api/city',function(req,res){
    
    City.getCities(function(err,city){
        if(err){
            throw err;
        }
        res.json(city);
    });
});
app.listen(4000);
console.log("Running on port 4000..");