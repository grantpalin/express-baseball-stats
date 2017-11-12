var express = require('express');
var router = express.Router();

// read the JSON file to get the team data
var fs = require('fs');
var teamDataJson = JSON.parse(fs.readFileSync('data/teamData.json', 'utf8'));

// extract the team data from the JSON
var teamData = teamDataJson.teamData;

// helper function for win/loss percentage calculations
function pct(win, lose) {
    return (win / (win + lose)).toFixed(3).slice(1);
}

// calculate the win/loss percentages - total, home, and away
teamData.forEach(function cb(currentValue, index, array) {
    currentValue.pct     = pct(currentValue.win,     currentValue.lose);
    currentValue.pctHome = pct(currentValue.winHome, currentValue.loseHome);
    currentValue.pctAway = pct(currentValue.winAway, currentValue.loseAway);
});

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express MLB Standings', teamData: teamData });
});

module.exports = router;
