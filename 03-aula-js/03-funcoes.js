// Sintaxe da declaração de uma função:
//function nomeDaFuncao(parametro){execução do código}

function sayMyName(name){
    console.log('Your name is:'+ name);
}

//invocando a sunção
sayMyName(Vitor);
sayMyName(Stephanie);


function quadrado(valor){
    return valor * valor;
}

//passando o valor da função para a constante:
const quadradoDeDez = quadrado(10);
console.log(quadradoDeDez);


//As funções servem para criar trechos de código que podem ser repetidos quantas vezes forem necessárias
//função com vários parametros:
function incrementarJuros(valor,percentualJuros){
    const valorDeAcrescimo = (percentualJuros / 100) * valor;
    return valor + valorDeAcrescimo;
}

console.log(incrementarJuros(100, 10));
console.log(incrementarJuros(100, 15));