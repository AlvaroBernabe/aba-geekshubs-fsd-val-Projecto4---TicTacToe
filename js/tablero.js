
    //Traigo los nombres por sessionStorage
document.getElementById("Player1").innerHTML = sessionStorage.getItem("name1")
document.getElementById("Player2").innerHTML = sessionStorage.getItem("name2")

    //Declaro todas las variables del juego
let turno = true;
let fichaP1 = 3;
let fichaP2 = 3;
let tablero = Array.from(document.getElementsByClassName("cellDesign"));
let miTablero = ["","","","","","","","",""];
let victoria = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

    //Esto es la parte que contiene toda la partida
tablero.map(
    (celda) => {
        celda.addEventListener('click', ()=> {
            //Cambiar de turno cuando uno pone ficha
            if((celda.innerHTML === "") && (fichaP1 > 0 || fichaP2 > 0)){
                celda.innerHTML = (turno) ?  "X" : "O";
                (turno) ? fichaP1-- : fichaP2--;
                miTablero[celda.id] = (turno) ? "X" : "O";
                ganar();
                turno = !turno;
                play();
                //Recoger la ficha y volver a ponerla cuando las 3 están ya puestas
                } if ((celda.innerHTML != "") && (fichaP1 === 0 && fichaP2 ===0)) {
                    if((turno) && (miTablero[celda.id] === "X")) {
                        celda.innerHTML = "";
                        fichaP1++ ;
                        miTablero[celda.id] = "";
                    } else if ((!turno) && (miTablero[celda.id] === "O")) {
                        celda.innerHTML = "";
                        fichaP2++ ;
                        miTablero[celda.id] = "";
                    }
                }
            }
        )
    }
)

let ganador = [];
    //Función que gana la partida al ser las 3 columnas iguales
let ganar = () => {
    for (let i = 0; i < victoria.length; i++) {
        let win = victoria[i]
        let columna1 = tablero[win[0]].innerHTML
        let columna2 = tablero[win[1]].innerHTML
        let columna3 = tablero[win[2]].innerHTML
        if (columna1 === "" || columna2 === "" || columna3 === "") {
            continue;
        }
        if (columna1 === columna2 && columna2 === columna3) {
            //Envía el valir de "X" o "O" dentro del ganador
            ganador.push(columna1).innerHTML
            return (storageWinner())
        }
    }
};
    //Función que envía el nombre del ganador a "winner"
let storageWinner = () => {
    if (ganador[0] === "X") {
        sessionStorage.setItem('winner', sessionStorage.getItem("name1")); 
    } else {
        sessionStorage.setItem('winner', sessionStorage.getItem("name2"));
    }
    window.location = "../pages/victoria.html"
};

    //Función que inicia la música al hacer click
function play() {
    var audio = document.getElementById('audio');
    if (audio.paused) {
        audio.play();
    }
}