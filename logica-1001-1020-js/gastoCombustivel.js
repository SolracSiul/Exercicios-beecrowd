var input = require("fs").readFileSync("stdin", "utf-8");
var lines = input.split("\n");

var qtdHoras = lines.shift();
var vMedia = lines.shift();

var qtdKm = qtdHoras * vMedia;

var qtdGas =qtdKm/12

console.log(qtdGas.toFixed(3));