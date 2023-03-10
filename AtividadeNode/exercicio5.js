//Importando o pacote require

const readline = require("readline-sync");


//Criando variáveis

const valor = parseInt(readline.question("Digite um número: \n"));



if(valor >= 0){
    console.log("O número: " + valor + " é positivo");
}else{
    console.log("O número: " + valor + " é negativo");
}