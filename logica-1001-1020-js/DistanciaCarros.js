var input = require("fs").readFileSync("stdin", "utf-8");
var lines = input.split("\n");

var a = parseInt(lines.shift());

var distancia = (a * 2)

console.log(distancia + " minutos")