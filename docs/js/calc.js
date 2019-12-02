initCalc();

function getCheckedRadio(selector) {

	var radios = document.querySelectorAll(selector);

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

	var productType = document.querySelectorAll('.calc__radio--product-type');
	var deliveryType = document.querySelectorAll('.calc__radio--delivery-type');
	var amountType = document.querySelectorAll('.calc__radio--amount-type');

	var productPrice = 0;
	var deliveryPrice = 0;
	var amount = 1;

	productType.forEach(function (item) {

		item.addEventListener('change', function (evt) {

			productPrice = item.value;
			literPrice.textContent = item.value.replace('.',',');

			if (getCheckedRadio('.calc__radio--product-type') != undefined && getCheckedRadio('.calc__radio--delivery-type') != undefined && getCheckedRadio('.calc__radio--amount-type') != undefined) {
				calcTotal.textContent = countTotal(productPrice, deliveryPrice, amount);
			}

		});

	});

	deliveryType.forEach(function (item) {

		item.addEventListener('change', function (evt) {

			deliveryPrice = item.value;

			if (getCheckedRadio('.calc__radio--product-type') != undefined && getCheckedRadio('.calc__radio--delivery-type') != undefined && getCheckedRadio('.calc__radio--amount-type') != undefined) {
				calcTotal.textContent = countTotal(productPrice, deliveryPrice, amount);
			}

		});

	});

	amountType.forEach(function (item) {

		item.addEventListener('change', function (evt) {

			amount = item.value;
			amountInfo.textContent = item.value;

			if (getCheckedRadio('.calc__radio--product-type') != undefined && getCheckedRadio('.calc__radio--delivery-type') != undefined && getCheckedRadio('.calc__radio--amount-type') != undefined) {
				calcTotal.textContent = countTotal(productPrice, deliveryPrice, amount);
			}

		});

	});

	function countTotal(productPrice, deliveryPrice, amount) {

		return Math.round((+productPrice + +deliveryPrice) * +amount);

	}

}
