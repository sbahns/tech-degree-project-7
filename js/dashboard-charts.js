//Traffic Chart
const canvas = document.querySelector('canvas');
const traffic = document.querySelector('.traffic-filter');
const hourly = document.querySelector('.hourly');
const daily = document.querySelector('.daily');
const weekly = document.querySelector('.weekly');
const monthly = document.querySelector('.monthly');

// Traffic Overview
var chartData = {
	labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3", "4-10", "11-17", "18-24", "25-31"],
	datasets: [{
		backgroundColor: 'rgba(116, 120, 191, .5)',
		borderColor: 'rgba(116, 120, 191, 1)',
		data: [750, 1250, 1000, 1500, 2000, 1500, 1750, 1250, 1750, 2250, 1750, 2250],
	}]
};
var chartData1 = {
	labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3", "4-10", "11-17", "18-24", "25-31"],
	datasets: [{
		backgroundColor: 'rgba(116, 120, 191, .5)',
		borderColor: 'rgba(116, 120, 191, 1)',
		data: [450, 1050, 700, 1700, 1600, 2500, 2750, 2250, 2750, 2250, 1750, 2250],
	}]
};
var chartData2 = {
	labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3", "4-10", "11-17", "18-24", "25-31"],
	datasets: [{
		backgroundColor: 'rgba(116, 120, 191, .5)',
		borderColor: 'rgba(116, 120, 191, 1)',
		data: [250, 750, 600, 2700, 610, 200, 2150, 2250, 850, 450, 1050, 1250],
	}]
};
var chartData3 = {
	labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3", "4-10", "11-17", "18-24", "25-31"],
	datasets: [{
		backgroundColor: 'rgba(116, 120, 191, .5)',
		borderColor: 'rgba(116, 120, 191, 1)',
		data: [150, 250, 300, 500, 800, 100, 1850, 1900, 750, 250, 950, 300],
	}]
};
var chartData4 = {
	labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3", "4-10", "11-17", "18-24", "25-31"],
	datasets: [{
		backgroundColor: 'rgba(116, 120, 191, .5)',
		borderColor: 'rgba(116, 120, 191, 1)',
		data: [700, 250, 100, 500, 200, 1500, 1000, 1250, 1750, 2050, 1650, 2550],
	}]
};

var dataSource = chartData;
var context = document.querySelector('#trafficOverview').getContext('2d');
var chartParams = {
	type: 'line',
	data: dataSource,
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
};
var myLineChart = new Chart(context, chartParams);

hourly.addEventListener('click', (e) => {
	myLineChart.destroy();
	var context1 = document.querySelector('#trafficOverview').getContext('2d');
	dataSource = chartData1;
	myLineChart = new Chart(context1, chartParams);
	if (e.target) {
		hourly.classList.add('active');
	} else {
		hourly.classList.remove('active');
	}
});
daily.addEventListener('click', (e) => {
	myLineChart.destroy();
	var context2 = document.querySelector('#trafficOverview').getContext('2d');
	dataSource = chartData2;
	myLineChart = new Chart(context2, chartParams);
	if (e.target) {
		daily.classList.add('active');
	} else {
		daily.classList.remove('active');
	}
});
weekly.addEventListener('click', (e) => {
	myLineChart.destroy();
	var context3 = document.querySelector('#trafficOverview').getContext('2d');
	dataSource = chartData3;
    myLineChart = new Chart(context3, chartParams);
	if (e.target === 'weekly') {
		weekly.classList.add('active');
	} else {
		weekly.classList.remove('active');
	}
});
monthly.addEventListener('click', (e) => {
	myLineChart.destroy();
	var context4 = document.querySelector('#trafficOverview').getContext('2d');
	dataSource = chartData4;
	myLineChart = new Chart(context4, chartParams);
	if (e.target === 'monthly') {
		monthly.classList.add('active');
	} else {
		monthly.classList.remove('active');
	}
});

// var ctxm = document.getElementById('monthlyTrafficOverview').getContext('2d');
// var chart = new Chart(ctxm, {
// 	// The type of chart we want to create
// 	type: 'line',
//
// 	// The data for our dataset
// 	data: {
// 		labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3", "4-10", "11-17", "18-24", "25-31"],
// 		datasets: [{
// 			backgroundColor: 'rgba(116, 120, 191, .5)',
// 			borderColor: 'rgba(116, 120, 191, 1)',
// 			data: [450, 1050, 700, 1700, 1600, 2500, 2750, 2250, 2750, 2250, 1750, 2250],
// 		}]
// 	},
//
// 	// Configuration options go here
// 	options: {
// 		responsive: true,
// 		maintainAspectRatio: false,
// 		elements: {
// 	      line: {
// 	        tension: 0,
// 	      }
// 	  	},
// 	    scales: {
// 	         yAxes: [{
// 	             ticks: {
// 	                 beginAtZero:true
// 	             }
// 	         }]
// 	     },
// 	     legend: {
// 	            display: false
// 	         },
// 	         tooltips: {
// 	            enabled: false
// 	         },
// 		}
// });

//
// Daily traffic

var ctxdt = document.getElementById('dailyTraffic').getContext('2d');
var chart = new Chart(ctxdt, {
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

// Mobile traffic

var ctxmt = document.getElementById('mobileUsers').getContext('2d');
var chart = new Chart(ctxmt, {
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
