var express = require('express');
var router = express.Router();

var content={ title: 'Choose Your Preference',


  author: {
    id: 47,
    name: "Yehuda Katz"
  },
  places: [
    {name: "Restaurants"},
    {name: "Nightlife"},
    {name: "Food"},
    {name: "Bars"},
    {name: "Art& Entertainment"},
    {name: "Active Life"}
    
  ]



};

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('preference', content);
});

module.exports = router;
