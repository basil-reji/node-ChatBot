var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Chat Bot' });
});

router.post('/api/messageBot', function(req, res, next) {
  console.log(req.body.data)
  res.send('helloooooo')
});

module.exports = router;
