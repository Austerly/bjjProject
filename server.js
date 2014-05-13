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

[clicks = 0, videoTitle = "Following the Hand Escape vs Rear Mount - Stephan Kesting with Brandon Mullin",
youtube = "https://www.youtube.com/embed/x91GF7MY5F4", subType = "RNC", counter = 1], 

[clicks = 0, videoTitle = "Escape from Back Mount - Kurt Osiander",
youtube = "https://www.youtube.com/embed/EI5epyFBM30", subType = "positional", counter = 1], 

[clicks = 0, videoTitle = "Escape an Attempted RNC with Hooks in - Submissions 101",
youtube = "https://www.youtube.com/embed/didKrAFFlSg", subType = "RNC", counter = 1], 

[clicks = 0, videoTitle = "Rear Naked Choke Tutorial - Stephan Kesting",
youtube = "https://www.youtube.com/embed/176SLdBhj_A", subType = "RNC", counter = 0],

[clicks = 0, videoTitle = "The Bow and Arrow Choke with Gripping Details - Stephan Kesting",
youtube = "https://www.youtube.com/embed/nS6ALx73epc", subType = "bowAndArrow", counter = 0],

[clicks = 0, videoTitle = "Arm Bar from Back Control - Submissions 101",
youtube = "https://www.youtube.com/embed/-JepfNsUiv4", subType = "armBar", counter = 0],

[clicks = 0, videoTitle = "Back Control to Triangle - Ryan Hall",
youtube = "https://www.youtube.com/embed/rQjROw80aaQ", subType = "legTriangle", counter = 0]

];

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

var mount = [

[clicks = 0, videoTitle = "Triangle from Mount - Ryron and Rener Gracie",
youtube = "https://www.youtube.com/embed/gc5YRdv-wSw", subType = "legTriangle", counter = 0], 

[clicks = 0, videoTitle = "Americana from Mount - Ryron and Rener Gracie",
youtube = "https://www.youtube.com/embed/SlPrqwwiaOY", subType = "americana", counter = 0], 

[clicks = 0, videoTitle = "Basic Arm Bar from Mount - Submissions 101",
youtube = "https://www.youtube.com/embed/TTAZk2Whbwo", subType = "armBar", counter = 0], 

[clicks = 0, videoTitle = "Gogoplata from Mount - Submissions 101",
youtube = "https://www.youtube.com/embed/MnauxGlVm2g", subType = "gogoplata", counter = 0], 

[clicks = 0, videoTitle = "Mount Escapes - Roy Dean",
youtube = "https://www.youtube.com/embed/2iB5nlIeZR8", subType = "mountEscape", counter = 1], 

[clicks = 0, videoTitle = "Leg Trap Mount Escape - Emily Kwok & Stephan Kesting",
youtube = "https://www.youtube.com/embed/q2OAJF__P2w", subType = "mountEscape", counter = 1], 

[clicks = 0, videoTitle = "Mount Escape: Upa - Submissions 101",
youtube = "https://www.youtube.com/embed/2sH7fF_Rcss", subType = "mountEscape", counter = 1] 

];

app.get('/mount', function(req, res){
	var mountList = mount,
	order = req.query.order;

	if (order === 'asc') {
		mountList.sort();
	}
	else if (order === 'desc') {
		mountList.sort().reverse();
	}

	res.json(mountList);

});

var sideCtrl = [

[clicks = 0, videoTitle = "Omaplata from Side Control - Submissions 101",
youtube = "https://www.youtube.com/embed/xXw1OsLC7oA", subType = "omaplata", counter = 0], 

[clicks = 0, videoTitle = "Crucifix from Side Control - Submissions 101",
youtube = "https://www.youtube.com/embed/qv4CWSTlwPQ", subType = "crucifix", counter = 0], 

[clicks = 0, videoTitle = "Von Flue Choke - Submissions 101",
youtube = "https://www.youtube.com/embed/rkwpb7RBu90", subType = "vonFlue", counter = 0], 

[clicks = 0, videoTitle = "Escaping Side Control - Demian Maia",
youtube = "https://www.youtube.com/embed/7lxafCrBvq0", subType = "sideEscape", counter = 1] 

];

app.get('/sideCtrl', function(req, res){
	var sideCtrlList = sideCtrl,
	order = req.query.order;

	if (order === 'asc') {
		sideCtrlList.sort();
	}
	else if (order === 'desc') {
		sideCtrlList.sort().reverse();
	}

	res.json(sideCtrlList);

});

var scarfHold = [

[clicks = 0, videoTitle = "Scarf Ambush Armbar - Emily Kwok with Stephan Kesting",
youtube = "https://www.youtube.com/embed/b6BBYz7REuE", subType = "armBar", counter = 0], 

[clicks = 0, videoTitle = "Crucifix from Side Control - Submissions 101",
youtube = "https://www.youtube.com/embed/qv4CWSTlwPQ", subType = "duplicate", counter = 0], 

[clicks = 0, videoTitle = "Modified Scarf Straight Arm Bar - Keith Owen",
youtube = "https://www.youtube.com/embed/Pd_fEAjBKOo", subType = "armBar", counter = 1], 

[clicks = 0, videoTitle = "Scarf Hold Escape to Darce Choke - 10th Planet Jiu Jitsu",
youtube = "https://www.youtube.com/embed/YuTz9RAMATk", subType = "darce", counter = 1] 

];

app.get('/scarfHold', function(req, res){
	var scarfHoldList = scarfHold,
	order = req.query.order;

	if (order === 'asc') {
		scarfHoldList.sort();
	}
	else if (order === 'desc') {
		scarfHoldList.sort().reverse();
	}

	res.json(scarfHoldList);

});

var fullGuard = [

[clicks = 0, videoTitle = "Escaping the Triangle Choke from Guard - Stephan Kesting",
youtube = "https://www.youtube.com/embed/szAvJFvIzx4", subType = "legTriangle", counter = 1], 

[clicks = 0, videoTitle = "Fundamentals, Grip Fighting, Passing Sequences, and Specialty Situations on Passing the Guard - Ryan Hall",
youtube = "https://www.youtube.com/embed/y3jzIOw1ehI", subType = "fullGuardEscape", counter = 1], 

[clicks = 0, videoTitle = "Sauer Guard Pass - Keith Owen",
youtube = "https://www.youtube.com/embed/XzCcw9J4aLc", subType = "fullGuardEscape", counter = 1],

[clicks = 0, videoTitle = "Triangle Choke from Guard with Overhook - Rene Dreifuss",
youtube = "https://www.youtube.com/embed/k496-J8EQMg", subType = "legTriangle", counter = 0], 

[clicks = 0, videoTitle = "Scorpion Rib Crush - Submissions 101",
youtube = "https://www.youtube.com/embed/MMTz3e33MeE", subType = "scorpionRibCrush", counter = 0], 

[clicks = 0, videoTitle = "Scissor Sweep to Bow & Arrow Choke - Mark Massey",
youtube = "https://www.youtube.com/embed/X3sApM69G_A", subType = ["scissorSweep", "bowAndArrow"], counter = 0], 

[clicks = 0, videoTitle = "Kimura from Guard - Rener Gracie",
youtube = "https://www.youtube.com/embed/xqSdVL82QVk", subType = "kimura", counter = 0]  

];

app.get('/fullGuard', function(req, res){
	var fullGuardList = fullGuard,
	order = req.query.order;

	if (order === 'asc') {
		fullGuardList.sort();
	}
	else if (order === 'desc') {
		fullGuardList.sort().reverse();
	}

	res.json(fullGuardList);

});

var halfGuard = [

[clicks = 0, videoTitle = "Half Guard Pass to Side Control & Kesa Gatame - Mark Massey",
youtube = "https://www.youtube.com/embed/oKxKF11czu4", subType = "halfGuardEscape", counter = 1] 

];

app.get('/halfGuard', function(req, res){
	var halfGuardList = halfGuard,
	order = req.query.order;

	if (order === 'asc') {
		halfGuardList.sort();
	}
	else if (order === 'desc') {
		halfGuardList.sort().reverse();
	}

	res.json(halfGuardList);

});

var otherGuards = [

];

app.get('/otherGuards', function(req, res){
	var otherGuardsList = otherGuards,
	order = req.query.order;

	if (order === 'asc') {
		otherGuardsList.sort();
	}
	else if (order === 'desc') {
		otherGuardsList.sort().reverse();
	}

	res.json(otherGuardsList);

});

var standing = [

[clicks = 0, videoTitle = "Scissor Takedown with Kneebar - Mark Massey",
youtube = "https://www.youtube.com/embed/Em0i3mtT4GU", subType = "scissorTakedown", counter = 0], 

[clicks = 0, videoTitle = "Arm Drag to Kouchi Gake - Stephan Kesting & Brandon Mullins",
youtube = "https://www.youtube.com/embed/WQf_pSK6zGk", subType = "singleLegTakedown", counter = 1], 

[clicks = 0, videoTitle = "The Corkscrew Takedown - Nick Robinson",
youtube = "https://www.youtube.com/embed/uoBNRWnZ5EE", subType = "hipShoulderTakedown", counter = 1], 

[clicks = 0, videoTitle = "Morote Gari or Double Leg Takedown - Matt D'Aquico",
youtube = "https://www.youtube.com/embed/xi8MmLyD4ps", subType = "doubleLegTakedown", counter = 1], 

[clicks = 0, videoTitle = "Flying Arm Bar - Aaron Ram & Dylan Fraser",
youtube = "https://www.youtube.com/embed/76bEAM5MjrQ", subType = "armBar", counter = 0], 

[clicks = 0, videoTitle = "Ude Gatame or Standing Arm Bar - Submissions 101",
youtube = "https://www.youtube.com/embed/6xu-4LkaqLE", subType = "armBar", counter = 0], 

[clicks = 0, videoTitle = "Standing Guillotine Choke - Dan Theodore",
youtube = "https://www.youtube.com/embed/to3tu5-bSgw", subType = "guillotine", counter = 0], 

[clicks = 0, videoTitle = "How to Get Out of a Standing Guillotine - Babs Olusanmokun",
youtube = "https://www.youtube.com/embed/gARA3_h0oIk", subType = "guillotine", counter = 1] 

];

app.get('/standing', function(req, res){
	var standingList = standing,
	order = req.query.order;

	if (order === 'asc') {
		standingList.sort();
	}
	else if (order === 'desc') {
		standingList.sort().reverse();
	}

	res.json(standingList);

});

var northSouth = [

[clicks = 0, videoTitle = "Scoot and Spin North South Escape - Submissions 101",
youtube = "https://www.youtube.com/embed/6ZoJ5_omTIY", subType = "northSouthEscape", counter = 1], 

[clicks = 0, videoTitle = "North South Escape - Ken Primola",
youtube = "https://www.youtube.com/embed/umYtZQlIpMA", subType = "northSouthEscape", counter = 1], 

[clicks = 0, videoTitle = "Roll Over Escape - Submissions 101",
youtube = "https://www.youtube.com/embed/_35h4Betuf4", subType = "northSouthEscape", counter = 1], 

[clicks = 0, videoTitle = "The North South Choke - Marcelo Garcia & Stephan Kesting",
youtube = "http://www.youtube.com/embed/xi8MmLyD4ps", subType = "northSouthChoke", counter = 0],

[clicks = 0, videoTitle = "North South Kimura - Great Grappling",
youtube = "https://www.youtube.com/embed/ZFwS97dmH_4", subType = "kimura", counter = 0], 

[clicks = 0, videoTitle = "Ude Gatame or North South Arm Bar - Submissions 101",
youtube = "https://www.youtube.com/embed/6xu-4LkaqLE", subType = "armBar", counter = 0], 

[clicks = 0, videoTitle = "North South Diving Board Choke - Scott Marker",
youtube = "https://www.youtube.com/embed/to3tu5-bSgw", subType = "northSouthChoke", counter = 0], 

[clicks = 0, videoTitle = "North South Sitting Americana - Piet Wilhelm",
youtube = "http://www.youtube.com/embed/r92aq2dHi6g", subType = "americana", counter = 0] 

];

app.get('/northSouth', function(req, res){
	var northSouthList = northSouth,
	order = req.query.order;

	if (order === 'asc') {
		northSouthList.sort();
	}
	else if (order === 'desc') {
		northSouthList.sort().reverse();
	}

	res.json(northSouthList);

});

var beltTie = [

[clicks = 0, videoTitle = "How to Tie the Belt - Rener Gracie",
youtube = "http://www.youtube.com/embed/-shq5oDSCs4", subType = "beltTie", counter = 1], 

[clicks = 0, videoTitle = "How to Tie Your BJJ or Judo Belt - Stephan Kesting",
youtube = "http://www.youtube.com/embed/JZHIDu0cuCM", subType = "beltTie", counter = 1], 


[clicks = 0, videoTitle = "How to Tie Your Jiu Jitsu Pants - Rener Gracie",
youtube = "http://www.youtube.com/embed/ODtOnFQ7LDE", subType = "beltTie", counter = 0] 

];

app.get('/beltTie', function(req, res){
	var beltTieList = beltTie,
	order = req.query.order;

	if (order === 'asc') {
		beltTieList.sort();
	}
	else if (order === 'desc') {
		beltTieList.sort().reverse();
	}

	res.json(beltTieList);

});

app.listen(4000);