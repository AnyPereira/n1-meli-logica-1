/*1.1. Complemente o exercício anterior agora informando o NOME e a ALTURA do atleta mais alto.*/

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