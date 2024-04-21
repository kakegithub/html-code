function iniciar(){
    var elemento = document.getElementById('lienzo');
    lienzo = elemento.getContext('2d');

    lienzo.save(); // Graba el estado del lienzo

    /* Escribiendo algo de texto */
    lienzo.font = "bold 24px verdana, sans-serif";
    lienzo.fillText("PRUEBA", 50, 20);

    lienzo.restore(); // recupera el ultimo estado grabado

    /* Transformaciones */
    lienzo.translate(50,70);
    lienzo.rotate(Math.PI/180*45);
    lienzo.fillText("PRUEBA", 0, 0);

    lienzo.rotate(-Math.PI/180*45);
    lienzo.fillText("PRUEBA", 0, 100);
    lienzo.scale(2,2);
    lienzo.fillText("PRUEBA", 0, 0);

    lienzo.transform(3,0,0,1,0,0);
    lienzo.font = "bold 20px verdana, sans-serif";
    lienzo.fillText("PRUEBA", 20, 20);

    lienzo.transform(3,0,0,10,0,0);
    lienzo.font = "bold 20px verdana, sans-serif";
    lienzo.fillText("PRUEBA", 100, 20);

}
window.addEventListener("load",iniciar,false);