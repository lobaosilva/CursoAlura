// 1. Crie um contador que comece em 1 e vá até 10 usando um loop while. Mostre cada número.
let contador = 1;

while (contador <= 10) {
    console.log(contador);
    contador++;
}

// 2. Crie um contador que começa em 10 e vá até 0 usando um loop while. Mostre cada número.
contador = 10;

while (contador >= 0) {
    console.log(contador);
    contador--;
}

// 3. Crie um programa de contagem regressiva. Peça um número e conte deste número até 0, usando um loop while no console do navegador.
contador = prompt('Digite um número para a contagem regressiva:');

while (contador >= 0) {
    console.log(contador);
    contador--;
}

// 4. Crie um programa de contagem progressiva. Peça um número e conte de 0 até esse número, usando um loop while no console do navegador.
numero = prompt('Digite um número para a contagem progregressiva:');
contador = 0;

while (contador <= numero) {
    console.log(contador);
    contador++;
}