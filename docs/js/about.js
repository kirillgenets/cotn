var startButton = document.querySelector('.about-intro__start');
var formModal = $('.about-intro__modal');
var modalClose = document.querySelector('.about-intro__modal-close');
var passports = document.querySelectorAll('.quality__item-img');
var certificates = document.querySelectorAll('.certificates__item-img');
var bigPicture = $('.big-picture');
var bigPictureImg = document.querySelector('.big-picture__img');
var bigPictureClose = document.querySelector('.big-picture__close');

formModal.click(onModalClick);

startButton.addEventListener('click', onStartButtonClick);
modalClose.addEventListener('click', onModalCloseButtonClick);
document.addEventListener('keydown', onModalCancelKeyDown);

bigPicture.click(onBigPictureClick);

passports.forEach(function (item) {

	item.addEventListener('click', function(evt) {
		evt.preventDefault();
		bigPicture.addClass('big-picture--quality');
		bigPictureImg.setAttribute('src', item.getAttribute('href'));
		bigPicture.show('fast');
	});

});

certificates.forEach(function (item) {

	item.addEventListener('click', function(evt) {
		evt.preventDefault();
		bigPicture.addClass('big-picture--certificates');
		bigPictureImg.setAttribute('src', item.getAttribute('href'));
		bigPicture.show('fast');
	});

});

bigPictureClose.addEventListener('click', onBigPictureCloseButtonClick);
document.addEventListener('keydown', onBigPictureCancelKeyDown);

function onBigPictureClick(evt) {

	if (evt.target.classList.contains('overlay')) {
		bigPicture.hide('fast');
		bigPicture.removeClass('.big-picture--quality');
		bigPicture.removeClass('.big-picture--certificates');
	}

}

function onBigPictureCloseButtonClick() {
	bigPicture.hide('fast');
	bigPicture.removeClass('.big-picture--quality');
	bigPicture.removeClass('.big-picture--certificates');
}

function onBigPictureCancelKeyDown(evt) {

	if (evt.key === 'Escape') {
		bigPicture.hide('fast');
		bigPicture.removeClass('.big-picture--quality');
		bigPicture.removeClass('.big-picture--certificates');
	}

}

function onStartButtonClick() {
	formModal.show('fast');
}

function onModalCloseButtonClick() {
	formModal.hide('fast');
}

function onModalCancelKeyDown(evt) {

	if (evt.key === 'Escape') {
		formModal.hide('fast');
	}

}

function onModalClick(evt) {

	if (evt.target.classList.contains('overlay')) {
		formModal.hide('fast');
	}

}
