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

$(document).ready(function(){
	$('.home__content-slider').slick({
		dots: false,
		arrows: false,
		autoplay: true,
		speed: 1000,
		autoplaySpeed: 1500,
		pauseOnHover: true,
		pauseOnFocus: false,
		slidesToShow: 1,
		slidesToScroll: 1,
	});
});