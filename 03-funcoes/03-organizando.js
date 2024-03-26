//para estruturar o código, colocamos tudo numa enorme função chamada MAIN;
//1º-Desclaramos todas as funções, 2º declaramos e escrevemos o código na função main, 3º chamamos a função main:

function sayMyName(name){
    console.log('Your name is:'+ name);
}

function main(){
    console.log('programa principal');
    sayMyName(Stephanie);
}

main();

// essa estrutura pode ser melhor executada de envolvermos a função principal em parenteses () para informar que é o trecho de código prioritário e depois repetimos os () parenteses vazios para executá-la imediamente
//também removemos o nome da função, ela se torna uma função "não nomeada"

(function (){
    console.log('programa principal');
    sayMyName(Stephanie);
})();
