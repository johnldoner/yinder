var express = require('express');
var router = express.Router();

var content={ title: 'Choose Your Preference',


  author: {
    id: 47,
    name: "Yehuda Katz"
  },
  items: [
    {name: "Handlebars3", emotion: "love1"},
    {name: "Mustache2", emotion: "enjoy2"},
    {name: "Ember1", emotion: "want to learn4"}
  ]



};

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('preference', content);
});

module.exports = router;
