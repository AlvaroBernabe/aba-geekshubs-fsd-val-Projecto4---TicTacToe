

// let ficha1 = 3;
// let ficha2 = 3;
// let turno = true;

// let tablero = Array.from(document.getElementsByClassName("cellDesign"));
// let tableroLogico = ["","","","","","","","",""];

// const jugador1nombre = document.getElementById("player1name");
// const jugador2nombre = document.getElementById("player2name");


// SESSIONSTORAGE

// jugador1nombre.innerHTML = sessionStorage.getItem("player1name");
// jugador2nombre.innerHTML = sessionStorage.getItem("player2name");

// document.getElementById('text-screen').innerHTML = `Es el turno de ${jugador1.nombre}`



// windows.open("../pages/tablero.html","_selft");



// JUGADORES

// class Player {
//     constructor(nombre,mark,oppositeMark) {
//         this.nombre = nombre.innerHTML,
//         this.mark = mark,
//         this.oppositeMark = oppositeMark
//     };
// };

// let player1 = new Player(jugador1nombre, 'X','O');
// let player2 = new Player(jugador2nombre, 'X','O');



let nameP1Placeholder = document.querySelector(".player1-name-placeholder");
let nameP2Placeholder = document.querySelector(".player2-name-placeholder");


let player1 = sessionStorage.getItem('player1-name');
let player2 = sessionStorage.getItem('player2-name');
