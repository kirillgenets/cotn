var startButton = document.querySelector('.about-intro__start');
var formModal = $('.about-intro__modal');
var modalClose = document.querySelector('.about-intro__modal-close');

formModal.click(onModalClick);

startButton.addEventListener('click', onStartButtonClick);
modalClose.addEventListener('click', onModalCloseButtonClick);
document.addEventListener('keydown', onModalCancelKeyDown);

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
