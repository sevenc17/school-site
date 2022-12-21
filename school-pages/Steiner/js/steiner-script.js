

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

function getRandomInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function infinite(){
	for (let j=2;j <= steiners.length; j++){
		if (steiners[j] !== undefined){
			steiners[j].innerHTML = `${getRandomInRange(1, 9)}`
		}
	}
}

const steiners = $('.steiner-number h2');

for (var i=0; i<50000; i++) {
	setTimeout(infinite, 200)
}
