// Display Alert notice on load, clear on click
const main = document.querySelector('main');
const notice = document.querySelector('.notice');
const closebtn = document.querySelector('.closebtn');
let showAlert = true;

function displayalert() {
	if (showAlert === true) {
	    main.classList.add('show-alert');
	}
};

// Listen for click events
closebtn.addEventListener('click', function (event) {
	showAlert = false;
	notice.classList.add('hide');
	main.classList.remove('show-alert');
});

window.onload = displayalert();
