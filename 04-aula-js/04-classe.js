//Com a classe podemos criar vários objetos com o mesmo modelo. define o objeto para que eles sejam instanciados

class Pessoa {
    nome;
    idade;
    anoDeNascimento;

    descrever(){
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }

    // a estrutura constructor obriga a ser informado os valores na definição do objeto e tbm possibilita acrescentar informações que são deduzidas a partir de outros dados, como o ano de nascimento.
    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
        this.anoDeNascimento = 2024 - idade;
    }
}

//instância da classe acima

const stephanie = new Pessoa();
stephanie.nome = 'Stephanie Carvalho';
stephanie.idade = 36;

//criando um novo objeto com a estrutura constructor
const renan = new Pessoa('Renan Paula', 25);

stephanie.descrever();
renan.descrever();
console.log(renan.anoDeNascimento);

function compararPessoas(p1,p2){
    if(p1.idade > p2.idade){
        console.log(`${p1.nome} é mais velho(a) que ${p2.nome}`);
    }else if (p1.idade < p2.idade){
        console.log(`${p2.nome} é mais velho(a) que ${p1.nome}`);
    }else{
        console.log(`${p1.nome} tem a mesma idade que ${p1.nome}`);
    }
}

compararPessoas(stephanie, renan);
