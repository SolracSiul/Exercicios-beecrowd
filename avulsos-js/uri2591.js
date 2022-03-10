var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\r').join("").split("\n");

let qtdNumeros = parseInt(lines.shift());
for (let i= 0; i < qtdNumeros; i++){
    let line = lines.shift().split("mek");
    let a = line[0].length-1;
    let b = line[1].length-2;
    let qtd = a * b;
    console.log(`k${"a".repeat(a * b)}`);
}
