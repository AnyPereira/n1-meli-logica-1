/*Escrever um algoritmo que leia dois valores inteiro distintos e informe qual deles é o maior.*/

/*

INICIO
    digite valor 1
    e
    digite valor 2
    se
    valor 1 > valor 2
        "Valor 1 é maior que o valor 2!"
    se não
        "Valor 2 é maior que o valor 1"

FIM
*/
const valor1 = parseInt(prompt("Digite o primeiro numero"))
const valor2 = parseInt(prompt("Digite o segundo numero"))
if (valor1 > valor2) 
    {
    alert(`${valor1} é maior que ${valor2}!`)
    }
else
    {
    alert(`${valor2} é maior que ${valor1}!`)
    }