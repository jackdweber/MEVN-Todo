var express = require('express');
var mongoose = require('mongoose');
var Todo = mongoose.model('Todo');
var router = express.Router();

var errorHTML = '<h1>An Error Has Occurred</h1>';

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/add/:name/:complete', function(req, res, next) {
  Todo.create({name: req.params.name, complete: req.params.complete}, function (error, results){
    if(error){
      res.send(errorHTML);
    }
    else{
      res.json(results);
    }
  });
});

router.get('/get', function(req, res, next){
  Todo.find({}, function (error, results){
    if(error){
      res.send(errorHTML);
    }
    else{
      res.json(results);
    }
  });
});

router.delete('/delete/:id', function(req, res){
  Todo.find({_id: req.params.id}).remove(function(error, results){
    if(error){
      res.send(errorHTML);
    }
    else{
      res.send(results);
    }
  })
})

module.exports = router;
