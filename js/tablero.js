

const nombrejugador = () => {
    document.getElementById("Player1").innerHTML = sessionStorage.getItem("name1")
    document.getElementById("Player2").innerHTML = sessionStorage.getItem("name2")
}

nombrejugador ();


let tablero = Array.from(document.getElementsByClassName("cellDesign"));
let turno = true;
let fichaP1 = 3;
let fichaP2 = 3;
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

tablero.map(
    (celda) => {
        celda.addEventListener('click', ()=> {
            if((celda.innerHTML === "") && (fichaP1 > 0 || fichaP2 > 0)){
                celda.innerHTML = (turno) ? "X" : "O";
                (turno) ? fichaP1-- : fichaP2--;
                miTablero[celda.id] = (turno) ? "X" : "O";
                ganar=() =>  {
                    switch (true) {
                        case 'ganador1':
                            if ((celda[0][1] = "X") &&(celda[0][2] = "X") && (celda[0][3] = "X")) {
                                console.log ("Has ganado jugador 1")
                            }
                        case 'ganador2':
                            if ((celda[3] = "X") &&(celda[4] = "X") && (celda[5] = "X")) {
                                console.log ("Has ganado jugador 1")
                            }
                        case 'ganador3':
                            if ((celda[6] = "O") &&(celda[7] = "O") && (celda[8] = "O")) {
                                console.log ("Has ganado jugador 2")
                            }
                        default:
                            console.log("nadie gana")
                    }
                }
                turno = !turno;
                } if ((celda.innerHTML != "") && (fichaP1 === 0 && fichaP2 ===0)) {
                    if((turno) && (miTablero[celda.id ] === "X")) {
                        celda.innerHTML = ""
                        fichaP1++
                        miTablero[celda.id] = "";
                    } else if ((!turno) && (miTablero[celda.id] === "O")) {
                        celda.innerHTML = ""
                        fichaP2++
                        miTablero[celda.id] = "";  
                    }
                }
            }
        )
    }
)