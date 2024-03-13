let precoGasolina = 5.79;
let precoEtanol = 3.20;
let distanciaEmKm = 100;
let tipoCombustivel = 'gasolina';
let valorViagem = 0;

const KmPorLitro = 8;

if (tipoCombustivel === 'gasolina'){
    valorViagem = (distanciaEmKm/KmPorLitro) * precoGasolina;
}else{
    valorViagem = (distanciaEmKm/KmPorLitro) * precoEtanol;
}

console.log(valorViagem.toFixed(2));

