/*Faça um algoritmo que receba um número e mostre uma mensagem caso este número seja maior que 10.*/

/*

INICIO
    receber um numero
    se
    numero > 10
        "Número é maior que 10!"
    se não
        "Número não é maior que 10!"

FIM
*/

const numero = parseInt(prompt("Digite um número"))
if (numero > 10) {

    alert(`${numero} é maior que 10!`)
    
} else {
    if(numero === 10){
        alert(`${numero} é igual a 10!`)

    }
 else {
     alert(`${numero} é menor que 10!`)

    }
}