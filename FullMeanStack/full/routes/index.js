var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Comment = mongoose.model('comment');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET comments */
router.get('/comments', function(req, res, next) {
  Comment.find(function(err, comments){
    if(err){ return next(err); }
    res.json(comments);
  });
});

/* POST comments */
router.post('/comments', function(req, res, next) {
  var comment = new Comment(req.body);
  comment.save(function(err, comment){
    if(err){ return next(err); }
    res.json(comment);
  });
});

module.exports = router;
