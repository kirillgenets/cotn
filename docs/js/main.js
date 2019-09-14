var chosenCity = document.querySelector('.cities__chosen-city');
var citiesList = $('.cities__list');
var menuCatalogTitle = document.querySelector('.menu-catalog__title');
var menuCatalogList = document.querySelector('.menu-catalog__list');
var menuCatalogListWrapper = document.querySelector('.menu-catalog__list-wrapper');
var navToggler = document.querySelector('.nav__toggler');
var navList = document.querySelector('.nav__list');
var menuToggler = document.querySelector('.menu__list-toggler');
var menuList = document.querySelector('.menu__list');
var shopToggler = document.querySelector('.shopping-cart__button');
var shoppingCart = $('.shopping-cart__wrapper');

var indexCatalogTabs = document.querySelector('.index-catalog__tabs-list');

indexCatalogTabs.addEventListener('click', function (evt) {

	indexCatalogTabs.querySelectorAll('.index-catalog__tab').forEach(function (item) {
		item.classList.remove('index-catalog__tab--selected');
	});

	evt.target.parentNode.classList.add('index-catalog__tab--selected');

});

initCalc();

shopToggler.addEventListener('click', function () {

	if (shoppingCart.css('display') === 'none') {
		shoppingCart.slideDown(200);
	} else {
		shoppingCart.hide('fast')
	}

})

navToggler.addEventListener('click', function () {
	navList.classList.toggle('nav__list--shown');
	navToggler.classList.toggle('nav__toggler--close')
});

menuToggler.addEventListener('click', function () {
	menuList.classList.toggle('menu__list--shown');
});

var wrapperWidth = 1170;

window.addEventListener('resize', function () {

	if (document.documentElement.clientWidth <= 1200) {
		wrapperWidth = 768;
	} else {
		wrapperWidth = 1170;
	}

});

chosenCity.addEventListener('click', onChosenCityClick);
chosenCity.addEventListener('mousedown', function (evt) {
	evt.preventDefault();
});

citiesList.click(onCitiesListClick);

menuCatalogTitle.addEventListener('click', onMenuCatalogTitleClick);

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

function onChosenCityClick() {

	showCitiesList();

}

function onCitiesListClick(evt) {

	setNewCity(evt.target.textContent);
	citiesList.hide('fast');

}

function onMenuCatalogTitleClick(evt) {

	evt.preventDefault();
	showMenuCatalog();

}

function showMenuCatalog() {

	var submenu = document.querySelector('.menu-catalog__sublist-wrapper');
	var parentMenuItems = menuCatalogListWrapper.querySelectorAll('.menu-catalog__item--parent')

	menuCatalogListWrapper.classList.toggle('hidden');

	if (document.documentElement.clientWidth >= 800) {

		parentMenuItems.forEach(function (item) {
			initSubMenu(item)
		});

	}

	function showSubMenu(submenu) {

		if (document.documentElement.clientWidth > 1200) {
			submenu.classList.remove('hidden');
		} else {
			submenu.classList.toggle('hidden');
		}

		submenu.style.height = menuCatalogList.clientHeight - 30 + 'px';
		submenu.style.width = wrapperWidth - menuCatalogList.clientWidth + 'px';
		submenu.style.left = menuCatalogList.clientWidth + 'px';

	}

	function initSubMenu(item) {

		var submenu = item.querySelector('.menu-catalog__sublist-wrapper');

		item.addEventListener('mouseover', function () {
			showSubMenu(submenu);
		});

		item.addEventListener('mouseout', function () {
			hideSubMenu(submenu);
		});

		if (document.documentElement.clientWidth <= 1200) {
			item.addEventListener('click', function (evt) {
				evt.preventDefault();
				showSubMenu(submenu);
			});
		}

		function hideSubMenu() {

			submenu.classList.add('hidden');

		}

	}

}

function showCitiesList() {

	if (citiesList.css('display') === 'none') {
		citiesList.slideDown('fast');
	} else {
		citiesList.hide('fast')
	}

}

function setNewCity(city) {

	chosenCity.textContent = city;

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
		newsCounterAmount.text(evt.item.count - 1);
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
