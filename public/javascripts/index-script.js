$(document).on('ready', function(){

  // $('#work .tiles .tile').click(function(e) {
  //   e.preventDefault();
  //   var element = document.getElementById(this.id);
  // 	var url = element.dataset.url;
  // 	newPage(url);

  // });


  $('#projects .tiles .tile').click(function(e) {
    e.preventDefault();
    var slug = this.id;
    goToPage(slug);
  });

  function goToPage(slug) {
    location = '/' + slug;
  }

  function newPage(url) {
  	window.open(url, '_blank');
  }

});