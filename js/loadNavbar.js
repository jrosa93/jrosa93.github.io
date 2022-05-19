document.addEventListener("DOMContentLoaded", function () {
	fetch('templates/navbar.html')
		.then(response => response.text())
		.then(text => document.getElementById('navbar').innerHTML = text);
});