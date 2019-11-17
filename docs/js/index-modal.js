var startCooperationButton = document.querySelector('.index-about__start');
var bigPicture = $('.big-picture');
var bigPictureImg = document.querySelector('.big-picture__img');
var bigPictureClose = document.querySelector('.big-picture__close');

bigPictureClose.addEventListener('click', onBigPictureCloseButtonClick);
document.addEventListener('keydown', onBigPictureCancelKeyDown);
bigPicture.click(onBigPictureClick);

startCooperationButton.addEventListener('click', function () {
  bigPicture.addClass('big-picture--quality');
	bigPicture.show('fast');
});

function onBigPictureClick(evt) {

	if (evt.target.classList.contains('overlay')) {
		bigPicture.hide('fast');
	}

}

function onBigPictureCloseButtonClick() {
	bigPicture.hide('fast');
}

function onBigPictureCancelKeyDown(evt) {

	if (evt.key === 'Escape') {
		bigPicture.hide('fast');
	}

}