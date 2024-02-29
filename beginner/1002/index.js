var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */
 
const PI = 3.14159;

const numericLines = lines.filter(line => !isNaN(parseFloat(line)));

numericLines.forEach(line => {
    const R = parseFloat(line);
    let area = PI * Math.pow(R, 2); 
    console.log("A=" + area.toFixed(4));
});