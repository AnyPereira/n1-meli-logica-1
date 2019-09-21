/*Escreva um programa que sorteia um número de 1 a 10 e dá duas chances para que o usuário acerte*/

const num = parseInt(prompt('Digite um numero de 1 a 10'));

const sorte = Math.floor(Math.random()*10+1);
console.log('sorte fora do if e else: ', sorte)
if(num == sorte){
    alert(`Parabéns você acertou! O número é ${num}`)
}else
{
   const num2 = parseInt(prompt('Digite um numero de 1 a 10'));
   console.log('sorte dentro else: ', sorte)
if (num2 == sorte){
   alert(`Parabéns você acertou! O número é ${sorte}`)
}
else
{
    alert('Não foi dessa vez:()')
}
}


