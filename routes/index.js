var express = require('express');
var router = express.Router();

// var projects = [{name: "discoveroute", slug:"discoveroute", img:"images/discoveroute3.png", content: "discoveroute is a mobile web app for discovering path-based sites along routes."},
// 				{name: "Dais Glass", slug:"dais", img:"images/dais.png", content: "Dais is a Glass presentation aid and analytics tool."},
// 				{name: "SixDegree", slug:"sixdegree", img:"images/sixdegree.png", content: "SixDegree is a conceptual tool that weights your relationships."},
// 				{name: "SmartCart", slug:"smartcart", img:"images/smartcart3.png", content: "SmartCart is a smart shopping tablet app that helps users quickly locate items and purchase them at the cart."},
// 				{name: "Frog", slug:"frog", img:"images/frog.png", content: "Enabling employees to author and customize original content."},
// 				{name: "Uber", slug:"uber", img:"images/uber.png", content: "Streamlining conflict resolution between drivers and driver ops."},
// 				{name: "d.constraints", slug:"research", img: "images/dconstraints.png", content: "My thesis researched and experimented on external design constraints and internal design fixation."},
// 				{name: "Etcetera", slug:"etc", img:"images/etc.png", content: "An assortment of physical products, visual designs, and art."},
// 				{name: "Remind", slug:"remind", img:"images/remind.png", content: "Accelerating teacher growth during back-to-school season."}
// 				];

var projects = [{name: "discoveroute", slug:"discoveroute", img:"images/discoveroute3.png", content: "discoveroute is a mobile web app for discovering path-based sites along routes."},
				{name: "Dais Glass", slug:"dais", img:"images/dais.png", content: "Dais is a Glass presentation aid and analytics tool."},
				{name: "d.constraints", slug:"research", img: "images/dconstraints.png", content: "My thesis researched the role of constraints in design processes."},
				{name: "SmartCart", slug:"smartcart", img:"images/smartcart3.png", content: "SmartCart is a smart shopping tablet app that helps users quickly locate items and purchase them at the cart."},
				{name: "Etcetera", slug:"etc", img:"images/etc.png", content: "An assortment of physical products, visual designs, and art."},
				{name: "SixDegree", slug:"sixdegree", img:"images/sixdegree.png", content: "SixDegree is a conceptual tool that weights your relationships."},
				];

var works = [{name: "Uber", slug:"uber", img:"images/uber.png", content: "Facilitating conflict resolution between drivers and ops."},
			{name: "Frog", slug:"frog", img:"images/frog.png", content: "Enabling authoring and customizing original content."},
			{name: "Remind", slug:"remind", img:"images/remind.png", content: "Accelerating teacher growth during back-to-school season."}
			];

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { 
  	title: 'Elaine Zhou',
  	projects: projects,
  	works: works
  });
});


/* GET home page. */
router.get('/productchallenge', function(req, res) {
  res.render('productchallenge', { title: 'KPCB Product Challenge: Crazy for Crockpot' });
});

router.get('/googlechallenge', function(req, res) {
  res.render('googlechallenge', { 
  	title: 'Google Interview Challenge' 
  });
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
