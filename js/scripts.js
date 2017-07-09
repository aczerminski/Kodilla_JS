//var name = prompt('Enter your name');
//alert('Hello, ' + name);
//console.log('Hello, ' + name);
function drawTree(row) {
for (i=0; i<=row; i++){
var star = '';
for (j=0; j<=i; j++) {
star += '*';
}
console.log(star);
}
}
drawTree(5);
