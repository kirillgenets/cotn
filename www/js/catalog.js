var productTypeTitles = $('.sidebar__product-type-title');

productTypeTitles.each(function () {

	$(this).click(onProductTypeTitleClick);
	$(this).mousedown(function (evt) {
		evt.preventDefault();
	});

});

function onProductTypeTitleClick() {

	$(this).toggleClass('sidebar__product-type-title--opened');

	var sublist = $(this).parent().find('.sidebar__product-type-sublist');

	if (sublist.css('display') === 'none') {
		sublist.slideDown('fast');
	} else {
		sublist.hide('fast');
	}

}

