alert('Boas vindas ao jogo do número secreto');

let numeroSecreto = 2;
console.log(numeroSecreto);

let chute = prompt('Escolha um número entre 1 e 10');
console.log('Valor do chute:', chute);

console.log('Resultado da comparação:', chute == numeroSecreto);
if (chute == numeroSecreto) {
    alert(`Isso aí! Você descobriu o número secreto ${numeroSecreto}`);
} else {
    console.log('Valor do número secreto:', numeroSecreto);
    alert('Você errou :(');
}