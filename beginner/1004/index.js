var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */

const numericLines = lines.filter(line => !isNaN(parseInt(line)));

function prod(A, B){
    return A*B;
}

const A = numericLines[0];
const B = numericLines[1];

const PROD = prod(A,B);

console.log(`PROD = ${PROD}`);