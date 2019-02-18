
// Traffic Overview
var ctx = document.getElementById('trafficOverview').getContext('2d');
var chart = new Chart(ctx, {
	// The type of chart we want to create
	type: 'line',

	// The data for our dataset
	data: {
		labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3", "4-10", "11-17", "18-24", "25-31"],
		datasets: [{
			backgroundColor: 'rgba(116, 120, 191, .5)',
			borderColor: 'rgba(116, 120, 191, 1)',
			data: [750, 1250, 1000, 1500, 2000, 1500, 1750, 1250, 1750, 2250, 1750, 2250],
		}]
	},

	// Configuration options go here
	options: {
		responsive: true,
		maintainAspectRatio: false,
		elements: {
	      line: {
	        tension: 0,
	      }
	  	},
	    scales: {
	         yAxes: [{
	             ticks: {
	                 beginAtZero:true
	             }
	         }]
	     },
	     legend: {
	            display: false
	         },
	         tooltips: {
	            enabled: false
	         },
		}
});

// Daily traffic

var ctx = document.getElementById('dailyTraffic').getContext('2d');
var chart = new Chart(ctx, {
	// The type of chart we want to create
	type: 'bar',

	// The data for our dataset
	data: {
		labels: ["S", "M", "T", "W", "T", "F", "S"],
		datasets: [{
			backgroundColor: 'rgba(116, 120, 191, .5)',
			borderColor: 'rgba(116, 120, 191, 1)',
			data: [75, 100, 175, 125, 225, 200, 100],
		}]
	},

	// Configuration options go here
	options: {
		responsive: true,
		maintainAspectRatio: false,
		elements: {

	  	},
	    scales: {
	         yAxes: [{
	             ticks: {
	                 beginAtZero:true
	             }
	         }]
	     },
	     legend: {
	            display: false
	         },
	         tooltips: {
	            enabled: false
	         },
		}
});

// Daily traffic

var ctx = document.getElementById('mobileUsers').getContext('2d');
var chart = new Chart(ctx, {
	// The type of chart we want to create
	type: 'doughnut',

	// The data for our dataset
	data: {
		labels: ["Phones", "Tablets", "Desktops"],
		datasets: [{
			backgroundColor:['#74b1bf', '#81c98f', 'rgba(116, 120, 191, 1)'],
			borderColor:['#74b1bf', '#81c98f', 'rgba(116, 120, 191, 1)'],
			data: [12, 13, 75],
		}]
	},

	// Configuration options go here
	options: {
		responsive: true,
		maintainAspectRatio: false,
		legend: {
		   display: true,
		   position: 'right'
	   }
	}
});
