function verificarIdade(idade){
    if(idade >= 18){
        console.log ('É maior de idade');
    }else{
        console.log ('É menor de idade');
    }
    
}

(function (){
    verificarIdade(18);
    verificarIdade(21);
    verificarIdade(12);
})();
