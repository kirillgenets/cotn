initCalc();

function getCheckedRadio(name) {

	var radios = document.getElementsByName(name);

  for (var i = 0; i < radios.length; i++) {

    if (radios[i].type == "radio" && radios[i].checked) {
      return radios[i];
    }

  }

}

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
