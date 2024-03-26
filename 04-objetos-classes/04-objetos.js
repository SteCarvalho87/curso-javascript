const pessoa = {
    nome: 'Stephanie',
    idade: 36,

    descrever: function() {
        //this refere-se ao próprio objeto
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }

};
pessoa.descrever();

console.log(pessoa.nome);
console.log(pessoa.idade);
console.log(pessoa);


//É possível adicionar nova chave e valor ao objeto
pessoa.altura = 1.65;

console.log(pessoa);

//tbm é possivel remover
delete pessoa.altura;
console.log(pessoa);

//Uma função dentro de um objeto é chamada de método. Acima função descrever

//Trocando os valores à função

pessoa.nome = 'Vitoria';
pessoa.idade = 17;

pessoa.descrever();

//podemos também acessar o valor através da sintaxe abaixo
console.log(pessoa['nome']);