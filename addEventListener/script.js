let button = document.querySelector("button");
let span = document.querySelector("span");
let section = document.querySelector("section");

function mostrarSpan(){
    span.style.opacity = "100"
}

  button.addEventListener("mouseover", mostrarSpan);

  function ocultarSpan(){
    span.style.opacity = "0"
  }
  
  button.addEventListener("mouseout", ocultarSpan);