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
