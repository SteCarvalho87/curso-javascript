const numero = 10;

const numeroPar = (numero % 2) === 0;
/*O cáculo acima retornará uma variável booleana. É par, true. Não é par, false.

= Atribui valor a uma variavel

== Retorna verdadeiro caso os operandos sejam iguais.

=== Retorna verdadeiro caso os operandos sejam iguais e do mesmo tipo. */

console.log(numeroPar);

if(numeroPar){
    console.log('O número e par');
}else{
    console.log('O número e impar');
}


