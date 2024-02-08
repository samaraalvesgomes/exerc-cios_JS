const tit = document.createElement("h1");
tit.innerText = "Meatz Burger´n Beer"
tit.id = "titulo"

const titulo = document.querySelector("body");
titulo.appendChild(tit)


const produto = document.createElement("div");
produto.innerHTML = `
    

    <h3>COMBO CLASSIC DUPLO | BURGER+BATATA+BEBIDA </h3>

    <img src="hamburguer.avif" alt="combo classic duplo" width="300px">

    <p> Classic duplo (340g) + batata individual + bebida </p>
    <p> Classic Duplo: Pão brioche, 2 x Burger de 170g, Queijo Prato, molho especial.</p>
    <p> *Burger Ao Ponto </p>

    <h4> R$52,00 </h4>
`

const produto_venda = document.querySelector("body");
titulo.appendChild(produto)










