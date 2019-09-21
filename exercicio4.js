/*Solicite que o usuário digite um número. Informe então se este número é par ou ímpar*/

/*

INICIO
    digite um numero
     se
    numero / 2 = 0
        "Esse é um numero par!"
    se não
        "Esse é um numero impar!"

FIM
*/

const valor1 = parseInt(prompt("Digite um número!"))

if (valor1%2 === 0){
    alert(`${valor1} é um numero par!`)
}else
{
    alert(`${valor2} é um numero impar!`)
}