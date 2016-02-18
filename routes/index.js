var express = require('express');
var router = express.Router();

var projects = [{name: "discoveroute", slug:"discoveroute", img:"images/discoveroute3.png", content: "discoveroute is a mobile web app for discovering path-based sites along routes."},
				{name: "Dais Glass", slug:"dais", img:"images/dais.png", content: "Dais is a Google Glass presentation aid & analytics tool."},
				{name: "d.constraints", slug:"research", img: "images/dconstraints.png", content: "Here is independent research on delaying design constraints."},
				{name: "SmartCart", slug:"smartcart", img:"images/smartcart3.png", content: "SmartCart is a smart shopping tablet app that helps users to quickly locate items and purchase them at the cart."}];
				// {name: "Six Degree", slug:"sixdegree", img:"images/sixdegr.png", content: "SixDegree is a conceptual media tool that weights your relationships."},
				// {name: "Respiration", slug:"respiration", img:"images/respiration2.png", content: "Respiration is an interactive art piece on city life and its people."}];

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
