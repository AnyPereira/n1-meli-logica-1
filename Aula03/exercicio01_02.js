/*  informe também a altura média destes 5 atletas.*/

let cont, nome, nome2, altura, altura2;
altura2 = 0;
nome2 = "";
soma = 0
media = 0;
cont = 0

while (cont < 5) {
    nome = prompt("Digite o nome do atleta:")
    altura = parseFloat(prompt("Digite a altura do atleta:"))

    if(altura > altura2){
        nome2 = nome;
        altura2 = altura;     
        soma = soma + altura;   
    }
    cont++;
        media = soma/5
}
document.write (`${nome2} é o atleta com maior altura com ${altura2} metros e a média da altura é ${media} metros `)