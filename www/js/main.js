var indexCatalogTabs = document.querySelector('.index-catalog__tabs-list');

indexCatalogTabs.addEventListener('click', function (evt) {

	indexCatalogTabs.querySelectorAll('.index-catalog__tab').forEach(function (item) {
		item.classList.remove('index-catalog__tab--selected');
	});

	evt.target.parentNode.classList.add('index-catalog__tab--selected');

});

initCalc();

var wrapperWidth = 1170;

window.addEventListener('resize', function () {

	if (document.documentElement.clientWidth <= 1200) {
		wrapperWidth = 768;
	} else {
		wrapperWidth = 1170;
	}

});

function initCalc() {

	var calc = document.querySelector('.calc');
	var calcTotal = calc.querySelector('.calc__total-value');
	var amount = document.querySelector('.calc__indicator--amount .calc__indicator-value');
	var literPrice = document.querySelector('.calc__indicator--liter-price .calc__indicator-value');
	var amountInfo = document.querySelector('.calc__indicator--amount .calc__indicator-value');

	var productType = document.getElementsByName('product-type');
	var deliveryType = document.getElementsByName('delivery-type');
	var amountType = document.getElementsByName('amount-type');

	var productPrice = 0;
	var deliveryPrice = 0;
	var amount = 1;

	productType.forEach(function (item) {

		item.addEventListener('change', function (evt) {

			productPrice = item.value;
			literPrice.textContent = item.value.replace('.',',');

			if (getCheckedRadio('product-type') != undefined && getCheckedRadio('delivery-type') != undefined && getCheckedRadio('amount-type') != undefined) {
				calcTotal.textContent = countTotal(productPrice, deliveryPrice, amount);
			}

		});

	});

	deliveryType.forEach(function (item) {

		item.addEventListener('change', function (evt) {

			deliveryPrice = item.value;

			if (getCheckedRadio('product-type') != undefined && getCheckedRadio('delivery-type') != undefined && getCheckedRadio('amount-type') != undefined) {
				calcTotal.textContent = countTotal(productPrice, deliveryPrice, amount);
			}

		});

	});

	amountType.forEach(function (item) {

		item.addEventListener('change', function (evt) {

			amount = item.value;
			amountInfo.textContent = item.value;

			if (getCheckedRadio('product-type') != undefined && getCheckedRadio('delivery-type') != undefined && getCheckedRadio('amount-type') != undefined) {
				calcTotal.textContent = countTotal(productPrice, deliveryPrice, amount);
			}

		});

	});

	function countTotal(productPrice, deliveryPrice, amount) {

		return Math.round((+productPrice + +deliveryPrice) * +amount);

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

// COMMENTS SLIDER

var commentsList = $('.comments__list');
var commentsCounterAmount = $('.comments__counter-amount');
var commentsCounterCurrent = $('.comments__counter-current');

// commentsCounterAmount.text(commentsList.children().length);

commentsList.owlCarousel({
	items: 2,
	nav: true,
	pagination: true,
	onInitialized: onCommentsSliderInitialized,
	onTranslated: onCommentsSliderTranslated,
	responsive: {
		0: {
			items: 1,
			slideBy: 1
		},
		520: {
			items: 2,
			margin: 30,
			slideBy: 2
		},
		800: {
			items: 1,
			slideBy: 1
		},
		1200: {
			items: 2,
			slideBy: 2
		}
	}
});

$('.comments__prev').click(function () {
	commentsList.trigger('prev.owl.carousel')
});

$('.comments__next').click(function () {
	commentsList.trigger('next.owl.carousel')
});

function onCommentsSliderInitialized(evt) {

	if (document.documentElement.clientWidth >= 800 && document.documentElement.clientWidth <=1200) {
		commentsCounterAmount.text(evt.item.count);
	} else if (document.documentElement.clientWidth <=520) {
		commentsCounterAmount.text(evt.item.count);
	}	else {
		commentsCounterAmount.text(evt.item.count - 1);
	}

}

function onCommentsSliderTranslated(evt) {

	commentsCounterCurrent.text(evt.item.index + 1);

}

// QUESTIONS

var questionTitles = $('.questions__issue-title');

questionTitles.each(function () {

	$(this).mousedown(function (evt) {
		evt.preventDefault();
	});

	$(this).click(function () {

		var answer = $(this).next('.questions__issue-answer');

		if (answer.css('display') === 'none') {
			$(this).addClass('questions__issue-title--opened');
			answer.slideDown('fast');
		} else {
			$(this).removeClass('questions__issue-title--opened');
			answer.hide('fast');
		}

	});

});

// NEWS CAROUSEL

var newsList = $('.news__list');
var newsCounterAmount = $('.news__counter-amount');
var newsCounterCurrent = $('.news__counter-current');

newsList.owlCarousel({
	items: 3,
	nav: true,
	pagination: true,
	onInitialized: onNewsSliderInitialized,
	onTranslated: onNewsSliderTranslated,
	responsive: {
		0: {
			items: 1,
			slideBy: 1,
			margin: 30,
		},
		800: {
			items: 2,
			slideBy: 2
		},
		1200: {
			items: 3,
			slideBy: 3
		}
	}
});

$('.news__prev').click(function () {
	newsList.trigger('prev.owl.carousel')
});

$('.news__next').click(function () {
	newsList.trigger('next.owl.carousel')
});

function onNewsSliderInitialized(evt) {

	if (document.documentElement.clientWidth >= 800 && document.documentElement.clientWidth <= 1200) {
		newsCounterAmount.text(evt.item.count);
	} else if (document.documentElement.clientWidth <=520) {
		newsCounterAmount.text(evt.item.count);
	}	else {
		newsCounterAmount.text(evt.item.count - 2);
	}

}

function onNewsSliderTranslated(evt) {

	newsCounterCurrent.text(evt.item.index + 1);

}

// CLIENTS CAROUSEL

var clientsList = $('.clients__list');
var clientsCounterAmount = $('.clients__counter-amount');
var clientsCounterCurrent = $('.clients__counter-current');

clientsList.owlCarousel({
	items: 6,
	nav: true,
	pagination: true,
	margin: 0,
	onInitialized: onClientsSliderInitialized,
	onTranslated: onClientsSliderTranslated,
	responsive: {
		0: {
			items: 1,
		},
		520: {
			items: 2,
			slideBy: 2,
		},
		800: {
			items: 3,
			slideBy: 3
		},
		1200: {
			items: 6,
			slideBy: 6
		}
	}
});

$('.clients__prev').click(function () {
	clientsList.trigger('prev.owl.carousel')
});

$('.clients__next').click(function () {
	clientsList.trigger('next.owl.carousel')
});

function onClientsSliderInitialized(evt) {

	if (document.documentElement.clientWidth >= 800 && document.documentElement.clientWidth <= 1200) {
		clientsCounterAmount.text(evt.item.count - 2);
	} else if (document.documentElement.clientWidth <= 800 && document.documentElement.clientWidth >= 520) {
		clientsCounterAmount.text(evt.item.count - 1);
	} else if (document.documentElement.clientWidth <= 520) {
		clientsCounterAmount.text(evt.item.count);
	}	else {
		clientsCounterAmount.text(evt.item.count - 5);
	}

}

function onClientsSliderTranslated(evt) {

	clientsCounterCurrent.text(evt.item.index + 1);

}
