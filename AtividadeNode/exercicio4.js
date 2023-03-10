//Importando o pacote require

const readline = require("readline-sync");


//Criando variáveis

const valor = parseInt(readline.question("Digite um número: \n"));


if (valor % 2 == 0) {

    console.log("O número é par")
    
    }else{
    
    console.log("O número é impar");
    
    }



