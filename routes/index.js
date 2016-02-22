var express = require('express');
var router = express.Router();

var projects = [{name: "discoveroute", slug:"discoveroute", img:"images/discoveroute3.png", content: "discoveroute is a mobile web app for discovering path-based sites along routes."},
				{name: "Dais Glass", slug:"dais", img:"images/dais.png", content: "Dais is a Glass presentation aid and analytics tool."},
				{name: "Respiration", slug:"respiration", img:"images/respiration2.png", content: "Respiration is an interactive art piece on city life and its people."},
				{name: "SmartCart", slug:"smartcart", img:"images/smartcart3.png", content: "SmartCart is a smart shopping tablet app that helps users to quickly locate items and purchase them at the cart."},
				{name: "Potpourri", slug:"potpourri", img:"images/respiration2.png", content: "An assortment of physical products, visual designs, and art."},
				{name: "Uber", slug:"uber", img:"images/uber.png", content: "Streamlining conflict resolution between drivers and driver ops."},
				{name: "d.constraints", slug:"research", img: "images/dconstraints.png", content: "My thesis researched and experimented on external design constraints and internal design fixation."},
				{name: "Frog", slug:"frog", img:"images/frog.png", content: "Enabling employees to author and customize original content."},
				{name: "Remind", slug:"remind", img:"images/remind.png", content: "Accelerating teacher growth during back-to-school season."}
				];

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Elaine Zhou' , projects: projects});
});


/* GET home page. */
router.get('/productchallenge', function(req, res) {
  res.render('productchallenge', { title: 'KPCB Product Challenge: Crazy for Crockpot' });
});

router.get('/googlechallenge', function(req, res) {
  res.render('googlechallenge', { title: 'Google Interview Challenge' });
});

for (var i=0; i<projects.length; i++){
	var project = projects[i];
	var endpoint = '/' + project.slug;
	renderPage(project);
}

function renderPage(project){
	router.get(endpoint, function(req, res) {
		res.render(project.slug, {title: project.name, project: project});
	});
}


module.exports = router;
