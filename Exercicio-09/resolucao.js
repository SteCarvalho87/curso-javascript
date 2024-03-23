function aplicarDesconto(preco, juros){
    return preco - (preco * (juros / 100));
}

function aplicarJuros(preco, juros){
    return preco + (preco * (juros / 100));
}

function verificarFormaDePagamento(formaDePagamento, preco){
    switch(formaDePagamento){
        case 1:
            console.log('O valor a pagar é',aplicarDesconto(preco, 10));
            break;
        case 2:
            console.log('O valor a pagar é',aplicarDesconto(preco, 15));
            break;
        case 3:
            console.log('O valor a pagar é', preco);
            break;
        case 4:
            console.log('O valor a pagar é',aplicarJuros(preco, 10));
            break;
        default:
            console.log('Forma de pagamento inválida');
            break;
    }    
}

/*
Formas de pagamento:
1 - à vista no débito
2 - à vista no dinheiro
3 - parcelado em 2x
4 - parcelado de 3x em diante
*/

(function (){
    let preco = 100;
    let formaDePagamento = 3;

    verificarFormaDePagamento(formaDePagamento, preco);
})();

