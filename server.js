var express = require('express'),
	app = express();
	bodyParser = require('body-parser');

//Express Middleware
app.use(bodyParser());

// CORS Middleware
app.all('*', function (req, res, next) {
	res.header('Access-Control-Allow-Origin', "*");
	res.header('Access-Control-Allow-Headers', '*');
	next();
});

//Handlers
var backCtrl = [

[likes = 0, videoTitle = "Escape an Attempted RNC with Hooks in - Submissions 101",
youtube = "http://www.youtube.com/embed/x91GF7MY5F4", subType = "RNC"], 

[likes = 0, videoTitle = "Escape from Back Mount - Kurt Osiander",
youtube = "http://www.youtube.com/embed/EI5epyFBM30", subType = "positional"], 

[likes = 0, videoTitle = "Escape an Attempted RNC with Hooks in - Submissions 101",
youtube = "http://www.youtube.com/embed/didKrAFFlSg", subType = "RNC"], 

[likes = 0, videoTitle = "Rear Naked Choke Tutorial - Stephan Kesting",
youtube = "http://www.youtube.com/embed/176SLdBhj_A", subType = "RNC"],

[likes = 0, videoTitle = "The Bow and Arrow Choke with Gripping Details - Stephan Kesting",
youtube = "http://www.youtube.com/embed/nS6ALx73epc", subType = "bowAndArrow"],

[likes = 0, videoTitle = "Arm Bar from Back Control - Submissions 101",
youtube = "http://www.youtube.com/embed/-JepfNsUiv4", subType = "armBar"],

[likes = 0, videoTitle = "Back Control to Triangle - Ryan Hall",
youtube = "http://www.youtube.com/embed/rQjROw80aaQ", subType = "legTriangle"]

] 

app.get('/backCtrl', function(req, res){
	var backCtrlList = backCtrl,
	order = req.query.order;

	if (order === 'asc') {
		backCtrlList.sort();
	}
	else if (order === 'desc') {
		backCtrlList.sort().reverse();
	}

	res.json(backCtrlList);

});

app.listen(4000);