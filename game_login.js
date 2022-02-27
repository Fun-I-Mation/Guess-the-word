function addUser(){
    player1=document.getElementById("player1_name_input").value;
    player2=document.getElementById("player2_name_input").value;

    localStorage.setItem("player 1: ", player1);
    localStorage.setItem("player 2: ", player2);

    window.location="game_page.html";
}