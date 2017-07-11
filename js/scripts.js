// var name = prompt('Enter your name');
// alert('Hello, ' + name);
// console.log('Hello, ' + name);
var buttonClass = document.getElementsByClassName('button');
console.log(buttonClass);

for (var index = 0 ; index < buttonClass.length ; index++) {
  var buttonText = buttonClass[index].innerHTML;
  console.log(buttonText);
}
