// Lista contendo 13 desafios

//Crie um programa que utilize o console.log para exibir uma mensagem de boas-vindas.
console.log('Seja bem vindo compatriota');

//Crie uma variável chamada "nome" e atribua a ela o seu nome. Em seguida, utilize o console.log para exibir a mensagem "Olá, [seu nome]!" no console do navegador.
let nome1 = 'Gustavo';
console.log(`Olá, ${nome1}!`);

//Crie uma variável chamada "nome" e atribua a ela o seu nome. Em seguida, utilize o alert para exibir a mensagem "Olá, [seu nome]!" .
let nome2 = 'Gustavo';
alert(`Olá, ${nome2}!`);

//Utilize o prompt e faça a seguinte pergunta: Qual a linguagem de programação que você mais gosta?. Em seguida, armazene a resposta em uma variável e mostre no console do navegador.
let resposta = prompt('Qual é a linguagem de programação que você mais gosta?');
console.log(resposta);

//Crie uma variável chamada "valor1A" e outra chamada "valor2A", atribuindo a elas valores numéricos de sua escolha. Em seguida, realize a soma desses dois valores e armazene o resultado em uma terceira variável chamada "resultadoA". Utilize o console.log para mostrar a mensagem "A soma de [valor1] e [valor2] é igual a [resultado]." no console.
let valor1A = 5;
let valor2A = 10;
let resultadoA = valor1A + valor2A;
console.log(`A soma de ${valor1A} e ${valor2A} é igual a ${resultadoA}.`);

//Crie uma variável chamada "valor1B" e outra chamada "valor2B", atribuindo a elas valores numéricos de sua escolha. Em seguida, realize a subtração desses dois valores e armazene o resultado em uma terceira variável chamada "resultadoB". Utilize o console.log para mostrar a mensagem "A diferença entre [valor1] e [valor2] é igual a [resultado]." no console.
let valor1B = 20;
let valor2B = 14;
let resultadoB = valor1B - valor2B;
console.log(`A diferença entre ${valor1B} e ${valor2B} é igual a ${resultadoB}.`);

//Peça ao usuário para inserir sua idade com prompt. Com base na idade inserida, utilize um if para verificar se a pessoa é maior ou menor de idade, exibindo uma mensagem apropriada no console.
let idade = prompt('Digite sua idade:');
if(idade < 18){
    console.log('A pessoa é menor de idade.');
}
    else{
        console.log('A pessoa é maior de idade.');
    }

//Crie uma variável "numero" e peça um valor com prompt verifique se é positivo, negativo ou zero. Use if-else para imprimir a respectiva mensagem.
let numero = prompt('Digite um numero:');
if(numero < 0){
    alert(`O número ${numero} é negativo.`);
}
    else{
        if(numero > 0){
            alert(`O número ${numero} é positivo.`);
        }
        else{
            alert(`Você digitou o zero.`);
        }
    }

//Use um loop while para imprimir os números de 1 a 10 no console.
let num = 1;
while(num <= 10){
    console.log(num);
    num++;
}

//Crie uma variável "nota" e atribua um valor numérico a ela. Use if-else para determinar se a nota é maior ou igual a 7 e exiba "Aprovado" ou "Reprovado" no console.
let nota = 5.5;
if(nota >= 7){
    console.log('Aprovado!');
}
else{
    console.log('Reprovado!');
}

//Use o Math.random para gerar qualquer número aleatório e exiba esse número no console.
let numeroAleatorio1 = Math.random();
console.log(numeroAleatorio1);

//Use o Math.random para gerar um número inteiro entre 1 e 10 e exiba esse número no console.
let numeroAleatorio2 = parseInt(Math.random() * 10 + 1);
console.log(numeroAleatorio2);

//Use o Math.random para gerar um número inteiro entre 1 e 1000 e exiba esse número no console.
let numeroAleatorio3 = parseInt(Math.random() * 1000 + 1);
console.log(numeroAleatorio3);
