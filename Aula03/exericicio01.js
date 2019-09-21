/*Escreva um programa que solicita o nome e a altura de 5 atletas. Ao final da entrada de dados, informe A ALTURA do atleta mais alto */

/*
    INICIO
    Digite o nome e altura
    Digite o nome e altura
    Digite o nome e altura
    Digite o nome e altura
    Digite o nome e altura
    maior
        
    Se a altura do nome1 for maior que a altura do nome2
    armazena nome1 em maior
    Senão
    nome2 > nome3
    armazena nome2 em maior 
    Senão
    nome3 > nome4
    armazena nome3 em maior
    senão
    nome4 > nome5 em maior

    Apresenta maior
*/

let cont, nome, nome2, altura, altura2;
altura2 = 0;
nome2 = "";
cont = 0

while (cont < 5) {
    nome = prompt("Digite o nome do atleta:")
    altura = parseFloat(prompt("Digite a altura do atleta:"))

    if(altura > altura2){
        nome2 = nome;
        altura2 = altura;        
    }
    cont++;
}
document.write (`${nome2} é a atleta com maior altura com ${altura2} metros `)
