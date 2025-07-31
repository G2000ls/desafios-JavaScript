// Lista contendo 4 desafios

//Crie um contador que comece em 1 e vá até 10 usando um loop while. Mostre cada número no log.
let contador1 = 1;
console.log(`contando de ${contador1} até 10:`);5
while(contador1 <= 10){
    console.log(contador1);
    contador1++;
}

//Crie um contador que começa em 10 e vá até 0 usando um loop while. Mostre cada número no log.
let contador2 = 10;
console.log(`contando de ${contador2} até 0:`);
while(contador2 >= 0){
    console.log(contador2);
    contador2--;
}

//Crie um programa de contagem regressiva. Peça um número e conte deste número até 0, usando um loop while no console do navegador.
let contador3 = prompt('Digite um número:');
console.log(`contando de ${contador3} até 0:`);
while(contador3 >= 0){
    console.log(contador3);
    contador3--;
}

//Crie um programa de contagem progressiva. Peça um número e conte de 0 até esse número, usando um loop while no console do navegador.
let contador4 = 0 
let limite = prompt('Digite um número:');
console.log(`contando de ${contador4} até ${limite}:`);5
while(contador4 <= limite){
    console.log(contador4);
    contador4++;
}