
var list = document.getElementById('list');
var add = document.getElementById('addElem');
add.addEventListener('click', function() {
    var element = document.createElement('li');
    element.innerHTML = 'Item';
    list.appendChild(element);
});
// nie wiem skąd ma byc zaciagany numer biezacego elementu "li"
