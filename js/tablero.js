
//sessionStorage
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
let jugador1 = "X"

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
                ganar();
                turno = !turno;
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

const result = [];

// let miTablero = ["","","","","","","","",""];
// let victoria = [
//     [0, 1, 2],
//     [3, 4, 5],
//     [6, 7, 8],
//     [0, 3, 6],
//     [1, 4, 7],
//     [2, 5, 8],
//     [0, 4, 8],
//     [2, 4, 6],
// ];

let ganar = (debate) => {
    for (let i = 0; i < victoria.length; i++) {
        let win = victoria[i]
        let win1 = tablero[win[0]].innerHTML
        let win2 = tablero[win[1]].innerHTML
        let win3 = tablero[win[2]].innerHTML
        if (win1 === "" || win2 === "" || win3 === "") {
            continue;
        }
        if (win1 === win2 && win2 === win3) {
            result.push(win1).innerHTML

            // result.push("turno")
            console.log(result)
            return (debate, storageWinner())
        }
    }
};

let storageWinner = () => {
    // console.log(jugador1)
    console.log("el resultado de result es " , result[0])
    if (result[0] === "X") {
        // sessionStorage.setItem('winner', JSON.stringify(player1.name));
        sessionStorage.setItem('winner', sessionStorage.getItem("name1")); 
        console.log("ha ganado el usuario1")
    } else {
        sessionStorage.setItem('winner', sessionStorage.getItem("name2"));
        console.log("ha ganado el usuario2")
    }
    window.location = "../pages/victoria.html"
    // console.log(`ha ganado el jugador ${'winner'}`)
};