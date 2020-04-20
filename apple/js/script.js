'use strict';

let menuIcon = document.querySelectorAll('.menu-item');

menuIcon[0].style.order = "0";
menuIcon[1].style.order = "2";
menuIcon[2].style.order = "1";
menuIcon[3].style.order = "3";

var newMenuItem = document.createElement("LI"); // Create a <li> node
var textnode = document.createTextNode("Пятый пункт"); // Create a text node
newMenuItem.appendChild(textnode); // Append the text to <li>
document.getElementsByClassName("menu")[0].appendChild(newMenuItem); // Append <li> to <ul>
newMenuItem.classList.add("menu-item"); // add class to a new menu item
newMenuItem.style.order = "4"; // place the new item to the end

document.body.style.backgroundImage = "url('./img/apple_true.jpg')"; // Change bg image

let str = 'Мы продаем только подлинную технику Apple'; // new text
let title = document.getElementById('title').innerHTML = str; //replace text

let advRemove = document.getElementsByClassName('adv'); // get div by class
    advRemove[0].style.display = "none"; // change display setting to none

let userOp = prompt("Какого ваше мнение насчет техники Apple?");

let promptWindow = document.getElementById('prompt').innerHTML = userOp;

