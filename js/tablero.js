let player1 = document.getElementById("player1");
let player2 = document.getElementById("player2");

let datosSesion = (sessionStorage.getItem("playersInfo"));

player1.innetHTML = `${datosSesion.player1}`;
player2.innetHTML = `${datosSesion.player2}`;