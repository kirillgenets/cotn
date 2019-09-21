var showPassportButton = document.querySelector('.product-cart__show-passport');
var bigPicture = $('.big-picture');
var bigPictureImg = document.querySelector('.big-picture__img');
var bigPictureClose = document.querySelector('.big-picture__close');

showPassportButton.addEventListener('click', onShowPassportButtonClick);

bigPictureClose.addEventListener('click', onBigPictureCloseButtonClick);
document.addEventListener('keydown', onBigPictureCancelKeyDown);
bigPicture.click(onBigPictureClick);

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

	var calc = document.querySelector('.product-cart__calc');
	var calcTotal = document.querySelector('.product-cart__price-value--total');

	var literPrice = document.querySelector('.product-cart__title').dataset.price;
	var literPriceText = document.querySelector('.product-cart__price-value--per-liter');

	literPriceText.textContent = literPrice.replace('.',',');

	var amountType = document.getElementsByName('product-cart-amount');

	var amount = 1;

	amountType.forEach(function (item) {

		item.addEventListener('change', function (evt) {

			amount = item.value;

			if (getCheckedRadio('product-cart-amount') != undefined) {
				calcTotal.textContent = countTotal(literPrice, amount);
			}

		});

	});

	function countTotal(literPrice, amount) {

		return Math.round(+literPrice * +amount);

	}

}

function getCheckedRadio(name) {

	var radios = document.getElementsByName(name);

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
