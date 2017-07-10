// var name = prompt('Enter your name');
// alert('Hello, ' + name);
// console.log('Hello, ' + name);
var buttonClass = document.getElementsByClassName('button');
console.log(buttonClass);

var buttons = ['Button1', 'Button2', 'Button3'];
console.log(buttons.length);

for (var buttons = 1 ; buttons <= 3 ; buttons++) {
  var buttonText = buttons.innerText;
  console.log(buttonText); // namotane, wiem :/ nie potrafię stworzyć instrukcji wywołującej tekst
}
