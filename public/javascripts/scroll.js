/* smooth scrolling to sections */
	$(function() {
	  $('a[href*=#]:not([href=#])').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
		  var target = $(this.hash);
		  target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
		  if (target.length) {
			$('html,body').animate({
			  scrollTop: target.offset().top - 50
			}, 1000);
			return false;
		  }
		}
	  });
	});


/* sticky menu */
function stickyMenu() {
	var back = $(".intro .back");
	if(back.length === 0){
		return;
	}

	var elementOffset = back.offset().top;
	window.addEventListener('scroll', function(){
		
		var scrollTop     = $(window).scrollTop(),
    		distance      = (elementOffset - scrollTop);
		
			if (scrollTop >= elementOffset && distance <= 0) {
		  		back.addClass("fix-top");
		  	} else {
				back.removeClass("fix-top");
			}

	});
}


$(document).ready(function(){
	stickyMenu();

})