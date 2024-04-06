//importando as funcoes utilizando o node.js
const { gets, print } = require('./funcoes-auxiliares.js');

function calcularSalarioFinal(salarioBruto, aliquota, beneficios){
    return (salarioBruto - (salarioBruto * (aliquota/100))+ beneficios);
}

const salarioBruto = gets();
const beneficios = gets();
let salarioFinal = 0;

if (salarioBruto > 0 && salarioBruto < 1100){
    salarioFinal = calcularSalarioFinal(salarioBruto, 5, beneficios);
}else if(salarioBruto >= 1100 && salarioBruto < 2500){
    salarioFinal = calcularSalarioFinal(salarioBruto, 10, beneficios);
}else{
    salarioFinal = calcularSalarioFinal(salarioBruto, 15, beneficios);
}

print(salarioFinal);