$(document).on('ready', function(){

  $('#projects .tiles .tile').click(function(e) {
    e.preventDefault();
    var slug = this.id;

    var unfinished = ['uber', 'remind', 'frog', 'etc'];
    if(unfinished.indexOf(slug) > 0)
    	return;


    newpage(slug);
  });

  function newpage(slug) {
    location = slug;
  }

});