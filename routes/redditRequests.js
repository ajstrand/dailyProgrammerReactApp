require('dotenv').config();
var express = require('express');
var router = express.Router();
var snoowrap = require('snoowrap');

const r = new snoowrap({
  userAgent: 'random daily programmer challenge',
  clientId: process.env.clientId,
  clientSecret: process.env.clientSecret,
  refreshToken: process.env.refreshToken
});

r.config({"proxies":false});

router.get('/', function(req, res, next){
  res.json("hi from from our test route");
});


router.get('/challenge', function(req, res, next){
    var easyReg = /Easy/gi;
    var medium = /Intermediate/gi;
    var hardReg = /Hard/gi;
    var daily = r.getSubreddit('dailyprogrammer');

    daily.getHot().then(submissions => {
      var subsLength = submissions.length;
      var min = 0;
      var randomSub = Math.floor(Math.random() *(subsLength - min)) + min;
      var fields = submissions[randomSub];
      var postTitle = fields.title;
      var postText = fields.selftext;
      var postId = fields.id;
      var challengeObj = {
        text:postText,
        title:postTitle
      }
      res.json(challengeObj);
    });
});

module.exports = router;
