const displayWinnerName = document.getElementById("winner-name");
let winnerName = sessionStorage.getItem("winner");
displayWinnerName.innerHTML = winnerName;
console.log(winnerName)