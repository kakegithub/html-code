function iniciar(){
    var elemento = document.getElementById('lienzo');
    lienzo = elemento.getContext('2d');

    lienzo.beginPath();
    lienzo.arc(200,150,50,0,Math.PI*2,false);
    lienzo.stroke();

    lienzo.lineWidth=10;
    lienzo.lineCap="round"
    lienzo.beginPath();
    lienzo.moveTo(230,150);
    lienzo.arc(200,150,30,0, Math.PI, false);
    lienzo.stroke();

    lienzo.lineWidth=5;
    lienzo.lineJoin="miter";
    lienzo.beginPath();
    lienzo.moveTo(195,135);
    lienzo.lineTo(215,155);
    lienzo.lineTo(195,155);
    lienzo.stroke();

    /* Escribiendo algo de texto */
    lienzo.font = "bold 24px verdana, sans-serif";
    lienzo.textAlign = "start";
    lienzo.textBaseline="bottom"
    lienzo.fillText("Mi mensaje", 100, 124);

    var tamano = lienzo.measureText("Mi mensaje");
    lienzo.strokeRect(100,100,tamano.width,24);

    /* Sombras*/
    lienzo.shadowColor="rgba(0,0,0,0.5)"; // Declara el color de la sombra usando sintesis CSS
    lienzoShadowOffsetX=4; // distancia de la sombra al objeto (posicion horizontal)
    lienzoShadowOffsetY=4; // distancia de la sombra al objeto (posicion vertical)
    lienzoShadowBlur=4; // Efecto de difuminado en la sombra

    lienzo.font = "bold 24px verdana, sans-serif";
    lienzo.fillText("Mi mensaje 2", 300, 124);
}
window.addEventListener("load",iniciar,false);