let lista = document.createElement ("li"); //para criar o elemento

lista.innerText = "JavaScript"  // adiciona o texto dentro do elemento criado
lista.id = "ling-js" //para adicionar um id ao elemento criado

let listaLinguagens = document.querySelector(".lista-linguagens"); //seleciona o elemento pai em que quero adicionar um elemento filho
listaLinguagens.appendChild(lista) //adiciona o elemento criado na tag pai




let elementPostagens = document.createElement ("div"); //para criar o elemento

elementPostagens.innerHTML = `
    <h2 class="post-titulo">JavaScript</h2>
        <p class="post-texto">
            JS é uma linguagem de programação
        </p>
`  // adiciona o texto dentro do elemento criado
lista.id = "post-js" //para adicionar um id ao elemento criado

const postagens = document.querySelector(".postagens"); //seleciona o elemento pai em que quero adicionar um elemento filho
postagens.appendChild(elementPostagens); //adiciona o elemento criado na tag pai
