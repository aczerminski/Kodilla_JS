
var list = document.getElementById('list');
var addButton = document.getElementById('addElem');

addButton.addEventListener('click', function(){
  var element = document.createElement('li');
  var numberOfElements = document.getElementsByTagName('li').length;
  element.innerHTML = 'Item ' + numberOfElements;
  list.appendChild(element);
});
