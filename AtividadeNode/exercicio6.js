//Importando o pacote require

const readline = require("readline-sync");


//Criando variáveis

const nota1 = parseFloat(readline.question("Digite a primeira nota: \n"));

const nota2 = parseFloat(readline.question("Digite a segunda nota: \n"));

const nota3 = parseFloat(readline.question("Digite a terceira nota: \n"));

var media = (nota1 + nota2 + nota3) / 3;

console.log("A média das notas do aluno é: " + media);


if(media >= 7){
    console.log("Aluno aprovado!");
}else{
    console.log("Aluno reprovado!");
}