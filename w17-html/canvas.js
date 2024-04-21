
/* Iniciamos la api */
function iniciar(){
    var elemento = document.getElementById('lienzo');
    lienzo = elemento.getContext('2d');

    /* Inicializando el comienzo de una nueva figura */
    lienzo.beginPath();

    /* Metodos para crear el trazado */
    lienzo.moveTo(100,100); // Posiciona el lapiz a una posicion especifica
    lienzo.lineTo(200,200); // Crea una linea recta
    lienzo.lineTo(100,200);
    //lienzo.lineTo(100,100);
    //lienzo.closePath(); //Cerramos el triangulo

    /*lienzo.clip(); // Crea una mascara con la forma del trazado que sera dibujado y que no

    lienzo.beginPath();
    for(f=0; f<300; f = f + 10){
        lienzo.moveTo(0,f);
        lienzo.lineTo(500,f);
    }*/

    lienzo.arc(100,100,50,0,Math.PI*2, false); // Genera un circulo parcial o completo

    var radianes = Math.PI/180*45 // Calcula los radianes
    lienzo.arc(100,100,50,0,radianes, false); // Genera un circulo parcial o completo

    lienzo.moveTo(50,50);
    lienzo.quadraticCurveTo(100,125, 50,200);

    lienzo.moveTo(50,50);
    lienzo.bezierCurveTo(200,125, 300,125, 250,200);

    /* Aqui va el trazado  como una figura vacia*/
    lienzo.stroke();

    /* Aqui va el trazado  como una figura solida. No hace falta el metodo closePath()*/
    //lienzo.fill();
}
window.addEventListener("load", iniciar, false);