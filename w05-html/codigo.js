/*function mostraralerta(){
    alert('Chanchito Feliz');
}
function hacerclick(){
    document.getElementsByTagName('p') [0].onclick=mostraralerta;
}
window.onload=hacerclick;*/

/* querySelector retorna el primer elemento que concuerda con el grupo de selectores especificados
entre parentesis*/
/*function mostraralerta(){
    alert('Chanchito Triste');
}
function hacerclick(){
    document.querySelector("#principal p:first-child").onclick=mostraralerta;
}
window.onload=hacerclick;*/

/* querySelectorAll retorna todos los elementos que concuerdan con el grupo de selectores especificados
entre parentesis*/


/*function hacerclick(){
    var lista=document.querySelectorAll("#principal p");
    lista[0].onclick=mostraralerta;
}
function mostraralerta(){
    alert('Chanchito loco');
}
window.onload=hacerclick;*/

/*function hacerclick(){
    var lista=document.querySelectorAll("#principal p");
    for(var f=0; f<lista.length;f++){
        lista[f].onclick=mostraralerta;
    }
}
function mostraralerta(){
    alert('Chanchito loco');
}
window.onload=hacerclick;*/

/* Otra forma de hacerlo */
function hacerclick(){
    var lista=document.getElementById('principal').querySelectorAll("p");
    lista[0].onclick=mostraralerta;
}
function mostraralerta(){
    alert('Chanchito loco');
}
window.onload=hacerclick;