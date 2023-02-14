let jugadores = sessionStorage.getItem("winner")

// let muestrawin = document.getElementById("jugadores");


const nombreganador = () => {
    document.getElementById("ganador").innerHTML = (JSON.stringify(jugadores))
}

nombreganador ();
