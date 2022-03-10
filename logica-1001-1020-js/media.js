var input = require("fs").readFileSync("stdin", "utf-8");
var lines = input.split("\n");

var A = parseFloat(lines.shift());
var B = parseFloat(lines.shift());

var media = (A * 3.5 + B * 7.5) / 11.0;

console.log("MEDIA = " + media.toFixed(5));
