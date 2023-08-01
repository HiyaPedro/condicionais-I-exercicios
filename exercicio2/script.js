//-----------------------Exercício 2----------------------//
/*
Escreva uma função que receba três valores. Uma idade, um booleano que responde se a pessoa terminou ou não o ensino médio, e um booleano que responda se a pessoa está cursando alguma faculdade.
*/
/*
let idadE = 18;
const terminouEnsionMedio = true;
const cursandoFaculdade = false;

const respondaTres1 = (val1, val2, val3) => {
    if(val1 >= 18) {
        console.log("A pessoa é maior de idade");
    } else {
        console.log("A pessoa é menor de idade")
    }
}
respondaTres1(idadE, terminouEnsionMedio, cursandoFaculdade)
*/
let idadE = 18;
const terminouEnsionMedio = true;
const cursandoFaculdade = false;

const respondaTres1 = (val1, val2, val3) => {
    if(val1 >= 18) {
        console.log("A pessoa é maior de idade")
    } else {
        console.log("A pessoa é menor de idade")
    }
    if(val2 === true) {
        console.log("A pessoa terminou ensino médio");
    } else {
        console.log("A pessoa não terminou ensino médio");
    }
    if(val3 === true) {
        console.log("Sim a pessoa está cursando faculdade");
    } else {
        console.log("A pessoa não está cursando faculdade");
    }
 }
respondaTres1(idadE, terminouEnsionMedio, cursandoFaculdade)
/*
const respondaTres2 = (val1, val2, val3) => {
    if(val2 === true) {
        console.log("Sim a pessoa terminou ensino médio")
    } else {
        console.log("A pessoa não terminou ensino médio")
    }  
}
respondaTres2(idadE, terminouEnsionMedio, cursandoFaculdade)


const respondaTres3 = (val1, val2, val3) => {
    if(val3 === true) {
        console.log("Sim a pessoa está cursando faculdade")
    } else {
        console.log("A pessoa não está cursando faculdade")
    }  
}
respondaTres3(idadE, terminouEnsionMedio, cursandoFaculdade)
*/
/*
Crie um `if` para cada variável, checando as seguintes afirmacões:
- Se a pessoa tem 18 anos ou mais;
- Se a pessoa terminou o ensino médio;
- Se a pessoa NÃO está cursando alguma faculdade;
*/
/*
Crie um `if` que imprima que a afirmacão é verdadeira, e um `else` para imprimir que a afirmacão não é verdadeira.
*/
/*
<details>
<summary>Exemplo</summary>

Caso a primeira pessoa tenha idade >= 18:
<b>"A pessoa é maior de idade"</b>

e caso não seja:
<b>"A pessoa é menor de idade"</b>
</details>
*/