var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('crown_29', { title: '408411329 黃于豪'});
});

module.exports = router;