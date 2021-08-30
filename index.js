window.onload = function greet(){
	var date = new Date()
	var hours = date.getHours()
	var min = String(date.getMinutes())
	if (min.length == 1) {
		min = "0" + min;
	}
	var displayTime = String(date.getHours()) + ":" + min
	var greeting = document.getElementById("greeting-1")
	var txt = "It's " + displayTime + " now"

	if (hours < 12 && hours > 6) {
		var result = "Good morning!"
	} else if (hours >= 12 && hours < 18) {
		var result = "Good afternoon!"
	} else if (hours >= 18 && hours < 22) {
		var result = "Good evening!"
	} else {
		var result = "Good night!"
	}

	var i = 0;
	setTimeout(typeWriter, 800);

	function typeWriter() {
	  	if (i < txt.length) {
		    document.getElementById("greeting-1").innerHTML += txt.charAt(i);
		    i++;
			setTimeout(typeWriter, 150);
	  }
	}

	var j = 0;
	setTimeout(typeWriterTwo, 3500);
	function typeWriterTwo() {
	  	if (j < result.length) {
		    document.getElementById("greeting-2").innerHTML += result.charAt(j);
		    j++;
			setTimeout(typeWriterTwo, 100);
	  }
	}

	setTimeout(displayButton, 7500);
	function displayButton() {
		document.getElementById("me-button").style.visibility = "visible"
	}
}