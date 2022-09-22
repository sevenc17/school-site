let mediaQuery = window.matchMedia('(max-width: 1350px)')

function media() {
	if (mediaQuery.matches) {
  		mediaQuery = 3;
	};
	return mediaQuery;
}

media();

$(document).ready(function(){
	$('.slider').slick({
		dots: true,
		slidesToShow: 3,
		slidesToScroll: 1,
	});
});
