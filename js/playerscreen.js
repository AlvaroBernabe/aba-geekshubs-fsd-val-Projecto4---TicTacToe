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



// let player1Input = document.querySelector("player1name");
// let player2Input = document.querySelector("player2name");

// let startBtn = document.getElementById("botonJugar");

// startBtn.addEventListener("click", storagePlayersNames);

// const storagePlayersNames = () => {
//     let player1Name = player1Input.value;
//     let player2Name = player2Input.value;
//     sessionStorage.setItem('player1-name',player1Name);
//     sessionStorage.setItem('player2-name',player2Name);
// }
// windows.open("../pages/tablero.html","_selft");

let players = {
    player1 : "",
    player2 : ""
}

let inputs = Array.from(document.getElementsByClassName("namePlayer"));


inputs.map(
    elemento => {
        elemento.addEventListener("input", ()=>{
            for(let jugador in players){
                if(elemento.name == jugador){
                    players[jugador] = elemento.ariaValueMax;
                }
            }
        })
    }
)

const cambiaPantalla = () => {
    if( (players.player1 === '') || (players.player2 === '') ) {
        return;
    }
    sessionStorage.setItem("playersInfo", JSON.stringify(players));
    setTimeout(()=>{
        window.open("../pages/tablero.html");
    },500);
}