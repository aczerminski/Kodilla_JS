/* var name = prompt('Enter your name');
alert('Hello, ' + name);
console.log('Hello, ' + name);
*/
var a = prompt ('Type a');
var b = prompt ('Type b');
var value = (a * a) + (2 * a * b) - (b * b);
alert (value);
console.log(value);

if (value > 0) {
alert('Wynik dodatni');
} else if (value < 0) {
alert('Wynik ujemny');
} else {
alert('Wynik to 0');
}
