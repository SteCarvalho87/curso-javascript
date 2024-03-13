let nota1 = 10;
let nota2 = 5;
let nota3 = 7;
let media = (nota1 + nota2 + nota3) / 3;

console.log(media.toFixed(2));

if (media < 5){
    console.log('O aluno está reprovado');
}else if(media >= 5 && media <= 7){
    console.log('O aluno está em recuperação');
}else{
    console.log('O aluno está aprovado');
}


