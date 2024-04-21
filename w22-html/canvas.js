function iniciar(){
    var elemento = document.getElementById('lienzo');
    lienzo = elemento.getContext('2d');

    /* Trabajando con imagenes */
    var imagen = new Image();
    imagen.src="./img/guitarra.png";
    window.addEventListener("load", modificarimagen, false);
}

function modificarimagen(e){
    imagen = e.target;
    var patron = lienzo.createPatther(imagen, 'repeat');
    lienzo.fillStyle=patron;
    lienzo.fillRect(0,0,500,300);
}

window.addEventListener("load", iniciar, false);
