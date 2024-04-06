//importando as funcoes utilizando o node.js
const {gets, print} = require('./funcoes-auxiliares.js');

const mediaAluno = gets();

if (mediaAluno >= 5 && mediaAluno < 5){
    print('Reprovado');
}else if(mediaAluno >= 5 && mediaAluno < 7){
    print('Recuperação');
}else if(mediaAluno >= 7){
    print('Aprovado');
}else{
    print('Número inválido');
}