var player = {
    score: 0,
    totalScore:0,
    turn:""

}



var turnOver = function(diceRoll) {
  if (diceRoll === 1) {

     player.score = 0;

    alert("player1's turn is over! Player 2 Begin!")

// } else if (player.score >= 100) {
//     alert("player1 wins!")

}    else  {
        player.score = player.score + diceRoll;
};
};



$(document).ready(function() {
  $("form#player1-board").submit(function(event) {
    event.preventDefault();
    var diceRoll = Math.floor(Math.random() * (6 - 1)) + 1;

    turnOver(diceRoll);
    alert(player.score);

  });
  $("button#holdpl1").click(function(event) {
    event.preventDefault();
    player.totalScore = (player.totalScore + player.score);
    $("span#player1-score").text("Score: "+player.totalScore);
    player.score = 0
    alert(player.totalScore);
    if (player.totalScore >= 100) {
      alert("a thing")

    }
  });




});
