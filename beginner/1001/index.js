var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */

const numericLines = lines.filter((line) => !isNaN(parseInt(line)));

function sum(A, B) {
  return A + B;
}

const A = parseInt(numericLines[0]);
const B = parseInt(numericLines[1]);

console.log(`X = ${sum(A, B)}`);
