// COMMENTS SLIDER

var commentsList = $('.comments__list');
var commentsCounterAmount = $('.comments__counter-amount');
var commentsCounterCurrent = $('.comments__counter-current');

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
