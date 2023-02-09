// const botonJugar = document.getElementById("botonJugar").addEventListener("click");



// function storagePlayers () {
//     const player1InputName = document.getElementById("player1name");
//     let player1Name = player1InputName.ariaValueMax;
//     sessionStorage.setItem("player1name",player1Name);


//     const player2InputName = document.getElementById("player2name");
//     let player2Name = player2InputName.ariaValueMax;
//     sessionStorage.setItem("player2name",player2Name);


// if (player1Name == "" || player2Name == "") {
//     alert("Tienes que introducir ambos nombre para poder comenzar");
// } else {
//     windows.location.href = "../pages/tablero.html"
// }
// }

// windows.open("../pages/tablero.html","_selft");

let player1Input = document.querySelector("player1name");
let player2Input = document.querySelector("player2name");

let startBtn = document.getElementById("botonJugar");

startBtn.addEventListener("click", storagePlayersNames);

const storagePlayersNames = () => {
    let player1Name = player1Input.value;
    let player2Name = player2Input.value;
    sessionStorage.setItem('player1-name',player1Name);
    sessionStorage.setItem('player2-name',player2Name);
}