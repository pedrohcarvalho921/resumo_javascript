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

// Operadores lógicos com strings:

let corCliente = 'Prata'
let corEstoque = 'Branco'

// No caso do And, se escolherá a segunda opção.
// No caso do Or, se escolherá aquele que estiver disponível. Assim, é possível simplificar e criar algumas operações lógicas com base, por exemplo, na disponibilidade de um produto.

console.log(corCliente && corEstoque )
console.log(corCliente || corEstoque )

let corCliente2 = undefined
let corEstoque2 = 'Branco'

console.log(corCliente2 && corEstoque2 ) // Undefined
console.log(corCliente2 || corEstoque2 ) // Priorizou aquele que existe.

// Precedência dos operadores matemáticos => se prioriza sempre a multiplicação, divisão a soma e subtração, como na matemática. Entao, sempre devemos usar parênteses para priorizar a situação oposta.

// Declarações condicionais - IF, ELSE IF e ELSE. Seriam equivalentes ao IF, ELIF e ELSE no Python.

// Podemos usar quantos "else if" necessários, mas apenas um if e um else.

let precoAluguel = 1000
let rendaAluguel = 700

if (rendaAluguel > precoAluguel){
    console.log('Tá vivo.')
}
else if (rendaAluguel == precoAluguel){
    console.log('Tá no zero a zero.')
}
else
    console.log('Faliu')

// A situação acima ainda pode ter uma complexidade maior, caso inserirmos AND e/ou OR nas clausulas IF, ELSEIF e ELSE.


// Switch case - É usado para verificar uma determinada situação.

// EXEMPLO:

// IMPORTANTE: Ao se utilizar o Switch case, devemos SEMPRE UTILIZAR O BREAK, caso contrário, ele irá printar todas as situações ABAIXO da que ele encontrou.

//idMercadoLivre = 'MCO'
//switch (idMercadoLivre){
    //case 'MLB':
        //console.log('Estamos no ML do Brasil.')
    //case 'MLA':
        //console.log('Estamos no ML da Argentina.')
    //case 'MCO':
        //console.log('Estamos no ML da Colombia.')
    //case 'MLM':
        //console.log('Estamos no ML do México.')
//}

//console.log('Abaixo, switch case corrigido.')

idMercadoLivre = 'MLB'

switch (idMercadoLivre){
    case 'MLB':
        console.log('Estamos no ML do Brasil.')
        break
    case 'MLA':
        console.log('Estamos no ML da Argentina.')
        break
    case 'MCO':
        console.log('Estamos no ML da Colombia.')
        break
    case 'MLM':
        console.log('Estamos no ML do México.')
        break
}

// Loops no Javascript!

// São usados até uma situação específica ser atendida e então finalizada, evitando ter que se escrever linhas e linhas de código e reduzindo potenciais erros.

// contando de 1 até 10.
for (i = 1; i<=10;i++){
    console.log('Número',i)
}

// While loop: É uma forma diferente de fazer a mesma coisa do for, com uma sintaxe um pouco diferente

contadorWhile = 0

while (contadorWhile <=10){
    console.log('Número While:',contadorWhile)
    contadorWhile++ // se não houver incremento, o loop será infinito. CUIDADO!
}


// Do While: É uma outra forma de fazer a mesma coisa.

contadorDoWhile = 1
do {
    console.log('Número Do While',contadorDoWhile)
    contadorDoWhile++
} while (contadorDoWhile<=10)

// For in loop: É usado dentro de objetos

const carroExemplo = {
    marca: 'Hyundai',
    modelo: 'Creta',
    ano: 2024,
    motor: '1.6'
}

for (let i in carroExemplo){
    console.log(i, carroExemplo[i]) // printando as características do objeto e os seus valores, respectivamente
}

//For of loop: É um for modificado para ser usado dentro de arrays

const usuariosForOf = ['Pedro', 'Henrique','José','Marcos','Victor']

for (let i in usuariosForOf){
    console.log(i,usuariosForOf[i])  // Aqui os valores são iguais  ao for in loop.
}

// Uma outra forma de escrever o código seria:

for (let i of usuariosForOf){
    console.log(i)  // O resultado vai ser o mesmo, sendo apenas uma forma de se escrever.
}

// break em for - Caso queiramos parar a contagem no meio do processo.

contadorWhileComBreak =0

while (contadorWhileComBreak <=10){
    if (contadorWhileComBreak ===8) break // aqui paramos no 8
    console.log('Número While com Break:',contadorWhileComBreak)
    contadorWhileComBreak++
}

// PROGRAMAÇÃO ORIENTADA AO OBJETO:

// Um objeto é um formado por elementos de uma classe com características / propriedades. Importante: Uma característica também pode ter suas próprias características, como no caso de "Modelo".

const computador = {
    fabricante: 'Dell',
    modelo: {
        nome: 'Inspiron',
        ano: 2019
    },
    memoria: '8 GB',
    SSD: 'Não'
}

// Para acessar as características:

console.log(computador) // para acessar o objeto, suas properties e seus valores
console.log(computador.fabricante) // para acessar os valores de uma property específica



// Além disso, podemos inserir dentro de funções métodos para interagir dentro de um objeto de uma classe:

const computador2 = {
    fabricante: 'Dell',
    modelo: {
        nome: 'Inspiron',
        ano: 2019
    },
    memoria: '8 GB',
    SSD: 'Não',
    printarValoresComputador: function (){
        console.log('Printando properties:')
        console.log(computador2)
    }
}


// Para acessar uma função dentro de um objeto de uma classe, devemos fazer conforme abaixo o acesso:

computador2.printarValoresComputador()


// Criando objetos:

// Factory - É uma das formas de fazer o processo de criação de um objeto de uma classe, com suas respectivas propriedades: 

function criarComputador(nomeFabricante,nomeModelo,anoModelo,memoriaModelo,armazenamentoModelo){
    const computador = {    
        fabricante: nomeFabricante,
        modelo: nomeModelo,
        ano: anoModelo,
        memoria: memoriaModelo,
        SSD: armazenamentoModelo
    }
    return computador
}

// Para printarmos os valores criados a partir da Factory, devemos fazer o seguinte:

let computadorUsuario1 = criarComputador('LeNovo','Think Pad',2020,'16GB','Sim')
let computadorUsuario2 = criarComputador('LeNovo','Think Pad',2021,'32GB','Não')
console.log(computadorUsuario1)
console.log(computadorUsuario2)

// Vamos dizer que nós quisessemos adicionar uma propriedade apenas ao objeto computadorUsuario1
// Para isso, basta colocar o nome da property (que não precisa estar dentro do modelo) e passar o valor correspondente:

computadorUsuario1.cor = 'Prateado'
console.log(computadorUsuario1) // A cor foi inserida ao modelo.

// Constructor - É uma outra forma de criar um objeto 

function CriarComputadorConstructor(nomeFabricante,nomeModelo,anoModelo,memoriaModelo,armazenamentoModelo){   
        this.fabricante= nomeFabricante,
        this.modelo= nomeModelo,
        this.ano= anoModelo,
        this.memoria= memoriaModelo,
        this.SSD= armazenamentoModelo
}

const computadorUsuario3 = new CriarComputadorConstructor ('Apple', 'Macbook',2016,'16B','Não')
console.log(computadorUsuario3)


// Objetos Build-in: São objetos já construídos pelo Javascript para facilitar o desenvolvimento de programas, em situaçoes específicas - como data, números (principalmente para cálculos mais complexos), etc
// Alguns interessantes: Math.min ; Math.max ; Math.round

const arrayTestesMatematicos = [0,1,2,3,10,25,40]
const numberTestesMatematicos = 25.52
const numberTestesMatematicos2 = 25.42

console.log(Math.max(arrayTestesMatematicos))
console.log(Math.min(arrayTestesMatematicos))
console.log(Math.round(numberTestesMatematicos))
console.log(Math.round(numberTestesMatematicos2))


// Build-in com strings:

let nomeStringBuildIn = 'Javascript é legal!'

// Existem algumas funções que podemos usar para testar condições com strings, entre elas:

console.log(nomeStringBuildIn.startsWith('Java')) // É case sensitive
console.log(nomeStringBuildIn.endsWith('!'))
console.log(nomeStringBuildIn.length)
console.log(nomeStringBuildIn.includes('script'))


// Template literals

let avisoLiterals = 'Olá amigos! Vamos aprender Javascript. Atenciosamente, Pedro'

console.log(avisoLiterals)

// Para forçarmos uma quebra de linha, podemos usar o "\n", igual no Python.

let avisoLiterals2 = 'Olá amigos!\nVamos aprender Javascript.\nAtenciosamente,\nPedro'
console.log(avisoLiterals2)

// Uma outra alternaiva é os Template literals, que significa usar crase ao invés de '', levando ao mesmo resultado que com \n.

let avisoLiterals3 = `Olá amigos!
Vamos aprender Javascript.
Atenciosamente, 
Pedro`
console.log(avisoLiterals3)

// Para usarmos variáveis com template literals, basta usar ${NOMEVARIAVEL}.



// Funções em ARRAYS: 

let numArray = [ 4, 3 , 2 , 1]
let stringArray = ['Pedro','Henrique','Marcos','Victor']

// Adicionar valores à ARRAYS: 

numArray.push(0,-1,-2) // Adicionamos os valores no final da array.
console.log(numArray)

numArray.unshift(7,5,6) // Adicionamos os valores no início da array.
console.log(numArray)

// Para adicionarmos no meio, devemos usar o método .splice, caracterizando o que o JS deve fazer.
// Definir inicio 
// Definir se algum número vai ser deletado
// Definir os valores a ser incluídos.


stringArray.splice(2,0,'João', 'Marina','Anita')
console.log(stringArray)

// A mesma lógica irá funcionar com números:

let numArray2 = [0,1,2,3,4,5,5,8,9,10]
numArray2.splice(6,1,6,7)

console.log(numArray2)

// Localizar a posição de um valor dentro de um array:

let numArray3 = [0,1,2,3,25,4,5,6,7,8]
console.log(numArray3.indexOf(25)) // retorna posição de índice 4

// índice = -1 significa que não existe dentro do array


// Localizando itens dentro uma array de referência - com várias properties

const arrayAcoes = [
    {id:1, acaoNome:'VALE3', acaoPreco: 67.5},
    {id:2, acaoNome:'PETR4', acaoPreco:36},
    {id:3, acaoNome:'EGIE3', acaoPreco:42},
    {id:4, acaoNome:'TAEE11',acaoPreco:38},
]

console.log(arrayAcoes)

// Paa encontrarmos um determinado valor, precisamos usar o metodo "find", que pede uma função dentro para encontrar um determinado valor específico.

console.log(arrayAcoes.find(function(arrayAcoes){
    return arrayAcoes.acaoNome == 'VALE3'
}))

// No caso acima, estamos retornando os valores associados ao dado 'VALE3'

// ARROW FUNCTION: É apenas uma outra forma de escrever uma função no Javascript

// Para o caso da mesma função:

console.log(arrayAcoes.find(arrayAcoes=> arrayAcoes.acaoNome == 'EGIE3'))

// Remover valores de uma array:

const arrayRemocao = [1,2,3,4,4]
const itemRemovido = arrayRemocao.pop()

console.log(arrayRemocao)
console.log(itemRemovido)

// Esvaziando uma array: Existem algumas formas de fazer isso.

let esvaziandoArray = [1,2,3,4]

//esvaziandoArray = []
//console.log(esvaziandoArray) // esvaziou!

//esvaziandoArray.length = 0 
//console.log(esvaziandoArray) // esvaziou!

//esvaziandoArray.splice(0,esvaziandoArray.length) // eliminando todos os valores dinamicamente
//console.log(esvaziandoArray) // esvaziou!

// Concatenando dois arrays

let numerosConcatenar = [0,1,2,3]
let nomesConcatenar = ['Pedro','Henrique','Marcos','Victor']

concatenamos = numerosConcatenar.concat(nomesConcatenar)
console.log(concatenamos)


// Juntando uma array:

let nomesJuntados = nomesConcatenar.join(', ')
console.log(nomesJuntados)

// Para colocar uma array em ordem alfabetica:

nomesConcatenar.sort()
console.log(nomesConcatenar)


nomesConcatenar.reverse() // ao contrário!
console.log(nomesConcatenar)

// metodo every - É usado para saber se todos os valores estão dentro de alguma condição ou nao

const arrayEvery = [1,2,-3,4]
const numeroNegativo = arrayEvery.every(function(value){
    return value >=0
})
console.log(numeroNegativo)

const arrayEvery2 = [1,2,3,4]
const numeroNegativo2 = arrayEvery2.every(function(value){
    return value >=0
})
console.log(numeroNegativo2)

// filtrando valores com uma determinada condição

const arrayEvery3 = [1,2,-3,4]
const numeroNegativo3 = arrayEvery3.filter(function(value){
    return value >=0
})
console.log(numeroNegativo3)


