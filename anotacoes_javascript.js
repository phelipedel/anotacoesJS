/*
var nome = 'rafael'; // string literal 
var idade = 25; // nnber literal 
var estraAprovado = true; // boolean (usado para se ela estiver logada na pagina ela funciona exemplo)
var sobreno = ; // Undefined 
var corSelecionado = null // a pagina estara sem cor e a pessoa escolher a cor que deseja 

*/

// Tipagem dinamica 

// o  a  script é um tipo de linguagem que consegue mudar facilmente o tipo de um variavel 
//---------------------------------------------------------------------------------------------------

// Trasformando criando um objeto 

/*var pessoa = {
    nome : 'Rafael',
    idade: 24,
    estaAprovado: true,
    sobrenome: 'Sousa'

};

console.log(pessoa)*/


//---------------------------------------------------------------------------------------------------
// Arrays

/*var familia = [26,45,50,17];
console.group(familia[1])    // é igual usar o formato de lista em python */

//---------------------------------------------------------------------------------------------------
// Function (Verbi + substantivo)
/*
var corSite = 'Blue'
function resetaCor(){
    corSite = '';

};
Caso eu queira alterar a cor do site a qualquer momento 

var corSite = 'Blue'
function resetaCor(cor){
    corSite = cor;

};


Caso eu queria por mais funcoes 
var corSite = 'Blue'
function resetaCor(cor, tonalidade){
    corSite = cor + tonalidade;

};


//---------------------------------------------------------------------------------------------------

//Tipos de funcoes 

// Realizar uma tarefa , nao devolver nada 
/*
function dizerNome(){
    console.log('Del');
}

dizerNome();


// Fazym calculou ou operacao e retorna algo 

function multiplarporDois(valor){
    return valor* 2;
};

var resultado = multiplarporDois(5);

console.log(resultado);


//---------------------------------------------------------------------------------------------------
// Operadores Aritimeticos (matematicos)
// Operadores de Atribuicao
// Operadores de Comparacao
// Operadores logicos 
// O peradores Bitwise


// Operadores de igualdade 
// Igualdade estrita 

console.log(1 === 1);
console.log('1' === 1 );


//  Igualdade solta 

console.log( 1 == 1);

// Operadores ternario
 // Util para nao ter que ficar faznedo if if if para comparar
    
 // exemplo tenho um cliente com 100 ponto é um cliente premium se nao um comum 

 var pontos = 100;
 var tipo = pontos > 99 ? 'premium' : 'comum';

 console.log(tipo);

// Operadores logicos , usado para tomar decisao em condicoes multiplas 

// OPERADOR LOGICO E (&&)
//  RETORNA true SE OS DOIS OPERADOS FOREM true 


//console.log(false && true);

let mairIdade = false;
let cTrabalho = true;
let podeAplicar = mairIdade && cTrabalho;

console.log(podeAplicar);
// Operador logico OU (||)

let mairIdade = false;
let cTrabalho = false;
let podeAplicar = mairIdade || cTrabalho;

console.log('pode aplicar', podeAplicar);


// Operador Logico NOT  (!)

let recusado = !podeAplicar;

console.log('nao pode aplicar', recusado);



// Faalsy e todos os valores
// undefined 
// null
// 0 
// false 
// ''
// NaN = not a number 

//Truthy 

var corPersonalizada = 'Vermelho';
var corPadrao = 'azul';
var corPerfil = corPersonalizada || corPadrao;

console.log(corPerfil);



// Troca de valores de uma variavel 

var a = 'vermelho';
var b = 'azul';

var c = a;
a = b;
b = c; 

console.log(a);
console.log(b);


// Tipos de condicionais 
// IF...Else


// Se a hora estver entre 06:00 ate 12:00 : Bom dia!

// Se a hora estver entre 12:00 ate 18:00 : Boa tarde!

// se nao boa noite!

var hora = 1;

if (hora >= 6 && hora <= 12){
    console.log('Bom dia');
}else if (hora >= 13 && hora <= 18){
    console.log('Boa tarde');
}else {
    console.log('Boa noite');
}



// modelo SWITCH 

var permissao; // coum, gerente, diretor 

permissao = 'Dono';

switch (permissao) {
    case 'Comum':
    console.log('Usuario comum');
    break

    case 'Gerente':
    console.log('Usuario gerente');
    break

    case 'Diretor':
    console.log('Usuario diretor');
    break

    case 'Dono':
    console.log('Usuario dono');
    break

    default:
        console.log('Usuario nao reconhecido');

}



// Repeticao 

// 1.For

// i de index 
//  i comeca com 0 va de 0 a 5 adicionando 1
for(let i = 1; i <= 5; i++) {
    console.log(i  +' Teste de id');
    
}
 console.log('----------------------------------');
// for em somente numeros impar

for (var i = 1; i <= 5; i++ ) {
    if (i % 2 !== 0 ) {
        console.log(i + ' teste');
    }
}
console.log('----------------------------------');
// for em somente numeros impar

for (var i = 5; i >= 1; i-- ) {
    if (i % 2 !== 0 ) {
        console.log(i + ' teste');
    }
}


// While LOOP

var i = 5; 

while (i >= 1 ) {
    if (i % 2 !== 0 ) {
        console.log(i);
    }
}


// Do...While

var i = 1;
do {
    console.log('Digitando', i);
    i++;
} while (i <= 10)



// Loop for-in 

const pessoa = {
    nome: 'Del',
    idade: 25
}

for(var chave in pessoa ) {
    console.log(chave, pessoa['nome']);
}



// For-OF

const cores = ['vermelhor', 'azul', 'verde'];

for (var cor of cores) {
    console.log(cor);
}

// a forma de cima é mais facil para lermos 

//Escrevendo uma funcao que usa 2 numeros e retorna o maior entre eles 


function max(a,b) {
    if (a >= b) {
        console.log(a);
    }else {
        console.log(b);
    }
}
max(1,0)



// uma forma mais limpa e rapida de verificao 
function max(a,b) {
    return a > b ? a : b;
}
var maior = max(10,5);
console.log(maior);


// funcao FIZZBUSS

// Divisivel por 3 => Fizz 
// Divisivel por 5 => Buzz
// Divisivel por 3 e 5 => FizzBuzz
// Nao divisivel por 3 ou 5 => entrada
// Nao é um numero => 'Nao é um numero '

const resultado = fizzBuzz(1);
console.log(resultado);


function fizzBuzz(entrada){
    if ( typeof entrada !== 'number')
        return 'Nao é um numero'
    if ( entrada % 3 === 0 )
        return 'Fizz';
    if ( entrada % 5 ===0 )
        return 'Buzz';
    if ( entrada % 3 === 0 && entrada % 5 === 0 )
        return 'FizzBuzz'
    return entrada, 'nao divisivel';
}



// velocidade maxima de ate 70
// a cada 5km a cima do limite voce ganha 1 ponto 
// mat.floor()
// caso os pontos acumulem mais de 12 = carteira suspensa 


// Consultar velocidade e aplicar os pontos 

verificarVel(106)

function verificarVel(velocidade) {
    const velmaximo = 70;
    const kmPorPontos = 5; 
    if ( velocidade <= velmaximo )
        console.log('ok');
    else {
        const pontos =  Math.floor ((( velocidade - velmaximo )/ kmPorPontos ));
        if (pontos >= 12) 
            console.log('Carteira suspensa');
        else {
            console.log(pontos);
        }
    }
}


exibir(10)
function exibir(limite) {
    for (var i = 0; i <= limite; 1++ ) {
        if (i % 2 ===0 )
            console.log('Par');   
    }else {
        console.log('Impar');
    }
        
}

// extraindo uma string do arquivo de objeto 

const filme = {
    titulo : 'Vingadores',
    ano : 2018,
    diretor : 'Robion',
    personagem : 'Thor'
}

exibir(filme);
function exibir(obj) {
    for (prop in obj)
        if (typeof obj[prop] === 'string')
            console.log(pop,obj[prop])

}




exibir(10)
function exibir(limite) {
    for (var i = 0; i <= limite; 1++ ) {
        if (i % 2 ===0 )
            console.log('Par');   
    } else {
        console.log('Impar');
    }
        
}


function somar(limite) {
    for (var i =0; i <= limite; i++ ) {
        if (i % 2 !== 0 )
            console.log(i + ' impar');
    }
}


function somar(limite) {
    var s = 0;
    var a = 0;
    for (var i = 1; i <= limite ; i++ ) {
        if (i % 3 === 0 ) {
          s += i;
        }  
        if (i % 5 === 0 ) {
             a += i;
         }             
    }
    d = s + a ;
    console.log(d);
}
somar(20) 
//---------------------------------------------------------------

// Calculando media de aluno com array 
// 0 - 59: f 
// 60 - 69: d
// 70 - 79: c 
// 80 - 89: d 
// 90 - 100 : A


const array = [85,85,85];

console.log(media(array));

function media(notas) {
    const media = calcular(notas);

    if (media < 59) return 'F';
    if (media < 69) return 'D';
    if (media < 79) return 'C';
    if (media < 89) return 'B';
     return 'A';

}

function calcular(array) {
    var soma = 0;
    for (var valor of array ) {
        soma += valor;       
    }
    return soma/(array.length);
}

//-------------------------------------
// criando uma funcao que exiba a quantidade de *
// que aquela linha possui 


function exibir(linhas) {
    var padrao = '';
    for ( var linha = 1; linha <= linhas; linha++) {
        padrao += '*';
        console.log(padrao);
    }
        
}
exibir(200)

function exibir(linhas) {
    for (var linha = 1; linha <= linhas; linha++) {
        var padrao = ''
        for ( var i = 0; i < linha; i++) {
            padrao += '*'; 
        }
        console.log(padrao);
    }
}

exibir(10);

// criar funcao para monstrar os numeros primos 

//primos
//compostos
//ex: 10. 11
// 10 (1 ou por ele mesmo)
// 10 - 1,2,4,6,10
//11 - 1,11

exibir(15)
function exibir (limite) {
    for(var numero = 2; numero <= limite; numero++){
        var ehprimo = true;

        for (var divisor = 2; divisor < numero; divisor++){
            if(numero % divisor === 0 ) {
                ehprimo = false;
                break;
            }
        }
        if (ehprimo) console.log(numero);
    }   
}


// Factory functions ( funcoes de fabrica)
// crinado um objeto de forma dinamica passando somente valores 

const celular = {
    marcaCelular : 'ASUS',
    TamanhoTela : {
        vertival : 155,
        orizontal : 75
    },
    capacidadedeBateria: 5000,
    ligar : function() {
        console.log('Fazendo ligacao...');
    }
}

// essa foram esta chumbado o o objeto 
function criarCelular() {
    const celular = {
        marcaCelular : 'ASUS',
        TamanhoTela : {
            vertival : 155,
            orizontal : 75
        },
        capacidadedeBateria: 5000,
        ligar : function() {
            console.log('Fazendo ligacao...');
        }
    }
}

// forma que deixa mais dinamico a crianca dos objetos 
// da para ser usado para um painel de criancao para um site de vendas adicionar seus produtos 



// essa foram esta dinamica 
function criarCelular(marcaCelular,TamanhoTela,capacidadedeBateria) {
    return {
        marcaCelular, 
        TamanhoTela,
        capacidadedeBateria,
        ligar() {
            console.log('Fazendo ligacao...');
        }
    }
}

var celular1 = criarCelular('Zenfone', 5.5,5000);
console.log(celular1);





// Pascal Case - UmDoisTresQuatro sempre com a primeira letra maiuscula 
function Celular(marcaCelular,tamanhoTela,capacidadedeBateria) {
    this.marcacelular = marcaCelular,
    this.tamanhotela = tamanhoTela,
    this.capacidadedeBateria = capacidadedeBateria,
    this.ligar = function() {
        console.log('Fazendo ligacao....');
    }
}
const celular = new Celular('asus',5.5,5000);
console.log(celular);


//A DIFERENCA ENTRE OS DOIS É QUE UM CRIA O OBJETO DENTROD A FUNCAO E O SEUNGO CRIA O OBJETO NA HORA 




// Natureza Dinamica do objetos 

// Clonando objetos e aditadno das formas que deseja 
const celular = {
    marcaCelular : 'ASUS',
    TamanhoTela : {
        vertival : 155,
        orizontal : 75
    },
    capacidadedeBateria: 5000,
    ligar : function() {
        console.log('Fazendo ligacao...');
    }
}


const objeto2 = {...celular};
console.log(objeto2);



// Funcoes Math funcoes que trablah com matematicas 

// String metodos 
// Tipos primotos aquelas que const = uma mensage 
// tipo objeto 
// const outroMensagem = new String('Bom dia');



const mensagem = new String('Bom dia')

console.log(mensagem);


// TGemplate Literal



// Template literal

const email = 
`Ola fulado 

obrigado por se inscrever no canal 
para acompanhar os videos nao se esqueca de ativar o sino.

obrigado 
Del.`;



// Date 

const data1 = new Date();

const data2 = new Date();
data2.setFullYear(2030);




// Javascript - Objeto
// Criar um objeto endereco que contem:
// Rua
// Cidade 
// cep 
// exibirEndereco(endereco)


function criarCelular(marcaCelular,TamanhoTela,capacidadedeBateria) {
    return {
        marcaCelular, 
        TamanhoTela,
        capacidadedeBateria,
        ligar() {
            console.log('Fazendo ligacao...');
        }
    }
}

var celular1 = criarCelular('Zenfone', 5.5,5000);
console.log(celular1);


function criarEnderco(Rua,Cep,Cidade) {
    return {
        Rua,
        Cep,
        Cidade,
    }
};

var exibirEndereco = criarEnderco('Gonzales', 'Campinas', 13026075);
console.log(exibirEndereco);



// Igualdade de objetos 

function endereco(rua,cidade,cep) {
    this.rua = rua,
    this.cidade = cidade,
    this.cep = cep
}

const endereco1 = new endereco('a', 'b', 'c');
const endereco2 = new endereco('a', 'b', 'c');


function igualdade(endereco1,endereco2) {
    return endereco1.rua === endereco2.rua &&
           endereco1.cidade === endereco2.cidade &&
           endereco1.cep === endereco2.cep
};


console.log(igualdade(endereco1,endereco2));

// comparar se o endereco de memorial é igual 

function temEnderecoMemoriaIguais(endereco1, endereco2) {
    return endereco1 === endereco2;
}

console.log(temEnderecoMemoriaIguais(endereco1, endereco2));

// se eu armazenar uma variavel dentro de outra varaivael e comparalas 
// x = 1 
// a = 1 
// b = a 
// e comparar B tem o mesmo de endereco de memoria que A o resultado seria True


// criando um objeto de postagem 



var postagem = {
    titulo: 'ARmando',
    mensagem: 'Ola',
    autor: 'Marcos Silva',
    visualizacoes: '10',
    comentarios : [
        {autor: 'a',mensagem: 'b' },
        {autor: 'a', mensagem: 'b'}
    ],
    estaAoVivo: true

}


console.log(postagem);





// Constructor Function  POSTAGEM DINAMICA 

function Postagem(titulo,mensagem,autor) {
    this.titulo = titulo,
    this.mensagem = mensagem,
    this.autor = autor,
    this.visualizacoes = 0
    this.comenatios = [],
    this.estaAoVivo = false
}

var postagem = new Postagem('a', 'b', 'c');
console.log(postagem);




// Faixa de preco 
// é que voce crie um array de objetos de faixa d preco para que ela possa ser usado em um site 
// igual mercado livre 


// Primeira opcao

var faixas = [
    {tooltip: 'ate R$700', minimo: 0, maximo: 700},
    {tooltip: 'ate R$800', minimo: 0, maximo: 800},
    {tooltip: 'ate R$900', minimo: 0, maximo: 900}
];




// Segunda opcao Factory Function 

function criarFaixaPreco(tooltip, minimo, maximo) {
    return{
        tooltip,
        minimo,
        maximo
    }
}

var faixa2 = [
    criarFaixaPreco('a', 1, 100 ),
    criarFaixaPreco('b', 1, 200 ),
    criarFaixaPreco('c', 1, 300 ),
]

console.log(faixas);
console.log(faixa2);


// Introducao a arrays

// add novos elementos 
// encontrar Elementos
// remover elemtneos 
// dividir elementos 
// dividir arrays 
// combinar arrys 
 
// ADICIONAR ELEMTNOS ARRAYS

const numeros = [1, 2, 3];

// Inicio 
numeros.unshift(0);
console.log(numeros);

//meio 
numeros.splice(1,0,'a');
console.log(numeros);


//final

numeros.push(5);
console.log(numeros);







// Encontrando elementos (primitivos)

const numeros = [1, 2, 3, 4]

console.log(numeros.indexOf(2));

console.log(numeros.lastIndexOf(2));

console.log(numeros.includes(2));






// Encontrando elementos (tipos de referencias )

const marca = [
    {id:1 , nome: 'a'},
    {id:2 , nome: 'c'},
    {id:3 , nome: 'b'}
]

const marcas = marca.find(function(marca) {
    return marca.nome === 'a';
});

console.log(marca);

 


// ARROW FUNCTIONS 

const marca = [
    {id:1 , nome: 'a'},
    {id:2 , nome: 'c'},
    {id:3 , nome: 'b'}
]

const marcas = marca.find((marca) => {
    return marca.nome === 'a';
});

console.log(marca);
   

// COMO REMOVER ELEMNTOS ARRAYS

const numeros = [1, 2, 3, 4, 5, 6];
numeros.push();
numeros.unshift();
numeros.splice();


// final 
const ultimo = numeros.pop();
console.log(ultimo);
console.log(numeros);

// inicio 


const primeiro = numeros.shift();
console.log(primeiro);
console.log(numeros);


// no meio 

const meio = numeros.splice(2, 1);
console.log(primeiro);
console.log(numeros);


// como esvaziar uma array

const numeros = [1, 2, 3, 4, 5, 6];

numeros.length = 0;
console.log(numeros);

// solucoa 3 
const numeros = [1, 2, 3, 4, 5, 6];

numeros.splice(0, numeros.length)
console.log(numeros);



// COMO COMBINAR E DIVIAR  ARRAYS

const numeros = [1, 2, 3, 4, 5, 6];

const numeros2 = [1, 2, 3, 4, 5, 6];

// combinar 

const combinado = numeros.concat(numeros2);
console.log(combinado);

// dividir a array 

const cortado = combinado.slice(1,5);
console.log(cortado);


// se estiver copiando um objeto ele ira copiar a referencia tambem 





// Copiar e clonagems de arrays operador spread 

const numeros = [1, 2, 3, 4, 5, 6];
const numeros2 = [1, 2, 3, 4, 5, 6];

//const combinado = numeros.concat(numeros2);
//const cortado = combinado.slice(1,5);


// operador spread
const combinado = [...numeros,...numeros2]
console.log(combinado);


const clonado = [...combinado];
console.log(clonado);






// Inteirar um array 

const numeros = [1, 2, 3, 4, 5, 6];

//forEach 

numeros.forEach(function(numero) => console.log(numero))





//  Combinando arrays


const numeros = [1, 2, 3, 4, 5,]

const  Combinando = numeros.join('.')
console.log(Combinando);

const frase = 'ola benbindo ao curso '

//separando palras 

const resultado = frase.split(' ');
console.log(resultado);

console.log(resultado.join('-'));

// é o tipo de URL usado nos sites em arrays esse metodo chama slug 





// RECEBENDO UM IMPUT 

var corfavorita = prompt('Qual, e sua cor preferida')
console.log(corfavorita);

if (corfavorita = 'vermelho') {
    alert('essa e minha cor tambem!')
}

 */


// # leafFlet.js  = para mapas ou mapsbox
//# char.js = trabalho com graficos 
//#  fetch


















