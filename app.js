alert('Boas vindas ao jogo do número secreto');
let numeroSecreto = 5;
console.log(numeroSecreto)
let chute = prompt('Escolha um número entre 1 e 10'); // prompt é para o usuário digitar

// se o chute for = ao numeroSecreto mostre... 
if (chute == numeroSecreto) {
    alert('Isso ai! Você descobriu o número secreto ' + numeroSecreto); // ou ${numeroSecreto} isso chama acoplamento
}
else {
    alert('Você errou :(')
}