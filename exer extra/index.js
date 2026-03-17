//1
    //forma 1 de declarar um array
    let numeros = [1, 2, 3, 4, 5];

    console.log(numeros);

    //forma 2 de declarar um array
let nomes = new Array("ana", "pedro", "lucas");
console.log(nomes);

    //forma 3 de declarar um array, incorreta
const frutas = ["maça", "Banana", "Laranja"];
console.log(frutas);
    //forma 4
    var carros = ["fusca", "gol", "pálio"];
    console.log(carros);
    //como add elemtnos em um array
    //forma1 usando metodo push
    let cores = ["azul", "verde"];
    cores.push("vermelho", "roxo");//final
    cores.push("preto", "amarelo");//inicio
    console.log(cores);

    //lista de prioridade se >65 anos entra na frente se menor no fim da fila

let fila = [];

for (let i = 0; i < 5; i++) {
    let nome = prompt("Digite o nome do cliente:");
    let idade = Number(prompt("Digite a idade:"));

    // CORREÇÃO: Você precisa criar o objeto "cliente" aqui!
    let cliente = { nome: nome, idade: idade };

    if (idade > 65) {
        fila.unshift(cliente); 
    } else {
        fila.push(cliente);    
    }
}

console.log("Fila Final Organizada:");
console.table(fila); // O table deixa a visualização bem mais bonita!

//(remover elemento de array)
//usando pop() e shift() para remover o ultimo e o primeiro elemento
let animais = ["cachorro", "gato", "anta", "cavalo", "sapo", "flamingo", "passaro"];
animais.pop()//ultimo elemento
animais.shift()//primerio elememto
console.log(animais)

//exer
let codigo = ["html","css", "java", "react"];
codigo.pop()
codigo.shift()
console.log(codigo)

// nome.splice(nuemro do elemento) remove o indice 
let cores2 = ["azul","verde", "roxo","vermelho", "amarelo"];
cores2.splice(2, 1);//remove  o elemento vermelho indice 2 e 1 
console.log(cores2)

//como saber o tamanho da array
//propiedade lenght retorna a quantidade 
let cidade = ["sao paulo", "rio", "curitiba", "recife"];
console.log("numero de cidade:" + cidade.length)
//ex alunos
let alunos = [" henry", "isabelli", "isabella", "poliana", "bia"];
console.log("numero de alunos:" + alunos.length)

//como saber se uma variavel é um array
//array.isarray()
let lista =[1,2,3,4] 
let lista2=["henry"];
console.log(Array.isArray(lista));//true
console.log(Array.isArray(lista2));//false

//como unir dois arrays
//concat() junta dois pra fazer um novo

let time1=["joao","maria"];
let time2=["henry", "bia"];
let time3=["caio", "isa"];
let timecompleto = time1.concat(time2, time3,)
console.log(timecompleto);

//difereça entre map() e forEach()
//foreach -> percorre o array
//mpa cria um novo array transformado

//foreach 
let numerosforeach = [1,2,3];
numeros.forEach(function(n){
console.log(n * 2);
});

//map
let numerosmap = [1,2,3];
let dobro = numeros.map(function(n){
return n * 2;
});
console.log(dobro);

//como encontrar um elemento
//indexOf() retorna posição
//includes() retorna verdadeiro ou falso

let frutasdobebe = ["maçã","banana","laranja"];
console.log(frutasdobebe.indexOf("banana"));
console.log(frutasdobebe.includes("uva"));

//exer
let tags = [["HTML","CSS","JS","React"]];
console.log(tags.indexOf("JS"));//2
console.log(tags.includes("Angular"));//false

//array esparso 
//varavel do tipo array que tem elemtno em posiçoes nao contiguas ,ou seja, com "bur"
let arr = [];

arr[0] = "A";
arr[5] = "B";
console.log(arr);
console.log(arr.length);


//ordenação de array
let numerosdesordenados
//exer
let meuArray = [];

meuArray[0] = "Início";
meuArray[10] = "Fim";

console.log(meuArray);
console.log(meuArray.length);