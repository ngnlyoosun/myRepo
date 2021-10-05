var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index-home', { 
    title: 'Home'
  });
});

/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('index-home', { 
    title: 'Home'
  });
});

/* GET About page. */
router.get('/about', function(req, res, next) {
  res.render('index-about', { 
    title: 'About'
  });
});

/* GET Products page. */
router.get('/projects', function(req, res, next) {
  res.render('index-projects', { 
    title: 'Projects'
  });
});

/* GET Services page. */
router.get('/services', function(req, res, next) {
  res.render('index-services', { 
    title: 'Services'
  });
});

/* GET Contact Us page. */
router.get('/contact', function(req, res, next) {
  res.render('index-contact', { 
    title: 'Contact Us'
  });
});

module.exports = router;
