// let players = {
//     gamer1 : "",
//     gamer2 : ""
// }

// let inputs = Array.from(document.getElementsByClassName("nombrejugador"));

// inputs.map(
//     elemento => {
//         elemento.addEventListener("input", ()=>{
//             for(let jugador in players){
//                 if(elemento.name == jugador){
//                     players[jugador] = elemento.value;
//                 }
//             }
//         })
//     }
// )

const cambiaPantalla = () => {
    let jugador1 = document.getElementById("Player1").value;
    let jugador2 = document.getElementById("Player2").value;
    if (jugador1 !="" && jugador2 !="")  {
        sessionStorage.setItem("name1",jugador1);
        sessionStorage.setItem("name2",jugador2);
    }
    setTimeout(()=>{
        window.open("../pages/tablero.html","_self");
    },500);
}