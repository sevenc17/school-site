


//Проверка темной темы

// function isDarkModeEnabled() {
//     return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
// }

// const whiteStyle = document.getElementById('white-style')

// if (isDarkModeEnabled()){
// 	whiteStyle.href = "source/css/dark-style.css"
// }


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

//меню бургер

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

const scrollToMenu = document.querySelector('.scroll-to-menu');
const anchor = document.querySelector('#top');
const about = document.querySelector('#about');

window.addEventListener('scroll', function(event) {
	if (window.scrollY > 120) {
		scrollToMenu.classList.add('scroll-to-menu-active')
	} else {
		scrollToMenu.classList.remove('scroll-to-menu-active')
	}
})

const scrolls = document.querySelectorAll('a[href*="#"]')

for (let scroll of scrolls){
	scroll.addEventListener('click', function(event){
		event.preventDefault()
		const blockID = scroll.getAttribute('href')
		document.querySelector("" + blockID).scrollIntoView({
			behavior: 'smooth',
			block: 'start'
		})
	})
}

document.addEventListener('click', function(event){
	if (event.target.classList.contains('scroll-to-menu-active')) {
		anchor.scrollIntoView({
			behavior: "smooth",
			block: "start"
		})
	}
})




const tabList = [] = document.querySelectorAll('.tab');
const blocksList = [] = document.querySelectorAll('.block');
const officesList = [] = document.querySelectorAll('.offices');
const importantsList = [] = document.querySelectorAll('.important');
const library = document.querySelector('.library');
const museum = document.querySelector('.museum');
let lastTabActive = document.querySelector('.tab__active')

for (i = 0; i < tabList.length; i++){
	tabList[i].addEventListener('click', function(event){
		for(j = 0; j < tabList.length; j++){
			if (tabList[j].closest('.tab').classList.contains('tab__active')){
				lastTabActive = tabList[j]
			}
		}
		if(event.target.closest('.tab')){
			lastTabActive.classList.remove('tab__active')
			event.target.closest('.tab').classList.add('tab__active')
			if (event.target.closest('.tab').getAttribute('id') == 'offices-tab'){
				for (l = 0; l < blocksList.length; l++){
					blocksList[l].classList.remove('active-block')
				}
				for (l = 0; l < officesList.length; l++){
					officesList[l].classList.add('active-block')
				}
			}
			else if (event.target.closest('.tab').getAttribute('id') == 'important-tab'){
				for (l = 0; l < blocksList.length; l++){
					blocksList[l].classList.remove('active-block')
				}
				for (l = 0; l < importantsList.length; l++){
					importantsList[l].classList.add('active-block')
				}
			}
			else if (event.target.closest('.tab').getAttribute('id') == 'library-tab'){
				for (l = 0; l < blocksList.length; l++){
					blocksList[l].classList.remove('active-block')
				}
				library.classList.add('active-block')
			}
			else if (event.target.closest('.tab').getAttribute('id') == 'museum-tab'){
				for (l = 0; l < blocksList.length; l++){
					blocksList[l].classList.remove('active-block')
				}
				museum.classList.add('active-block')
			}
			else {
				event.target.closest('.tab').classList.remove('tab__active');				
			}
		}
	})
}

const blockClosePopupList = [] = document.querySelectorAll('.close__popup')


for (var i = 0 ; i < blocksList.length; i++){

	blocksList[i].addEventListener('click', function(event){
		for (var j = 0 ; j < blocksList.length; j++){
			if (blocksList[j].closest('.block').classList.contains('active__popup')){
				blocksList[j].classList.remove('active__popup')
				documentBody.classList.remove('__content__popup__active')
			}
		}
		event.target.closest('.block').classList.add('active__popup')
		documentBody.classList.add('__content__popup__active')
	})

	blockClosePopupList[i].addEventListener('click', function(event){
		event.stopPropagation()
		for (var j = 0 ; j < blocksList.length; j++){
			if(event.target.closest('.close__popup')){
				blocksList[j].classList.remove('active__popup')
				documentBody.classList.remove('__content__popup__active')			
			}
		}	
	})

}

$(document).ready(function(){
	$('.spoiler-open').click(function(event){
		$(this).toggleClass('active').next().slideToggle(500);
		$(this).closest('.spoiler').toggleClass('go')
	})
})

function initMap(){
	var options = {
		center: {lat: 55.80994311391446, lng: 49.187767411869814},
		zoom: 18
	}
	const map = new google.maps.Map(document.getElementById("map"), options);
}

// alert(new Date().getMinutes())

// document.addEventListener('DOMContentLoaded', function(){
// 	const form = document.getElementById('form');
// 	form.addEventListener('submit', formSend);

// 	async function formSend(e){
// 		e.preventDefault();

// 		let error = formValidate(form);
// 	}

// 	function formValidate(form){
// 		let error = 0;
// 		let formReg = document.querySelectorAll('._reg')

// 		for(let index = 0;formReg.length; index++){
// 			const input = formReg[index];
// 			formRemoveError(input);

// 			if (input.classList.contains('_email'))
// 		}

// 		function formAddError(input) {
// 			input.parentElement.classList.add('_error')
// 			input.classList.add('_error');
// 		}

// 		function formRemoveError(input) {
// 			input.parentElement.classList.remove('_error')
// 			input.classList.remove('_error');
// 		}

// 		// function emailTest(input) {
// 		// 	return !/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(input.value)
// 		// }
// 	}
// });