// Lista contendo 4 desafios

// Pergunte ao usuário qual é o dia da semana. Se a resposta for "Sábado" ou "Domingo", mostre "Bom fim de semana!". Caso contrário, mostre "Boa semana!".
let diaSemana = prompt('Qual é o dia da semana?');
if(diaSemana == 'Sábado' || diaSemana == 'Domingo'){
    alert('Bom fim de semana!');
}
    else{
        alert('Boa Semana!');
    }

// Verifique se um número digitado pelo usuário é positivo ou negativo. Mostre um alerta informando.
let num = prompt('Digite um número:');
if(num >= 0){
    alert(`O número ${num} é positivo`);
}
    else{
        alert(`O número ${num} é negativo`);
    }

//Crie um sistema de pontuação para um jogo. Se a pontuação for maior ou igual a 100, mostre "Parabéns, você venceu!". Caso contrário, mostre "Tente novamente para ganhar.".
pontos = 200;
if(pontos >= 100){
    alert('Parabéns, você venceu! Sua pontuação foi de: ' +pontos);
}
    else{
        alert('Você perdeu! Tente novamente para ganhar.');
    }

//Crie uma mensagem que informa o usuário sobre o saldo da conta, usando uma template string para incluir o valor do saldo.
saldoConta = 5000;
alert(`Seu saldo em conta é de R$ ${saldoConta},00.`);

//Peça ao usuário para inserir seu nome usando prompt. Em seguida, mostre um alerta de boas-vindas usando esse nome.
let nome = prompt('Digite seu nome:');
alert(`Olá ${nome}, Seja bem vindo(a)!`);