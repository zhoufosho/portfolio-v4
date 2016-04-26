var express = require('express');
var router = express.Router();

var projects = [{name: "discoveroute", slug:"discoveroute", img:"images/discoveroute3.png", content: "discoveroute is a mobile web app for discovering path-based sites along routes."},
				{name: "d.constraints", slug:"research", img: "images/dconstraints.png", content: "My thesis researched the role of constraints in design processes."},
				{name: "Emoshkas", slug:"emoshkas", img:"images/emoshkas.png", content: "Emoshkas is a learning toy that helps children process emotions."},
				{name: "SmartCart", slug:"smartcart", img:"images/smartcart3.png", content: "SmartCart is a tablet app that helps shoppers quickly locate items and purchase them."},
				{name: "Dais", slug:"dais", img:"images/dais.png", content: "Dais is a Glass presentation aid and analytics tool."},
				{name: "Etcetera", slug:"etc", img:"images/etc.png", content: "An assortment of physical products, visual designs, and art."}
				];

var works = [{name: "Uber", slug:"uber", img:"images/uber.png", content: "Facilitating conflict resolution between drivers and ops.", url: 'https://uber.com'},
			{name: "Frog", slug:"frog", img:"images/frog.png", content: "Enabling authoring and customizing original content.", url: 'http://frogdesign.com'},
			{name: "Remind", slug:"remind", img:"images/remind.png", content: "Accelerating teacher signup during back-to-school season.", url: 'http://remind.com'}
			];

var etc = [{name: "SixDegree", slug:"sixdegree"}];

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { 
  	title: 'Elaine Zhou',
  	projects: projects,
  	works: works
  });
});

/* GET project pages */
for (var i=0; i<projects.length; i++){
	var project = projects[i];
	var endpoint = '/' + project.slug;
	renderPage(project);
}

for (var i=0; i< etc.length; i++){
	var project = etc[i];
	var endpoint = '/' + project.slug;
	renderPage(project);
}

function renderPage(project){
	router.get(endpoint, function(req, res) {
		res.render(project.slug, {title: project.name + ', Elaine Zhou', project: project});
	});
}

/* One-off pages */
router.get('/productchallenge', function(req, res) {
  res.render('productchallenge', { 
  	title: 'KPCB Product Challenge: Crazy for Crockpot' 
  });
});

router.get('/googlechallenge', function(req, res) {
  res.render('googlechallenge', { 
  	title: 'Google Interview Challenge' 
  });
});

module.exports = router;
