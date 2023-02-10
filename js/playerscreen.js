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
                    players[jugador] = elemento.value;
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
        window.open("../pages/tablero.html","_self");
    },500);
}
