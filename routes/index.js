var express = require('express');
var router = express.Router();

// read the JSON file to get the team data
var fs = require('fs');
var teamDataJson = JSON.parse(fs.readFileSync('data/teamData.json', 'utf8'));

// extract the team data from the JSON
var teamData = teamDataJson.teamData;

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express MLB Standings', teamData: teamData });
});

module.exports = router;
