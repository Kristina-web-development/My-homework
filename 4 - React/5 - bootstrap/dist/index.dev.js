"use strict";

var select = document.querySelector("select[name=select-options]");
var color = document.querySelector("input[name=colorChange]");
var root = document.querySelector(".root");
var body = document.querySelector("body");
console.log(select);

var showSelect = function showSelect() {
  root.innerHTML = select.value;
};

var setBackgroundColor = function setBackgroundColor() {
  body.style.backgroundColor = color.value;
};