(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
//bar.js
var bar = function () {
  console.log("bar");
  alert("Hello alert !!!!");
};

module.exports = bar;

},{}],2:[function(require,module,exports){
//foo.js

var bar = require("./bar");

var foo = function () {
  console.log("foo");
  bar();
};
module.exports = foo;

},{"./bar":1}],3:[function(require,module,exports){
"use strict";

var foo = require("./foo");

document.getElementById("my-button").addEventListener("click", foo);
console.log("hello");

},{"./foo":2}]},{},[3]);
