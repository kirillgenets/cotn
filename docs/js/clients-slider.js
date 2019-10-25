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
