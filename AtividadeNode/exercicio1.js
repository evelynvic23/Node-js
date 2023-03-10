//Importando o pacote require

const readline = require("readline-sync");


//Criando variáveis


const valor1 = parseFloat(readline.question("Digite um número: \n"));

const valor2 = parseFloat(readline.question("Digite outro número: \n"));

if(valor1 > valor2){

console.log("O maior número é: " + valor1);

}else{
    
console.log("O maior número é: " + valor2);
}

