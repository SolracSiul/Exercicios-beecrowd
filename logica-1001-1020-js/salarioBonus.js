var input = require("fs").readFileSync("stdin", "utf-8");
var lines = input.split("\n");

var nome = lines.shift();
var B = parseFloat(lines.shift());
var C = parseFloat(lines.shift());

var salario = parseFloat(B + (15/100 * C));
console.log("TOTAL = R$ " + salario.toFixed(2));
