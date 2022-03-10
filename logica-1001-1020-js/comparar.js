var input = require("fs").readFileSync("stdin", "utf-8");

var [A, B, C] = input.split(" ").map(item => parseFloat(item));


const maiorAb = (A+B+Math.abs(A-B))/2;
const maiorXc = (maiorAb+C+Math.abs(C-maiorAb))/2;

console.log(maiorXc +" eh o maior");
