var express = require('express');
var router = express.Router();


//const categories= require('../data/categories');
 // const db = require('../utils/database');

const crown2Controller_29= require('../controllers/crown2Controller_29');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('crown2_29', { 
    title: '408411329 黃于豪(static)',
    data : categories
  });
});

router.get('/homepage',crown2Controller_29.getHomepage);

router.get('/shop_29/:product',crown2Controller_29.getProductsByCategory)
module.exports = router;