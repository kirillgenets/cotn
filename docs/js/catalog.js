var productTypeTitles = $('.sidebar__product-type-title');
var priceTitle = $('.sidebar__price-title');
var brandsTitle = $('.sidebar__brands-title');
var brandsTitleContent = $('.sidebar__brands-list');
var sortChosen = $('.sort__chosen');
var sortList = $('.sort__sublist');

var shownAmountItems = document.querySelectorAll('.goods__shown-amount-item button');
var viewButtons = document.querySelectorAll('.goods__view-button button');

productTypeTitles.each(function () {

	$(this).click(onProductTypeTitleClick);
	$(this).mousedown(function (evt) {
		evt.preventDefault();
	});

});

priceTitle.click(onPriceTitleClick);
priceTitle.mousedown(function(evt) {
	evt.preventDefault();
});

brandsTitle.click(onBrandsTitleClick);
brandsTitle.mousedown(function(evt) {
	evt.preventDefault();
});

sortChosen.click(onSortChosenClick);
sortChosen.mousedown(function(evt) {
	evt.preventDefault();
});

sortList.click(onSortListClick);

shownAmountItems.forEach(function (item) {

	item.addEventListener('click', function (evt) {
		document.querySelector('.goods__shown-amount-item--chosen').classList.remove('goods__shown-amount-item--chosen');
		evt.target.parentNode.classList.add('goods__shown-amount-item--chosen');
	});

});

viewButtons.forEach(function (item) {

	item.addEventListener('click', function (evt) {
		document.querySelector('.goods__view-button--chosen').classList.remove('goods__view-button--chosen');
		evt.target.parentNode.classList.add('goods__view-button--chosen');
	});

});

function onSortListClick(evt) {

	sortChosen.text(evt.target.textContent);
	sortList.hide('fast');

}

function onSortChosenClick() {

	$(this).toggleClass('sort__chosen--opened');

	if (sortList.css('display') === 'none') {
		sortList.slideDown('fast');
	} else {
		sortList.hide('fast');
	}

}

function onBrandsTitleClick() {

	$(this).toggleClass('sidebar__brands-title--opened');

	if (brandsTitleContent.css('display') === 'none') {
		brandsTitleContent.slideDown('fast');
	} else {
		brandsTitleContent.hide('fast');
	}

}

function onPriceTitleClick() {

	$(this).toggleClass('sidebar__price-title--opened');

	var priceTitleContent = $(this).parent().find('.sidebar__price-content');

	if (priceTitleContent.css('display') === 'none') {
		priceTitleContent.slideDown('fast');
	} else {
		priceTitleContent.hide('fast');
	}

}

function onProductTypeTitleClick() {

	$(this).toggleClass('sidebar__product-type-title--opened');

	var sublist = $(this).parent().find('.sidebar__product-type-sublist');

	if (sublist.css('display') === 'none') {
		sublist.slideDown('fast');
	} else {
		sublist.hide('fast');
	}

}

// GOODS CAROUSEL

var goodsList = $('.goods__list');
var goodsCounterAmount = $('.goods__counter-amount');
var goodsCounterCurrent = $('.goods__counter-current');

if (document.documentElement.clientWidth <= 800) {
	goodsList.addClass('owl-carousel');
	goodsList.addClass('owl-theme');
	goodsList.owlCarousel({
		items: 1,
		nav: true,
		pagination: true,
		onInitialized: onGoodsListInitialized,
		onTranslated: onGoodsListTranslated,
	});
} else {
	goodsList.removeClass('owl-carousel');
	goodsList.removeClass('owl-theme');
	goodsList.trigger('destroy.owl.carousel');
}

$('.goods__prev').click(function () {
	goodsList.trigger('prev.owl.carousel')
});

$('.goods__next').click(function () {
	goodsList.trigger('next.owl.carousel')
});

function onGoodsListInitialized(evt) {

	goodsCounterAmount.text(evt.item.count);

}

function onGoodsListTranslated(evt) {

	goodsCounterCurrent.text(evt.item.index + 1);

}

