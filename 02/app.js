// const button = document.getElementById('myButton');

// button.addEventListener('click', function() {
// 	const message = document.createElement('h2');
// 	message.textContent = 'Button wurde geklickt!';
// 	message.style.color = 'red';
// 	document.getElementById('myHeading').appendChild(message);
// });

const plusButton = document.getElementById('plusButton');
const counter = document.getElementById('counter');

plusButton.addEventListener('click', function() {
  const currentValue = parseInt(counter.value);
  counter.value = currentValue + 1;
});