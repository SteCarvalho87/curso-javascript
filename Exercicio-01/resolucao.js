const precoCombustivel = 5.79;
const KmPorLitro = 8;
const distanciaEmKm = 1872;

let valorViagem = (distanciaEmKm/KmPorLitro) * precoCombustivel;

console.log(valorViagem.toFixed(2));

/*Esse to fixed depois da variável serve para arredondar o número em até 2 casas */