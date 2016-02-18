$(document).on('ready', function(){
  $('#projects .tiles .tile').click(function(e) {
    e.preventDefault(); 
    var slug = this.id;
    $('body').fadeOut(2000, newpage(slug));
  });

  function newpage(slug) {
    window.location = slug;
  }

});