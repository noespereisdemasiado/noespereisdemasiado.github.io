

// Funcion  general, al cargar la página
window.onload= function()
{
    var vpHeight= window.innerHeight;
    var vpWidth= window.innerWidth;
    
    var vpSize=vpHeight + " x " + vpWidth;
    document.getElementById("size").innerHTML= vpSize;
    

    // Al cabiar tamaño muestra las medidas del viewport actualizadas
    function getSize(){
           
        var vpSize, vpHeight, vpWidth;
        vpHeight= window.innerHeight;
        vpWidth= window.innerWidth;
        vpSize= vpWidth + "   x   " + vpHeight;
        document.getElementById("size").innerHTML= vpSize;
    }
    
    window.addEventListener('resize' , getSize);
    
        var pHoras=document.getElementById("horas"),
            pMinutos=document.getElementById("minutos"),
            pSegundos=document.getElementById("segundos"),
            pMiliSegundos=document.getElementById("milisegundos");
          

}
