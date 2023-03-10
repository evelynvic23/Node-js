//Importando o pacote require

const readline = require("readline-sync");


//Criando variáveis


const idade = parseInt(readline.question("Digite sua idade: \n"));


if(idade >= 18){

console.log("Pessoa maior de idade!");

}else{
    
console.log("Pessoa menor de idade!");
}