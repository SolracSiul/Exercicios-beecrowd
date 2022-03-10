var input = require("fs").readFileSync("stdin", "utf-8");

var [A, B, C] = input.split(" ").map(item => parseFloat(item));
var PI = 3.14159;

var areaTriangulo = (A * C) / 2;
var areaCirculo = PI * Math.pow(C, 2);
var areaTrapezio = ((A+B)*C)/2;
var areaQuadrado = Math.pow(B, 2);
var areaRetangulo = A*B;

console.log("TRIANGULO: " + areaTriangulo.toFixed(3));
console.log("CIRCULO: " + areaCirculo.toFixed(3));
console.log("TRAPEZIO: " + areaTrapezio.toFixed(3));
console.log("QUADRADO: " + areaQuadrado.toFixed(3));
console.log("RETANGULO: " + areaRetangulo.toFixed(3));
