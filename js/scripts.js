// Returns a random number between min (inclusive) and max (exclusive)
function diceRoll() {
  return Math.floor(Math.random() * (6 - 1)) + 1;
}

var result = diceRoll(1,6);
  alert(result);
//
//
// $(document).ready(function() {
//   $("button#Rollpl1").submit(function(event) {
//     event.preventDefault();
//     alert("hi");
//
//     var result = diceRoll(1,6);
//     alert(result);
//   });
//
//
// });
