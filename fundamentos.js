// Resumo Javascript 

// Importante baixar a extensão "Live Server" c/ ID = ritwickdey.LiveServer no VSCODE para rodar.
// Tem que realmente ir testando diretamente no console do browser, caso contrário, não vai dar para aprender e vai ficar muito teórico e abstrato.
// Se vocês forem fazer um resumo de vocês, não esqueçam de usar variáveis diferentes para cada situação a ser explicada.

// Para que possamos registrar uma ação, nós usamos o comando console.log()

//Exemplo:

console.log('Hello World!');

// para declarar variáveis, podemos usar o "var", mas atualmente se convencionou usar o "let" e "const", para variáveis mutáveis e contantes respectivamente.
// para deixar o código fácil de ser lido, usamos o camel case para declarar variáveis.
// No Javascript, o código é case sensitive, então o nome da variável PRECISA estar declarado exatamente igual.

let nomeUsuario = "Pedro";
console.log(nomeUsuario)

const valorExemplo = 100;
console.log(valorExemplo)
// É interessante usar o const para operações matemáticas, incluindo valores percentuais ou a serem usados como base para operações matemáticas.


// Ao terminar um código, o ideal é sempre inserir um ";" no final, apesar que na maior parte das vezes o código irá rodar. Como boa prática, é sempre bom colocar.

// Tipos de variáveis:

// Primitivo: String , numero, boolean (true ou false), undefined e null

//      String:  let nomeUsuario = "Pedro"
//      numero:  let valorCompra = 4
//               const percentualComissao = 30/100
//      Boolean: let botaoLigado = true
//               let botaoLigado = false
//      Undefined: São aqueles valores que não são definidos, por padrão.
//      Null: Quando o valor é tratado como vazio para que não faça nenhuma operação ou não dê erro(principalmente para o caso de variáveis do tipo "let").

console.log(typeof(nomeUsuario))  // Para testar o tipo de dado, podemos usar o método "typeof"

// Para o caso de um número decimal, será tratado como número e não float, como no Python:

float = 1.24
console.log(typeof(float)) // output: Number

// Referência: Nesse caso é importante diferenciar uma variável de um objeto. Uma variável é declarada com um terminado valor, podendo ser qualquer um dos tipos primitivos.
//             Já um objeto, está dentro da lógica de programação orientada ao objeto, com uma instância da classe sendo declarada com multiplas características.
//             Assim, podemos ter situações como a seguinte: let arrayBase = [1,2,3]   ou let pessoaCadastrada = {nome: "Pedro", idade: 31, curso: "Desenvolvimento full stack"}

let pessoaCadastrada = {nome: "Pedro", idade: 31, curso: "Desenvolvimento full stack"}
console.log(pessoaCadastrada) // Podemos acessar rapidamente as características de pessoaCadastrada dessa forma.

// Para acessarmos essas características, podemos acessá-las usando ".". Exemplo: pessoaCadastrada.nome ou pessoaCadastrada.idade

console.log(pessoaCadastrada.nome)
console.log(pessoaCadastrada.idade)
console.log(pessoaCadastrada.curso)

// Para mudarmos valores, simplesmente podemos fazer o seguinte:

pessoaCadastrada.curso = "Engenharia de Software"
console.log(pessoaCadastrada.curso)  // output: "Engenharia de Software"

// Repare que o valor atribuido a ser printado vai ser a última alteração feita no javascript e não a primeira declarativa como "Desenvolvimento full stack";


// Arrays: São um tipo de objeto de referência, declarados em lista 

let arrayBase = [1,2,3]
let listaCompras = ["Leite", "Café", "Banana"]

// Notar que a posição de cada item dos arrays acima sempre se começa a ser contado a partir do Zero (0), como no Python.
// Para acessar os valores, podemos fazer como abaixo:

console.log(arrayBase[0])
console.log(listaCompras[0])

// Para mudar um valor dentro de um array, podemos fazer como abaixo:

listaCompras[2] = "Pão Francês"
console.log(listaCompras)
console.log(listaCompras[2])

// Podemos fazer acessos a N valores dentro do array, desde que dentro do número de valores dentro do array (no caso de lista de compras, são 3 com índice até 2). Caso contrário, será retornado o valor "undefined";
console.log(listaCompras[26]) // undefined pq não se tem 27 valores dentro do array.


// Funções: É aqui que acontece a mágica do Javascript. Toda essa base anterior vai ser usada como materiais para a construção do código web em si.
//

function statusSite (){
    console.log('Site está online!')
};

// A função acima existe, mas não está sendo chamada. Para isso, se deve fazer o chamamento no Javascript como abaixo:
statusSite()

let botaoLigado = true

function luzLigada (botaoLigado) {
    console.log('A luz está acessa já que o botão está ligado. Status: '+botaoLigado)
};

luzLigada() // se a função for chamada sem os parâmetros, será retornado undefined.
luzLigada(botaoLigado)

statusAtual = 'Vendido'
totalVenda = 2000

function statusVenda (statusAtual, totalVenda) {
    console.log(`A venda foi realizada já que o status está como ${statusAtual}. `+'O total da venda é de ' + totalVenda)
};

// Para referenciar variáveis, usamos ao invés de aspas, a crase com o texto no interior `` e ${} com o nome da variável a ser referenciada dentro.

statusVenda() 
statusVenda(statusAtual, totalVenda)

// Podemos incluir as variáveis dentro da própria função como também referenciar a variáveis fora da função (vide exemplo anterior).

function statusVenda_test () {
    totalVenda_dentro_funcao = 5000
    console.log(`A venda foi realizada já que o status está como ${statusAtual}. `+'O total da venda é de ' + totalVenda_dentro_funcao)
};

statusVenda_test()

// Funções com cálculos:

precoProduto = 1000

function comissaoVendedor(){
    valorcomissaoVendedor = precoProduto * 0.1
    console.log(valorcomissaoVendedor)
}

// Return x console.log ==> no caso o return seria um retorno a requisição enquanto o console.log apenas printa na console o valor. Apesar de os dois serem similares, devemos usar o return sempre que se for utilizar para fazer uma comunicação com o HTML.

// variáveis dentro da função só serão usadas dentro do programa, enquanto que variáveis globais, por todo o código. Assim, podemos repetir variáveis dentro de funções, apesar de não ser uma boa prática. Contudo, para o caso de variáveis globais, será absorvido a última referência de mudança do mesmo.
function descontoComissao(preco){
    return preco - (preco *10/100)
}

let totalProduto = descontoComissao(1000)

descontoComissao(1000)
console.log(descontoComissao(1000))
console.log(totalProduto)

// No caso, para exibir no console, devemos fazer a chamada dentro de console.log, apesar de o valor estar sendo retornado corretamente.

// Operadores matemáticos - Como no exemplo acima, podemos usar o javascript para fazer operações matemáticas, sendo:
//             Soma: +
//        Subtração: -
//    Multiplicação: *
//          Divisão: /
// Resto da Divisão: %
//      Exponencial: **

numeroOperador1 = 10
numeroOperador2 = 2

console.log(numeroOperador1+numeroOperador2)
console.log(numeroOperador1-numeroOperador2)
console.log(numeroOperador1*numeroOperador2)
console.log(numeroOperador1/numeroOperador2)
console.log(numeroOperador1%numeroOperador2)  
console.log(numeroOperador1**numeroOperador2)

// Além disso, podemos incrementar ou retirar valores como em += no Python.

totalOperadores1e2 = numeroOperador1 +numeroOperador2
console.log(totalOperadores1e2)

console.log(++totalOperadores1e2)
console.log(totalOperadores1e2) // totalOperadores1e2 passou a valer 13
console.log(--totalOperadores1e2) 
console.log(totalOperadores1e2)
console.log(totalOperadores1e2++)
console.log(totalOperadores1e2)
console.log(totalOperadores1e2--)
console.log(totalOperadores1e2)

// Operadores de atribuição:

// = é usado para atribuir um valor a alguma variável.
// exemplo: podemos fazer o seguinte: num1 = 3 e depois num1 = num1 + 20 ou num1 += 20, o resultado em ambos os casos será 23.

num1 = 3
num1 = num1 +20
console.log(num1)

num2 = 3
num2 += 20
console.log(num2)

// Operadores de comparação: É usado para comparar variaveis de forma geral para testar se uma condição é verdadeira para depois ser inserido dentro de uma iteração (for, while, do while, etc.);
// Sem uma iteração, o Javascript retorna valores Booleanos.

valorComparacao = 10

// > maior 
// < menor
// >= maior e igual
// <= menor e igual 
// === igual

console.log(valorComparacao>20)         // false
console.log(valorComparacao>5)         // true
console.log(valorComparacao<20)       // true
console.log(valorComparacao<5)       // false
console.log(valorComparacao>=10)    // true
console.log(valorComparacao<=10)   // true
console.log(valorComparacao===10) // true

// A mesma lógica para a igualdade pode ser usada para strings

textoComparacao = 'TESTE'

console.log(textoComparacao === 'TESTe')
console.log(textoComparacao === 'TESTE')

// Outros operadores:

// !=== Diferente de (dependente do tipo de dado)  - Strict inequality
// !== Diferente de (independente do tipo de dado) - Loose inequality



// No caso o operador de igualdade === leva em consideração resultados estritamente iguais (incluindo mesmo tipo de dado).

console.log(3 === 3)   // verdadeiro
console.log(3 === '3') // Falso
console.log(3 == '3')  // verdadeiro


// Operadores Ternários: É uma alternativa de comparação. Exemplo:

let velocidadeCarro = 150
let velocidadeRodovia = velocidadeCarro <90 ? 'Velocidade Abaixo do limite':'Velocidade acima do limite'

console.log(velocidadeRodovia)


// Operadores lógicos: 

// E: And ; Se usa como &&
// OU: Or ; se usa como ||
// NÃO É: Not ; se uso como ! para negação de uma variável

// Exemplos:

let valorOperadorLogico1 = 5
let valorOperadorLogico2 = 4

console.log(valorOperadorLogico1 <= 5 && valorOperadorLogico2 <= 5) // os dois são true, então true
console.log(valorOperadorLogico1 >= 5 && valorOperadorLogico2 >= 5) // apenas um dos valores é true, portanto, a expressão é falsa.

console.log(valorOperadorLogico1 >= 5 || valorOperadorLogico2 >= 5)  // Como ambos os valores são true, a expressão é true
console.log(valorOperadorLogico1 > 5 || valorOperadorLogico2 >= 4)   // Como um dos valores é true, a expressão é true
console.log(valorOperadorLogico1 > 5 || valorOperadorLogico2 >= 4)   // Como um dos valores é true, a expressão é true
console.log(valorOperadorLogico1 < 5 || valorOperadorLogico2 > 12)   // Como ambos os valores são falsos, a expressão é falsa

let operadorNot = true
console.log (operadorNot = !operadorNot)










