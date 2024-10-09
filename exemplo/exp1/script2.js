// Crie um algoritmo que leia um vetor de 5 números inteiros e mostre-os.

let numeros = [];
for (let i = 0; i < 5; i++) {

    let numero = prompt("Insira um número");

    while (isNaN(numero)) {
        alert("Isso não é um número válido!")
        numero = prompt("Insira um número novamente!")
    }
    numero = parseInt(numero);
    // Inserindo o numero digitado ao vetor
    numeros.push(numero);
}

console.log(numeros);
