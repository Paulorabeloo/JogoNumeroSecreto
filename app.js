alert('Boas vindas ao jogo do número secreto');

// console.log para verificar o valor de "chute" após a entrada do usuário
let chute 
console.log('Valor do chute:', chute);

let numeroMaximo = 1000;
let numeroSecreto = parseInt (Math.random() * numeroMaximo + 1); // vai gerar um número aleatorio entre 1 e 100
let tentativas = 1;

// console.log para verificar a comparação entre "chute" e "numeroSecreto"
console.log('Resultado da comparação:', chute == numeroSecreto);

//enquanto chute não for igual ao numeroSecreto
while (chute != numeroSecreto) {
    chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);
    // se chute for igual ao número secreto
    if (chute == numeroSecreto) {
        break;
    } else {
        // console.log para verificar o valor de "numeroSecreto" quando o jogador erra
        console.log('Valor do número secreto:', numeroSecreto);
        if (chute > numeroSecreto) {
            alert(`O numero secreto é menor que ${chute}`);
        }
        else {
            alert(`O numero secreto é maior que ${chute}`);
        }
        // tentativas = tentativas + 1
        tentativas ++; 
    }
}

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa' //operador ternário mesma coisa que:
alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}.`);

/*
if (tentativas > 1){
    alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas.`);
}
else {
    alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativa.`);
}
*/