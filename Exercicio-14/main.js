
//importando as funcoes utilizando o node.js
const {gets, print} = require('./funcoes-auxiliares.js');

let maiorValor = 0;
let valoresSorteados = [];

for(let i = 0; i < 5; i++){
    
    //valoresSorteados[i] = gets();
    
    const valorSorteado = gets();
    valoresSorteados.push(valorSorteado);
}

for(let i = 0; i < valoresSorteados.length; i++){
    if (valoresSorteados[i] > maiorValor){
        maiorValor = valoresSorteados[i];
    }
}
print(maiorValor);

