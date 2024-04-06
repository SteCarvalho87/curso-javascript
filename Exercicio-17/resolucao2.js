//importando as funcoes utilizando o node.js
const { gets, print } = require('./funcoes-auxiliares.js');

function calcularPorcentagem(valor, percentual){
    return valor * (percentual/100);
}

function pegarAliquota(salario){
    if (salario > 0 && salario < 1100){
        return 5;
    }else if(salario >= 1100 && salario < 2500){
        return 10;
    }else{
        return 15;
    }
}

const salario = gets();
const valorBeneficios = gets();
const aliquotaImposto = pegarAliquota(salario);
const valorImposto = calcularPorcentagem(salario, aliquotaImposto);

const valorATransferir = salario - valorImposto + valorBeneficios;

print(valorATransferir);