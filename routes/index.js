const { response } = require('express');
var express = require('express');
var router = express.Router();
var constants = require('../config/constants')
var chat = require('../scripts/script-helper')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Chat Bot',bot_name: constants.BOT_NAME });
});

router.post('/api/messageBot', function(req, res, next) {
  console.log(req.body.data)
  chat.chatwithBot(req.body.data, (response)=>{
    //console.log(response)
    res.send(response)
  })
});

module.exports = router;
