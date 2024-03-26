//define a classe
class Pessoa{
    nome;
    altura;
    peso;
    imc;

    //coloca a obrigatoriedade dos atributos
    constructor(nome, altura, peso){
        this.nome = nome;
        this.altura = altura;
        this.peso = peso;
        this.imc = this.peso / Math.pow(this.altura, 2)
    }

    classificarImc(){
        if (this.imc < 18.5){
            return 'abaixo do peso';
        }else if(this.imc >= 18.5 && this.imc < 25){
            return 'com peso normal';
        }else if(this.imc >= 25 && this.imc < 30){
            return'acima do peso';
        }else if(this.imc >= 30 && this.imc < 40){
            return 'com obesidade';
        }else{
            return 'com obesidade grave';
        }
    }
    

    dizerIMC(){
        console.log (`Eu me chamo ${this.nome}, meu IMC é ${this.imc.toFixed(2)} e eu estou ` + this.classificarImc());
    }
}

//criação da instância:
const jose = new Pessoa('José', 1.75, 70);

//chamar método:
jose.dizerIMC();