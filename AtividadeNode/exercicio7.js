//Importando o pacote require

const readline = require("readline-sync");


//Criando variáveis

const num1 = parseInt(readline.question("Digite a primeira nota: \n"));
const num2 = parseInt(readline.question("Digite a primeira nota: \n"));


const soma = parseInt(num1 + num2);
const sub = parseInt(num1 - num2);
const mult = parseInt(num1 * num2);
const divi = parseInt(num1 / num2);

console.log("A soma dos números é: " + soma);
console.log("A subtração dos números é: " + sub);
console.log("A multiplicação dos números é: " + mult);
console.log("A divisão dos números é: " + divi);