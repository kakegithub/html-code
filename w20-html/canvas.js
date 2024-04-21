function iniciar(){
    var elemento = document.getElementById('lienzo');
    lienzo = elemento.getContext('2d');

    lienzo.fillStyle="#990000";
    lienzo.fillRect(100,100,300,100);

    lienzo.globalCompositeOperation="destination-atop";

    lienzo.fillStyle="#AAAAFF";
    lienzo.font = "bold 80px verdana, sans-serif";
    lienzo.textAlign="center";
    lienzo.textBaseline="middle";
    lienzo.fillText("PRUEBA",250,110);

    /* Trabajando con imagenes */
    var imagen = new Image();
    imagen.src="./img/guitarra.png";
    //imagen.addEventListener("load", function(){lienzo.drawImage(imagen,20,20)},false);
    //imagen.addEventListener("load", function(){lienzo.drawImage(imagen,0,0,elemento.width,elemento.height)},false);
    imagen.addEventListener("load", function(){lienzo.drawImage(imagen,135,30,50,50,0,0,200,200)},false);
}

window.addEventListener("load", iniciar, false);