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
var calcButton = document.querySelector('.calc__total-count');
var calcValue = document.querySelector('.calc__total-value');
var amount = document.querySelector('.calc__indicator--amount .calc__indicator-value');
var literPrice = document.querySelector('.calc__indicator--liter-price .calc__indicator-value');

calcButton.addEventListener('click', onCalcButtonClick);

shopToggler.addEventListener('click', function() {

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

function onCalcButtonClick() {

	var productType = getCheckedRadio('product-type');
	var deliveryType = getCheckedRadio('delivery-type');
	var amountType = getCheckedRadio('amount-type');
	var feeType = getCheckedRadio('fee-type');

	if (productType != undefined && deliveryType != undefined && amountType != undefined && feeType != undefined) {
		amount.textContent = amountType.value;
		literPrice.textContent = productType.value.replace('.',',');
		calcValue.textContent = (+productType.value + +deliveryType.value + +feeType.value) * +amountType.value;
	}

	function getCheckedRadio(name) {

		var radios = document.getElementsByName(name);

    for (var i = 0; i < radios.length; i++) {

      if (radios[i].type == "radio" && radios[i].checked) {
        return radios[i];
      }

    }

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
