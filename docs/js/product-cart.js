var showPassportButton = document.querySelector('.product-cart__show-passport');
var bigPicture = $('.big-picture');
var bigPictureImg = document.querySelector('.big-picture__img');
var bigPictureClose = document.querySelector('.big-picture__close');
var allProductNavs = document.querySelectorAll('.product-info__nav-item');
var productNavDescription = document.querySelector('.product-info__nav-item--description button');
var productNavCharacteristic = document.querySelector('.product-info__nav-item--characteristic button');
var productNavDelivery = document.querySelector('.product-info__nav-item--delivery button');
var productNavComments = document.querySelector('.product-info__nav-item--comments button');
var allProductContents = document.querySelectorAll('.product-info__content');
var productContentDescription = document.querySelector('.product-info__content--description');
var productContentCharacteristic = document.querySelector('.product-info__content--characteristic');
var productContentDelivery = document.querySelector('.product-info__content--delivery');
var productContentComments = document.querySelector('.product-info__content--comments');

productNavDescription.addEventListener('click', onProductNavDescriptionClick);
productNavCharacteristic.addEventListener('click', onProductNavCharacteristicClick);
productNavDelivery.addEventListener('click', onProductNavDeliveryClick);
productNavComments.addEventListener('click', onProductNavCommentsClick);

showPassportButton.addEventListener('click', onShowPassportButtonClick);

bigPictureClose.addEventListener('click', onBigPictureCloseButtonClick);
document.addEventListener('keydown', onBigPictureCancelKeyDown);
bigPicture.click(onBigPictureClick);

function onProductNavDescriptionClick() {
	allProductContents.forEach(content => {
		content.classList.add('hidden');
	});

	allProductNavs.forEach(item => {
		item.classList.remove('product-info__nav-item--active');
	});
	
	productNavDescription.parentNode.classList.add('product-info__nav-item--active');
	productContentDescription.classList.remove('hidden');
}

function onProductNavCharacteristicClick() {
	allProductContents.forEach(content => {
		content.classList.add('hidden');
	});

	allProductNavs.forEach(item => {
		item.classList.remove('product-info__nav-item--active');
	});
	
	productNavCharacteristic.parentNode.classList.add('product-info__nav-item--active');
	productContentCharacteristic.classList.remove('hidden');
}

function onProductNavDeliveryClick() {
	allProductContents.forEach(content => {
		content.classList.add('hidden');
	});

	allProductNavs.forEach(item => {
		item.classList.remove('product-info__nav-item--active');
	});
	
	productNavDelivery.parentNode.classList.add('product-info__nav-item--active');
	productContentDelivery.classList.remove('hidden');
}

function onProductNavCommentsClick() {
	allProductContents.forEach(content => {
		content.classList.add('hidden');
	});

	allProductNavs.forEach(item => {
		item.classList.remove('product-info__nav-item--active');
	});
	
	productNavComments.parentNode.classList.add('product-info__nav-item--active');
	productContentComments.classList.remove('hidden');
}

function onShowPassportButtonClick() {

	bigPicture.addClass('big-picture--quality');
	bigPictureImg.setAttribute('src', showPassportButton.getAttribute('value'));
	bigPicture.show('fast');

}

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

initProductCartCalc()

function initProductCartCalc() {

	var calcTotal = document.querySelector('.product-cart__price-value--total');

	var literPrice = document.querySelector('.product-cart__title').dataset.price;
	var literPriceText = document.querySelector('.product-cart__price-value--per-liter');

	literPriceText.textContent = literPrice.replace('.',',');

	var amountType = document.querySelectorAll('.product-cart__calc-radio');

	var amount = 1;

	amountType.forEach(function (item) {

		item.addEventListener('change', function (evt) {

			amount = item.value;

			if (getCheckedRadio('.product-cart__calc-radio') != undefined) {
				calcTotal.textContent = countTotal(literPrice, amount);
			}

		});

	});

	function countTotal(literPrice, amount) {

		return Math.round(+literPrice * +amount);

	}

}

function getCheckedRadio(selector) {

	var radios = document.querySelectorAll(selector);

  for (var i = 0; i < radios.length; i++) {

    if (radios[i].type == "radio" && radios[i].checked) {
      return radios[i];
    }

  }

}

// ANOTHER PRODUCTS CAROUSEL

var anotherProductsList = $('.another-products__list');
var anotherProductsCounterAmount = $('.another-products__counter-amount');
var anotherProductsCounterCurrent = $('.another-products__counter-current');

anotherProductsList.owlCarousel({
	items: 4,
	nav: true,
	pagination: true,
	margin: 0,
	onInitialized: onAnotherProductsSliderInitialized,
	onTranslated: onAnotherProductsSliderTranslated,
	responsive: {
		0: {
			items: 1,
		},
		800: {
			items: 2,
			slideBy: 2
		},
		1200: {
			items: 4,
			slideBy: 4
		}
	}
});

$('.another-products__prev').click(function () {
	anotherProductsList.trigger('prev.owl.carousel')
});

$('.another-products__next').click(function () {
	anotherProductsList.trigger('next.owl.carousel')
});

function onAnotherProductsSliderInitialized(evt) {

	if (document.documentElement.clientWidth >= 800 && document.documentElement.clientWidth <= 1200) {
		anotherProductsCounterAmount.text(evt.item.count - 1);
	} else if (document.documentElement.clientWidth <= 800) {
		anotherProductsCounterAmount.text(evt.item.count);
	}	else {
		anotherProductsCounterAmount.text(evt.item.count - 3);
	}

}

function onAnotherProductsSliderTranslated(evt) {

	anotherProductsCounterCurrent.text(evt.item.index + 1);

}
