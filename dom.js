var newDiv=document.createElement('div');
var newDivText= document.createTextNode('HEllo word');
newDiv.appendChild(newDivText);

var container= document.querySelector('header .container');
var h1=document.querySelector('header h1');

console.log(newDiv);

container.insertBefore(newDiv, h1);


var newDiv2=document.createElement('div');
var newDivText2= document.createTextNode('HEllo word');
newDiv2.appendChild(newDivText2);

var title= document.querySelector('ul .list-group');
var h2=document.querySelector('ul h2');

console.log(newDiv2);

container.insertBefore(newDiv2, h2);
