
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


let ganar = (ganador) => {
    for (let i = 0; i < victoria.length; i++) {
        let win = victoria[i]
        let win1 = tablero[win[0]].textContent
        let win2 = tablero[win[1]].textContent
        let win3 = tablero[win[2]].textContent
        if (win1 === "" || win2 === "" || win3 === "") {
            continue;
        }
        if (win1 === win2 && win2 === win3) {
            return result.push(ganador), storageWinner()
        }
    }
};




const storageWinner = () => {
    if (result[0] === true) {
        sessionStorage.setItem('winner', JSON.stringify(player1.name));
    } else {
        sessionStorage.setItem('winner', JSON.stringify(player2.name));
    }
    window.location = "../pages/victoria.html"
};