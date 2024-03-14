let preco = 100;
let formaDePagamento = 5;
let precoFinal = 0;

/*
Formas de pagamento:
1 - à vista no débito
2 - à vista no dinheiro
3 - parcelado em 2x
4 - parcelado de 3x em diante
*/

if (formaDePagamento === 1){
    precoFinal = preco - (preco * 0.1);
    console.log('O valor a pagar é',precoFinal.toFixed(2));
}else if(formaDePagamento === 2){
    precoFinal = preco - (preco * 0.15);
    console.log('O valor a pagar é',precoFinal.toFixed(2));
}else if(formaDePagamento === 3){
    precoFinal = preco;
    console.log('O valor a pagar é',precoFinal.toFixed(2));
}else if(formaDePagamento === 4){
    precoFinal = preco + (preco * 0.1);
    console.log('O valor a pagar é',precoFinal.toFixed(2));
}else{
    console.log('Forma de pagamento inválida');
}