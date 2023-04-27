const button = document.getElementById('myButton');

button.addEventListener('click', function() {
	const message = document.createElement('h2');
	message.textContent = 'Button wurde geklickt!';
	message.style.color = 'red';
	document.getElementById('myHeading').appendChild(message);
});
