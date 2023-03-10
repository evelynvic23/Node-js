//Importando o pacote require

const readline = require("readline-sync");

//Criando variáveis

const num1 = parseFloat(readline.question("Digite um número: \n"));

const num2 = parseFloat(readline.question("Digite outro número: \n"));

const num3 = parseFloat(readline.question("Digite outro número: \n"));



console.log("A soma dos números é: " + (num1 + num2 + num3));
