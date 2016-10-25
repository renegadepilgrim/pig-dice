var playerOne = {
    score: []
}

var playerTwo = {
    score: []
}

// var addEmup = function(playerOne.score, result) {
//   playone.score
// }
// Returns a random number between min (inclusive) and max (exclusive)
function diceRoll() {
  return Math.floor(Math.random() * (6 - 1)) + 1;
}

var result = diceRoll(1,6);
// alert(result);
var turnOver = function(result) {
  if (result === 1) {
    $("button#Rollpl1").hide();
    $("button#holdpl1").hide();

    alert("player1's turn is over! Player 2 Begin!")

  } else {
    playerOne.score.push(result)
  }
};


$(document).ready(function() {
  $("form#player1-board").submit(function(event) {
    event.preventDefault();
    var result = diceRoll(1,6);
    turnOver(result);
    alert(playerOne.score)
  });



});
