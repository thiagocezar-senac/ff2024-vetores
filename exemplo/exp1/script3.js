/*
Crie um algoritmo que leia um vetor de 10 letras, 
e diga quantas consoantes foram lidas e mostre essas consoantes.
*/
function lerVetor() {
    let letras = [];
    for (let i = 0; i < 10; i++) {
        let letra = prompt(`Digite a ${i + 1} ª letra:`);
        while (!isNaN(letra) || letra.trim() == '' || letra.length !== 1) {
            alert("Letra inválida!");
            letra = prompt(`Digite a ${i + 1} ª letra novamente:`);
        }
        letras.push(letra);
    }
    return letras;
}

function exibirConsoantes(letras) {
    let msg = "";
    let quantidade = 0;
    for (let j = 0; j < letras.length; j++) {
        let letraLida = letras[j].toUpperCase();
        let vgs = ["A", "E", "I", "O", "U"];
        if (!vgs.includes(letraLida)) {
            msg += letras[j] + " ";
            quantidade++;
        }
    }
    return `A quantidade de consoantes é ${quantidade} e as consoantes são elas: ${msg}`;
}

let letrasVetor = lerVetor();
let mensagem = exibirConsoantes(letrasVetor);
alert(mensagem);