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

const greenArrowRightActive = document.querySelector('.slick-arrow.slick-next');
const greenArrowLeftActive = document.querySelector('.slick-prev');

console.log(greenArrowLeftActive)

document.addEventListener('mousedown', function(event){
	if (event.target.classList.contains('slick-prev')) {
		event.target.classList.add('green-arrow-left-active')
	} else if (event.target.classList.contains('slick-next')) {
		event.target.classList.add('green-arrow-right-active')
	}
});

document.addEventListener('click', function(event){
	if (event.target.classList.contains('slick-prev')) {
		event.target.classList.remove('green-arrow-left-active')
	} else if (event.target.classList.contains('slick-next')) {
		event.target.classList.remove('green-arrow-right-active')
	}
});

document.addEventListener('touchstart', function(event){
	if (event.target.classList.contains('slick-prev')) {
		event.target.classList.add('green-arrow-left-active')
	} else if (event.target.classList.contains('slick-next')) {
		event.target.classList.add('green-arrow-right-active')
	}
});

document.addEventListener('touched', function(event){
	if (event.target.classList.contains('slick-prev')) {
		event.target.classList.remove('green-arrow-left-active')
	} else if (event.target.classList.contains('slick-next')) {
		event.target.classList.remove('green-arrow-right-active')
	}
});