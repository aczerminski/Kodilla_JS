// var name = prompt('Enter your name');
// alert('Hello, ' + name);
// console.log('Hello, ' + name);

var text = ('Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.');
var dinosaur = 'triceratops';
var nameUpperCased = dinosaur.toUpperCase();

var newArray = text.split(' ');
var wordToChange = newArray[0];

text = text.replace('Velociraptor', nameUpperCased);
var partOfText = text.slice(0, text.length / 2);
console.log(partOfText);
