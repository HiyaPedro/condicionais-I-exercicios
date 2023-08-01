//------------------Exercício 3----------------------//
/*
Crie uma função que recebe do usuário sua nacionalidade, utilizando um **prompt** com a seguinte mensagem: "Escreva aqui sua nacionalidade." e guarde o valor da resposta em uma const `nacionalidade`.

Vamos considerar que nosso programa aceita as seguintes 5 nacionalidades:
- brasileira;
- argentina;
- uruguaia;
- chilena;
- colombiana;

Crie uma estrutura de `if/else if/else` que verifique se a nacionalidade guardada na const `nacionalidade` é igual a cada uma das nacionalidades acima, e caso seja, imprima a nacionalidade no console. O último `else` deve imprimir "nacionalidade não encontrada" caso o valor de `nacionalidade` não corresponda a nenhuma das possibilidades acima.

> 💡 Lembre-se de prestar atenção às letras maiúsculas e minúsculas. 
*/

const usario = prompt("Escreva aqui sua nacionalidade.").toLowerCase()
const suaNacionalidade = (usarioA) => {
    
    return usarioA
}
const nacionalidade = suaNacionalidade(usario)


if (nacionalidade === "brasileira") {
    console.log("Sua nacionalidade é brasileira");
} else if (nacionalidade === "argentina") {
    console.log("Sua nacionalidade é argentina");
} else if (nacionalidade === "uruguaia") {
    console.log("Sua nacionalidade é uruguaia");
} else if (nacionalidade === "chilena") {
    console.log("Sua nacionalidade é chilena");
} else if (nacionalidade === "colombiana") {
    console.log("Sua nacionalidade é colombiana");
} else {
    console.log("nacionalidade não encontrada");
}

