// var name = prompt('Enter your name');
// alert('Hello, ' + name);
// console.log('Hello, ' + name);

var text = ('Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.');
var dinosaur = 'triceratops';
var nameUpperCased = dinosaur.toUpperCase();
var changeWord = text.replace('Velociraptor', nameUpperCased);
console.log(changeWord.length / 2); // nie wiem jak zrobić, żeby konsola wyświetlała połowę tekstu, a nie połowę znakow
