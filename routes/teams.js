var express = require('express');
var router = express.Router();

// read the JSON file to get the team data
var fs = require('fs');
var teamDataJson = JSON.parse(fs.readFileSync('data/teams.json', 'utf8'));

// extract the team data from the JSON
var teamData = teamDataJson.teams;

router.get('/', function(req, res, next) {
  res.render('teams', { title: 'Teams', teams: teamData, bodyClass: 'teams' });
});

module.exports = router;
