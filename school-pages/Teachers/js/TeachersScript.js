
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


window.addEventListener('scroll', function(event) {
	if (window.scrollY > 120) {
		scrollToMenu.classList.add('scroll-to-menu-active')
	} else {
		scrollToMenu.classList.remove('scroll-to-menu-active')
	}
})

document.addEventListener('click', function(event){
	if (event.target.classList.contains('scroll-to-menu-active')) {
		anchor.scrollIntoView({
			behavior: "smooth",
			block: "start"
		})
	} 
})


const contentWindowList = [] = document.querySelectorAll('.content')
const contentClosePopupList = [] = document.querySelectorAll('.close__popup')


for (var i = 0 ; i < contentWindowList.length; i++){

	contentWindowList[i].addEventListener('click', function(event){
		console.log(1)
		for (var j = 0 ; j < contentWindowList.length; j++){
			if (contentWindowList[j].closest('.content').classList.contains('active__popup')){
				contentWindowList[j].classList.remove('active__popup')
				documentBody.classList.remove('__content__popup__active')
			}
		}
		event.target.closest('.content').classList.add('active__popup')
		documentBody.classList.add('__content__popup__active')
	})

	contentClosePopupList[i].addEventListener('click', function(event){
		event.stopPropagation()
		console.log(2)
		for (var j = 0 ; j < contentWindowList.length; j++){
			if(event.target.closest('.close__popup')){
				contentWindowList[j].classList.remove('active__popup')
				documentBody.classList.remove('__content__popup__active')			
			}
		}	
	})

}

$(function(){
	$('.teachers-list').slick({
		slidesToShow: 1,
		infinite: false,
	})
})


$(function(){
	$('.tab').click(function(event){
		event.preventDefault();
		$(this).addClass('tab-active')
		$('.tab').not($(this)).removeClass('tab-active')
		$('.teachers-list').removeClass('active-slider')
		$(event.target.getAttribute('href') + '').addClass('active-slider')
		$(event.target.getAttribute('href') + '').get(0).slick.setPosition()
		$(event.target.getAttribute('href') + '').slick('setPosition')
		//ЕСЛИ ДЕЛАЕШЬ ТАБЫ СО СЛАЙДЕРОМ ВНТУРИ 
		//$(event.target.getAttribute('href') + '').get(0).slick.setPosition()
		//$(event.target.getAttribute('href') + '').slick('setPosition')
		//ЭТИ ДВЕ ФУНКЦИИ ОБЯЗАТЕЛЬНО ПОСЛЕ ДОБАВЛЕНИЯ КЛАССАА!!!!!!!!!
	})
})

$(function(){
	$('.slick-slide .teacher-spoiler').click(function(){
		$(this).next().slideToggle(500)
		$(this).hide(500)
	})
})