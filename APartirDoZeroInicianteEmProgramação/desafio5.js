// 1. Criar uma função que exibe "Olá, mundo!" no console.
function olaMundo(){

    console.log('Olá, mundo!');
}

olaMundo();

// 2. Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.
function nome(nome) {

    console.log(`Olá, ${nome}!`);
}

nome('Alice');

// 3. Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.
function numero(numero) {

    return numero * 2;
}

let resultadoDobro = numero(5);
console.log(resultadoDobro);

// 4. Criar uma função que recebe três números como parâmetros e retorna a média deles.
function media(n1, n2, n3) {

    return media = (n1 + n2 + n3) / 3;
}

let media = media(4, 7, 10);
console.log(media);

// 5. Criar uma função que recebe dois números como parâmetros e retorna o maior deles.
function maiorNumero(n1, n2) {

    return n1 > n2 ? n1 : n2;
}

let maiorNumero = maiorNumero(15, 9);
console.log(maiorNumero);

// 6. Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo
function multi(n1) {

    return n1 * n1;
}

let resultado = quadrado(2);
console.log(resultado);