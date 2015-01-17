var express = require('express');
var router = express.Router();

var content={ title: 'Yinder',


  author: {
    id: 47,
    name: "Yehuda Katz"
  },
  items: [
    {name: "Handlebars", emotion: "love"},
    {name: "Mustache", emotion: "enjoy"},
    {name: "Ember", emotion: "want to learn"}
  ]



};

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', content);
});



module.exports = router;
