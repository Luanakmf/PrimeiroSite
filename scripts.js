/* const copoRosa = document.querySelector("#copo-rosa");
const circulo = document.querySelector(".circulo");
const copao = document.querySelector(".copao")

copoRosa.addEventListener("click", (event) => {
    event.preventDefault();
    circulo.style.background = "#e99ee1"
    copao.src = 'IMG/img2CROSA.png'
})

const copoPink = document.querySelector("#copo-pink");

copoPink.addEventListener("click", (event) => {
    event.preventDefault();
    circulo.classList.add("rosa
        
    /")
    copao.src = 'IMG/img3CPPINK.png'
})

# js - inteligencia do site - faz com que a aplicacao funcione
--> variaveis - pedaco de memoria do pc para guardar o quiser 
representacao - "let" seguido do nome daquilo que vou guardar
- ex. let nome = "Luana Ferreira"
console.log () - é usado para mostrar oq esta dentro do parentesis na tela 
- usado para chamar coisas
- ex. o 'nome' q esta no let
- para conseguir ver -> inspecionar -> console

Ex. let nome = "Luana Ferreira"

console.log(nome)

function falaMeuNome (){
    console.log(nome)
}

falaMeuNome()
falaMeuNome()
min 1:58


--> funcoes - pedaco de codio que so é executado quando é chamado
- function nomedela () {} - o que esta entre parenteses me permite trocar informacoes de um lugar para o outro


--> algoritmo - receita de bolo - passo para fazer algo
--> logica de programacao - saber fazer os passos
1. descobrir quando o usuario clicou no botao - onclick
2. assim que o botao for clicado... 3
3. trocar a cor de fundo - quem é o fundo?
4. trocar a imagem principal
-pra trocar algo de alguem eu preciso saber quem é esse alguem


onclick - é algo que vai acontecer quando se clicar em determinado botao - forma de chamar a funcao

document = HTML - Quando estou no javaScript e quero chamar o HTML eu uso document

querySelector - selecionar o que eu quero - pegar algo que eu quero no HTML
2h

trocar a img principal aula 4 - 1h 43m

*/

let circulo = document.querySelector(".circulo")
let imagem = document.querySelector(".copao")


function trocarCor(cor){
    circulo.style.background = cor
}

function trocaImagem(img){
    imagem.scr = img
}
