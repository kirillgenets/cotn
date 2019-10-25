var indexCatalogTabs = document.querySelector('.index-catalog__tabs-list');
var petroleumCatalog = document.querySelector('.index-catalog__type-catalog--petroleum');
var oilCatalog = document.querySelector('.index-catalog__type-catalog--oil');

indexCatalogTabs.addEventListener('click', function (evt) {

	indexCatalogTabs.querySelectorAll('.index-catalog__tab').forEach(function (item) {
		item.classList.remove('index-catalog__tab--selected');
	});

	evt.target.parentNode.classList.add('index-catalog__tab--selected');
	petroleumCatalog.classList.toggle('hidden');
	oilCatalog.classList.toggle('hidden');

});

var wrapperWidth = 1170;

window.addEventListener('resize', function () {

	if (document.documentElement.clientWidth <= 1200) {
		wrapperWidth = 768;
	} else {
		wrapperWidth = 1170;
	}

});

var indexCatalogList = $('.index-catalog__goods');
var indexCatalogCounterAmount = $('.index-catalog__counter-amount');
var indexCatalogCounterCurrent = $('.index-catalog__counter-current');

if (document.documentElement.clientWidth <= 800) {
	indexCatalogList.addClass('owl-carousel');
	indexCatalogList.addClass('owl-theme');
	indexCatalogList.owlCarousel({
		items: 1,
		nav: true,
		pagination: true,
		onInitialized: onIndexCatalogListInitialized,
		onTranslated: onIndexCatalogListTranslated,
	});
} else {
	indexCatalogList.removeClass('owl-carousel');
	indexCatalogList.removeClass('owl-theme');
	indexCatalogList.trigger('destroy.owl.carousel');
}

$('.index-catalog__prev').click(function () {
	indexCatalogList.trigger('prev.owl.carousel')
});

$('.index-catalog__next').click(function () {
	indexCatalogList.trigger('next.owl.carousel')
});

function onIndexCatalogListInitialized(evt) {

	indexCatalogCounterAmount.text(evt.item.count);

}

function onIndexCatalogListTranslated(evt) {

	indexCatalogCounterCurrent.text(evt.item.index + 1);

}
