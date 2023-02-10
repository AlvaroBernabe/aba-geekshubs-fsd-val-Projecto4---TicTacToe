let player1 = document.getElementById("player1");
let player2 = document.getElementById("player2");

let datosSesion = (sessionStorage.getItem("playersInfo"));

player1.innetHTML = `${datosSesion.player1}`;
player2.innetHTML = `${datosSesion.player2}`;


let tablero = Array.from(document.getElementsByClassName("cellDesign"));
let turno = true;
let fichaP1 = 3;
let fichaP2 = 3;
let miTablero = ["","","","","","","","",""];

tablero.map(
    (celda) => {
        celda.addEventListener('click', ()=> {
            if((celda.innerHTML === "") && (fichaP1 > 0 || fichaP2 > 0)){
                celda.innerHTML = (turno) ? "X" : "O";
                (turno) ? fichaP1-- : fichaP2--;
                miTablero[celda.id] = (turno) ? "X" : "O";
                turno = !turno;
            }
        })
    }
)