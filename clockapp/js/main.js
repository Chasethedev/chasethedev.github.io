


// function startTime () {
// 	var hours   = currentTime.getHours();
// 	var minutes = currentTime.getMinutes();
// 	var seconds = currentTime.getSeconds();
// 	var timeDiv = document.getElementById('totalTime');

// 	if (hours > 12) {
// 		hours = hours - 12;
// }

// timeDiv.textContent = hours + ':' + minutes + ':' + seconds;

// 	setTimeout(startTime, 1000);
// }

// document.getElementById('totalTime').addEventListener('onload', startTime(), false );


function startTime () {
	var currentTime = new Date();
	var hours   = currentTime.getHours();
	var minutes = currentTime.getMinutes();
	var seconds = currentTime.getSeconds();
	var timeDiv = document.getElementById('totalTime');

	if (hours > 12) {
		hours = hours - 12;
	}
	if(minutes < 10) {
	minutes = "0" + minutes;
	}

	timeDiv.textContent = hours + ':' + minutes + ':' + seconds;

	setTimeout(startTime, 1000);
}

document.getElementById('totalTime').addEventListener('onload', startTime(), false );




