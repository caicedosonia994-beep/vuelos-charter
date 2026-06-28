document.addEventListener("DOMContentLoaded",()=>{

const botones=document.querySelectorAll("button");

botones.forEach(boton=>{

boton.addEventListener("click",()=>{

alert("Operación realizada correctamente");

});

});

});