// Display Alert notice on load, clear on click
const main = document.querySelector('main');
const notice = document.querySelector('.notice');
const closebtn = document.querySelector('.closebtn');
let showAlert = true;

function displayAlert() {
	if (showAlert === true) {
	    main.classList.add('show-alert');
	}

	// Listen for click events
	closebtn.addEventListener('click', (e) => {
		showAlert = false;
		notice.classList.add('hide');
		main.classList.remove('show-alert');
	})
};
window.onload = displayAlert();

//Notification dropdown
const un = document.querySelector('.user-notifications');
const nl = document.querySelector('.notification-list');
const bell = document.querySelector('.bell');
const dot = document.querySelector('.notification-dot');

const clear = document.querySelector('.clear-notifications');
const nlist = document.querySelector('.nlist');
const emptylist = document.querySelector('.emptylist');

function displayNotifications() {
		nl.classList.toggle('show-notification');
		bell.classList.toggle('fill-bell');
	};

function clearNotifications() {
	let dn = displayNotifications();
	nlist.classList.toggle('clearlist');
	emptylist.classList.toggle('clearlist');
	clear.style.display = 'none';
	dot.style.display = 'none';
	//dn.preventDefault();
};


un.addEventListener('click', (e) => {
	displayNotifications();
});


clear.addEventListener('click', (e) => {
	clearNotifications();
});


//Search

// var message = '';
// var user;
// var search;
//
// function print(message) {
//   var outputDiv = document.getElementById('output');
//   outputDiv.innerHTML = message;
// 	search.appendChild(outputDiv);
// }
//
// function getUserReport( user ) {
//   var report = '<div><h4>User: ' + user.name + '</h4>';
//   report += '<p>Email: ' + user.email + '</p>';
//   report += '<p>Image: ' + user.avatar + '</p></div>';
//   return report;
// }
//
// function searchUsers() {
// 	search = document.querySelector('#search');
// 	for (var i = 0; i < users.length; i += 1) {
// 	  user = users[i];
// 	  if ( user.name === search ) {
// 	    message = getUserReport( user );
// 	    print(message);
// 			console.log(message);
// 	  }
// 	}
// }

const mglass = document.querySelector('.fa-search');
// mglass.addEventListener('click', (e) => {
// 	searchUsers();
// });


//Message User
