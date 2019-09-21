initProductCartCalc()

function initProductCartCalc() {

	var calc = document.querySelector('.product-cart__calc');
	var calcTotal = document.querySelector('.product-cart__price-value--total');

	var literPrice = document.querySelector('.product-cart__title').dataset.price;
	var literPriceText = document.querySelector('.product-cart__price-value--per-liter');

	literPriceText.textContent = literPrice;

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
