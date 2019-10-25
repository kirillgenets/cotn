// QUESTIONS

var MAX_DEFAULT_SHOWN_QUESTIONS_COUNT = 6;

var allIssues = document.querySelectorAll('.questions__issue');
var showMoreQuestionsButton = document.querySelector('.questions__show-more');

for (var i = MAX_DEFAULT_SHOWN_QUESTIONS_COUNT; i < allIssues.length; i++) {
	allIssues[i].classList.add('hidden');
}

showMoreQuestionsButton.addEventListener('click', onShowMoreQuestionsButtonClick);

function onShowMoreQuestionsButtonClick() {
	for (var i = MAX_DEFAULT_SHOWN_QUESTIONS_COUNT; i < allIssues.length; i++) {
		allIssues[i].classList.toggle('hidden');
		showMoreQuestionsButton.classList.toggle('questions__show-more--active');
		showMoreQuestionsButton.textContent = showMoreQuestionsButton.classList.contains('questions__show-more--active') ? 'Свернуть' : 'Показать еще';
	}
}

var questionTitles = $('.questions__issue-title');

questionTitles.each(function () {

	$(this).mousedown(function (evt) {
		evt.preventDefault();
	});

	$(this).click(function () {

		var answer = $(this).next('.questions__issue-answer');

		if (answer.css('display') === 'none') {
			$(this).addClass('questions__issue-title--opened');
			answer.slideDown('fast');
		} else {
			$(this).removeClass('questions__issue-title--opened');
			answer.hide('fast');
		}

	});

});
