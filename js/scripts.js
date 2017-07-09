// var name = prompt('Enter your name');
// alert('Hello, ' + name);
// console.log('Hello, ' + name);

var a = prompt('Type a');
var h = prompt('Type h');
function getTriangleArea(a, h) {
if (a <= 0 || h <= 0) {
return ('Nieprawidłowe dane'); // przy podaniu ujemnych danych w konsoli nie wyświetla się "Nieprawidłowe dane :/"
}
return (a * h / 2);
}
console.log(getTriangleArea(a, h));
