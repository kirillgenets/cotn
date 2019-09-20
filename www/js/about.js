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

// CAROUSELS

var passportsList = $('.quality__list');
var passportsCounterAmount = $('.quality__counter-amount');
var passportsCounterCurrent = $('.quality__counter-current');

if (document.documentElement.clientWidth <= 800) {
	passportsList.addClass('owl-carousel');
	passportsList.addClass('owl-theme');
	passportsList.owlCarousel({
		items: 1,
		nav: true,
		pagination: true,
		onInitialized: onPassportsListInitialized,
		onTranslated: onPassportsListTranslated,
	});
} else {
	passportsList.removeClass('owl-carousel');
	passportsList.removeClass('owl-theme');
	passportsList.trigger('destroy.owl.carousel');
}

$('.quality__prev').click(function () {
	passportsList.trigger('prev.owl.carousel')
});

$('.quality__next').click(function () {
	passportsList.trigger('next.owl.carousel')
});

function onPassportsListInitialized(evt) {

	passportsCounterAmount.text(evt.item.count);

}

function onPassportsListTranslated(evt) {

	passportsCounterCurrent.text(evt.item.index + 1);

}

// CERTIFICATES CAROUSEL

var certificatesList = $('.certificates__list');
var certificatesCounterAmount = $('.certificates__counter-amount');
var certificatesCounterCurrent = $('.certificates__counter-current');

if (document.documentElement.clientWidth <= 800) {
	certificatesList.addClass('owl-carousel');
	certificatesList.addClass('owl-theme');
	certificatesList.owlCarousel({
		items: 1,
		nav: true,
		pagination: true,
		onInitialized: onCertificatesListInitialized,
		onTranslated: onCertificatesListTranslated,
	});
} else {
	certificatesList.removeClass('owl-carousel');
	certificatesList.removeClass('owl-theme');
	certificatesList.trigger('destroy.owl.carousel');
}

$('.certificates__prev').click(function () {
	certificatesList.trigger('prev.owl.carousel')
});

$('.certificates__next').click(function () {
	certificatesList.trigger('next.owl.carousel')
});

function onCertificatesListInitialized(evt) {

	certificatesCounterAmount.text(evt.item.count);

}

function onCertificatesListTranslated(evt) {

	certificatesCounterCurrent.text(evt.item.index + 1);

}
