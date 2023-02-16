let imagen_pagina = document.querySelector("#imagen");
let boton_imagen = document.querySelector("#boton");

let imagesList = ["images/cyber (2).png", "images/cyber (1).png"]
let indexImagenActual = 0;

boton_imagen.addEventListener("click", function() {
  indexImagenActual = (indexImagenActual + 1) % imagesList.length;
  imagen_pagina.src = imagesList[indexImagenActual];
});