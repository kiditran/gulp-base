//foo.js
var bar = require("./bar");

var foo = function () {
  console.log("foo");
  bar();
};

module.exports = foo;
