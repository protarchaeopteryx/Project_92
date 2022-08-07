var p_1 = "";
var p_2 = "";
function Log_in() {
    p_1 = document.getElementById("player1_name").value;
    p_2 = document.getElementById("player2_name").value;
    localStorage.setItem("p1" , p_1);
    localStorage.setItem("p2" , p_2);
    window.location = "game_page.html";
}