alert('Boas vindas ao jogo do número secreto');

// console.log para verificar o valor de "chute" após a entrada do usuário
let chute 
console.log('Valor do chute:', chute);

let numeroSecreto = 5;

// console.log para verificar a comparação entre "chute" e "numeroSecreto"
console.log('Resultado da comparação:', chute == numeroSecreto);

//enquanto chute não for igual ao numeroSecreto
while (chute != numeroSecreto) {
    chute = prompt('Escolha um número entre 1 e 10');
    // se chute for igual ao número secreto
    if (chute == numeroSecreto) {
        alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto}`);
    } else {
        // console.log para verificar o valor de "numeroSecreto" quando o jogador erra
        console.log('Valor do número secreto:', numeroSecreto);
    if (chute > numeroSecreto) {
        alert(`O numero secreto é menor que ${chute}`);
    }
    else {
        alert(`O numero secreto é maior que ${chute}`);
    }
    }
}
