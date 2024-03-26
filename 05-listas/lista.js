/*criando uma lista de nomes a partir da posição 0 */

const alunos = ['João', 'Vitor', 'Marina'];

console.log(alunos[0]);

//adicionando um elemento
alunos.push('Renan');
//ou informando a posição. Se eu informar numa posição que já existe uma informação ela é substituída.
alunos[4] = 'Vinícius';
//javascript também aceita string e números na mesma lista
console.log(alunos);

//o comando a seguir deleta o último item da lista
alunos.pop();
console.log(alunos);
//o comando a seguir deleta o último item da lista
alunos.shift();
console.log(alunos);


//supondo que houvesse uma lista de notas, como faríamos para saber quantas unidades existem nessa lista e assim fazer uma média com todos esses itens?

const notas = [];

notas.push(5);
notas.push(7);
notas.push(8);
notas.push(2);
notas.push(5);
notas.push(8);

//precisaríamos de uma estrutura de repetição. Array.length mostra o tamanho da array
let total = 0;
for (let i = 0; i < notas.length; i++) {
    total = total + notas[i];    
}

const media = total / notas.length;
console.log(media);