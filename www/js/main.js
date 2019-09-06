var chosenCity = document.querySelector('.cities__chosen-city');
var citiesList = document.querySelector('.cities__list');

chosenCity.addEventListener('click', onChosenCityClick);
chosenCity.addEventListener('mousedown', function (evt) {
	evt.preventDefault();
});

citiesList.addEventListener('click', onCitiesListClick);

function onChosenCityClick() {

	showCitiesList();

}

function onCitiesListClick(evt) {

	setNewCity(evt.target.textContent);
	citiesList.classList.add('hidden');

}

function showCitiesList() {

	citiesList.classList.toggle('hidden');

}

function setNewCity(city) {

	chosenCity.textContent = city;

}
