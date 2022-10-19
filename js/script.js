let mediaQuery1 = window.matchMedia('(max-width: 1350px)');
let mediaQuery2 = window.matchMedia('(max-width: 768px)');
let mediaQuery = 0;

function media() {
	
	if (mediaQuery2.matches) {
  		let mediaQuery = 2;
  		return mediaQuery;
	} else {
		let mediaQuery = 3;
		return mediaQuery;
	}
}

media()

$(document).ready(function(){
	$('.slider').slick({
		dots: true,
		slidesToShow: media(),
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

const listBurger = document.querySelector('.list-burger');
const listMenu = document.querySelector('.list-menu');
const documentBody = document.querySelector('body')


listBurger.addEventListener('click', function(event){

	if (listBurger.classList.contains('list-burger-active')) {
		listBurger.classList.remove('list-burger-active');
		listMenu.classList.remove('list-menu-active');
		documentBody.classList.remove('__list-burger-active')
	} else {
		listBurger.classList.add('list-burger-active');
		listMenu.classList.add('list-menu-active');
		documentBody.classList.add('__list-burger-active');
	}
});