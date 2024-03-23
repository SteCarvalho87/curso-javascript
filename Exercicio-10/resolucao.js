//define a classe
class carros{
    marca;
    cor;
    gastoMedioLitroPorKm;

    //coloca a obrigatoriedade dos atributos
    constructor(marca, cor, gasto){
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioLitroPorKm = gasto
    }

    //criação do método(função da classe) 
    calcularValorPercurso(kmRodado, precoCombustivel) {
        return (kmRodado / this.gastoMedioLitroPorKm) * precoCombustivel;
    }
}

//criação da instância:
const uno = new carros('Fiat Uno', 'vermelho', 1/13);

//impressão dos atributos da instância
console.log(uno);

// impressão do resultado do método aplicado à instância:
console.log(uno.calcularValorPercurso(10, 5.20));

const vectra = new carros('Vectra', 'prata', 1/8);
 
console.log(vectra);
console.log(vectra.calcularValorPercurso(10, 5.20));