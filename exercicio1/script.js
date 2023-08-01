//-----------------Exercício 1----------------------//
/*
Crie uma função que receba uma const numérica qualquer. Crie um `if` para verificar se o número guardado na const é **par**. Caso seja, a função deve retornar a mensagem: "o número é par". Depois disso, imprima o retorno no console.
*/

const numQualquer = 41;

const numFunc = (numQ) => {
    if (numQ % 2 === 0) {
        console.log(`O número é par`)
    }
}
numFunc(numQualquer)