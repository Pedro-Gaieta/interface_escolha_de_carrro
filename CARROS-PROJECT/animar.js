let prevbum = document.getElementById("prev");
let nextbum = document.getElementById("next");
let conteiner = document.querySelector(".conteiner");
let items = conteiner.querySelectorAll(".list .item");
let contando = document.querySelector(".discrictio");
let datos = contando.querySelectorAll("ul li.activar");

let active = 0;
let fistposition = 0;
let leftposition = items.length - 1;


nextbum.onclick = () =>{
 let itenremov = conteiner.querySelector(".list .item.activar");
 itenremov.classList.remove("activar");

 active = active + 1 > leftposition ? 0 : active + 1;
 items[active].classList.add("activar");

 let datosremov = datos.querySelector("ul li.activar");
 datosremov.classList.remove("activar");
 datos[active].classList.add("activar");
}
prevbum.onclick = () =>{
 let itenremov = conteiner.querySelector(".list .item.activar");
 itenremov.classList.remove("activar");
  
 active = active - 1 < fistposition ? leftposition: active - 1;
 items[active].classList.add("activar");
}