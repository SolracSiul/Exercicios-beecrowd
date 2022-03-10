var input = require("fs").readFileSync("stdin", "utf-8");
var lines = input.split("\n");

var item1 = lines.shift().split(" ");
var item2 = lines.shift().split(" ");

var idItem1 = item1.shift();
var qtdItem1 = item1.shift();
var precoItem1 = parseFloat(item1.shift());

var idItem2 = item2.shift();
var qtdItem2 = item2.shift();
var precoItem2 = parseFloat(item2.shift())

var total1 = (qtdItem1 * precoItem1);
var total2 = (qtdItem2 * precoItem2);

var total = parseFloat(total1 + total2);

console.log("VALOR A PAGAR: R$: " + total.toFixed(2));