let elementotitulo = document.querySelector ("#titulo");
elementotitulo.innerText = "Exercício innerText e innerHTML"
let elementoA = document.querySelector ("a");
elementoA.innerText = "link do site da Proz"

let desordenada = document.querySelector ("ul");
desordenada.innerHTML = `
 <li>Elemento 01 da lista JS</li>
 <li>Elemento 02 da lista JS</li>
 <li>Elemento 03 da lista JS</li>
`
let ordenada = document.querySelector ("#lista-ordenada");
ordenada.innerHTML = `
<li><a href="https://www.youtube.com/">link do site Youtube</a></li>
<li><a href="https://www.cifraclub.com.br/">link do site Cifras Club</a></li>
<li><a href="https://open.spotify.com/intl-pt">link do site Spotify</a></li>
`