var express = require('express');
var path = require('path');
var debug = require("debug");
var logger = require('morgan');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var expressLayouts = require('express-ejs-layouts');
var app = express();
var router = express.Router();

var Animal = require('./models/animals')

var moongoose = require('mongoose');
moongoose.connect('mongodb://localhost/animal-shelter');

app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.set('views', path.join(__dirname, 'views'));
app.use(expressLayouts);
app.engine('ejs', require('ejs').renderFile);
app.set('view engine', 'ejs');
app.use(bodyParser.json());

// //root path
// app.get('/', function(req, res){
//   res.render('blah')
//   res.sendFile(path.join(__dirname + './views/index.html'));
//   res.json(Animal.find());
// })

//foods index path
app.get('/animals', function(req, res) {
  // res.sendFile(path.join(__dirname + './views/index.html'));
  
  Animal.find({}, function(err, animals) {
  	if (err) console.log(err);
  	res.json(animals);
  })
})

//show
app.post('/animals/:id', function(req, res) {

})

//new





// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

app.listen(3000)