
/* Iniciamos la api */
function iniciar(){
    var elemento = document.getElementById('lienzo');
    lienzo = elemento.getContext('2d');

    lienzo.fillStyle="#000099"; //Declara el color para el interior de la figura
    lienzo.strokeStyle="#990000"; //Declara el color para el contorno de la figura

    var gradiente = lienzo.createLinearGradient(0,0,10,100);
    gradiente.addColorStop(0.5, '#0000FF');
    gradiente.addColorStop(1, '#000000');
    lienzo.fillStyle=gradiente;

    lienzo.fillRect(10,10,100,100);
    lienzo.fillRect(150,10,200,100);

    var gradiente2 = lienzo.createRadialGradient(0,0,30,0,0,300);
    gradiente2.addColorStop(1, '#DDDDDD');
    lienzo.fillStyle=gradiente2;

    lienzo.fillRect(30,30,30,30);

    lienzo.strokeRect(100,100,120,120); // Rectangulo vacio
    lienzo.fillRect(110,110,100,100); // Rectangulo solido
    lienzo.clearRect(120,120,80,80); // Metodo para sustraer pixeles del area especificada
}
window.addEventListener("load", iniciar, false);