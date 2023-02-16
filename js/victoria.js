    //Traigo al ganador de la partida
let jugadores = sessionStorage.getItem("winner")

    //Lo envio al Id "ganador" y lo muestro en pantalla
document.getElementById("ganador").innerHTML = (JSON.stringify(jugadores))

    //Limpiar el seasonStorage para volver a empezar
sessionStorage.clear();