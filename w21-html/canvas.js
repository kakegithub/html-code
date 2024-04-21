function iniciar(){
    var elemento = document.getElementById('lienzo');
    lienzo = elemento.getContext('2d');

    /* Trabajando con imagenes */
    var imagen = new Image();
    imagen.src="./img/guitarra.png";
    imagen.addEventListener("load", modificarimagen, false);
}

function modificarimagen(e){
    imagen = e.target;
    lienzo.drawImage(imagen,0,0);
    var info=lienzo.getImageData(0,0,175,262);

    var pos;
    for(x=0; x<=175; x++){
        for(y=0; y<=262; y++ ){
            pos = (info.width*4*y) + (x*4);
            info.data[pos] = 255-info.data[pos];
            info.data[pos+1] = 255-info.data[pos+1];
            info.data[pos+2] = 255-info.data[pos+2];
        }        

    }
    lienzo.putImageData(info,0,0);
}

window.addEventListener("load", iniciar, false);