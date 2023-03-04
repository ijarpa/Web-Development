var lista = document.querySelector("#lista");

for (var i = 1; i <= 10; i++)
{
    var li = document.createElement("li");

    //var numero = document.createTextNode("Estacionamiento " + i + " - ");
    var numero = document.createElement('p');
    numero.textContent = "Estacionamiento " + i;
    numero.classList.add("estacionamiento");

    //var estado = document.createElement("span");
    //estado.classList.add("estado");
    //estado.textContent = "No disponible";

    var fecha = document.createElement("input");
    fecha.type = "date";
    fecha.style.display = "none";

    var hora = document.createElement("input");
    hora.type = "time";
    hora.style.display = "none";

    var boton = document.createElement("button");
    boton.classList.add("boton")
    boton.classList.add("rojo");
    boton.textContent = "No disponible";
    boton.onclick = cambiarEstado;  

    li.appendChild(numero);
    //li.appendChild(estado);
    li.appendChild(boton);
    li.appendChild(fecha);
    li.appendChild(hora);


    lista.appendChild(li);
}

function cambiarEstado() {
    var li = this.parentNode;
    var boton = li.querySelector('.boton');
    //var estado = li.querySelector('.estado');
    var fecha = li.querySelector('input[type="date"]');
    var hora = li.querySelector('input[type="time"]');

    
    if (boton.classList.contains('verde')) {
      boton.classList.remove('verde');
      boton.classList.add('rojo');
      boton.textContent = 'No disponible'
      //estado.textContent = 'No disponible';
      fecha.style.display = "none";
      hora.style.display = "none";
    } else {
      boton.classList.remove('rojo');
      boton.classList.add('verde');
      boton.textContent = 'Disponible'
      //estado.textContent = 'Disponible';
      fecha.style.display = "inline-block";
      hora.style.display = "inline-block";
    }
  }
  