var player1 = {
    score: 0,
    totalScore:0,
    turn:true

}
var player2 = {
    score: 0,
    totalScore:0,
    turn:""

}


var turnOver = function(diceRoll) {
  if (diceRoll === 1) {
    if (player1.turn === false) {

     player2.score = 0;
     player1.turn= true;
     player2.turn= false;
         alert("player 1's turn is over! Player 2 Begin!")

   } else {
     player1.score = 0;
     player1.turn= false;
     player2.turn= true;
         alert("player2's turn is over! Player 1 Begin!")
     }
   } else  {
     if (player1.turn === true) {
         player1.score = player1.score + diceRoll;
     } else {
         player2.score = player2.score + diceRoll;
     }
   }
}





$(document).ready(function() {
  $("form#player1-board").submit(function(event) {
    event.preventDefault();
    var diceRoll = Math.floor(Math.random() * (6 - 1)) + 1;

    turnOver(diceRoll);
    alert(player1.score);
    if (player1.turn === false) {
      $("button#Rollpl1").hide();
      $("button#holdpl1").hide();
    }
  });
  $("button#holdpl1").click(function(event) {
    event.preventDefault();
    player1.totalScore = (player1.totalScore + player1.score);
    $("span#player1-score").text("Score: "+player1.totalScore);
    player1.score = 0
    $("button#Rollpl1").hide();
    $("button#holdpl1").hide();
    $("button#Rollpl2").show();
    $("button#holdpl2").show();
    if (player1.totalScore >= 100) {
      alert("a thing")

    }
  });

  $("form#player2-board").submit(function(event) {
    event.preventDefault();
    var diceRoll = Math.floor(Math.random() * (6 - 1)) + 1;

    turnOver(diceRoll);
    alert(player2.score);

  });
  $("button#holdpl2").click(function(event) {
    event.preventDefault();
    player2.totalScore = (player2.totalScore + player2.score);
    $("span#player2-score").text("Score: "+player2.totalScore);
    player2.score = 0
    $("button#Rollpl2").hide();
    $("button#holdpl2").hide();
    $("button#Rollpl1").show();
    $("button#holdpl1").show();
    if (player2.totalScore >= 100) {
      alert("a thing")

    }
  });

});
