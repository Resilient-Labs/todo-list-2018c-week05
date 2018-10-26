//Reviewing this I'm realizing that I need to add notes and sudo code. I will make another commit with both

// Create an amount that the user would start off with
var coins = 50;
// var slotMain = document.getElementsByClassName('play');

// Create a total amount 
document.getElementById("coinId").innerHTML = "Total Coins = " + coins;

function play() {
  // Create parameters for random numbers
  var x = Math.floor((Math.random() * 5) + 1);
  var y = Math.floor((Math.random() * 5) + 1);
  var z = Math.floor((Math.random() * 5) + 1);
  // Create variable bid
  var bid = document.getElementById("bidId").value;
  // If the is more than 0 and less than coins then...
  if (bid > 0 && bid < coins) {
    // render the values for x, y, and z on screen
    document.getElementById("num").innerHTML = x;
    document.getElementById("num2").innerHTML = y;
    document.getElementById("num3").innerHTML = z;

    // A conditional to check to see if there are matches
    // If x is equal to y or x is equal to z or y is equal to z...
    if (x == y || x == z || y == z) {
      //then grab the value from the input with the "bidId"
      var bid = document.getElementById("bidId").value;
      // Send a message that notifies the user that they won
      document.getElementById("smMessge").innerHTML = "Alright my g";
      // Take the bid variable(dynamic value from the input), multiply the value by 2, and add it to the variable coins
      coins = coins + bid * 2;
      // Update the on screen amount for total coins
      document.getElementById("coinId").innerHTML = "Total Coins = " + coins;
      // Update the on screen amount for total coins
      document.getElementById("payout").innerHTML = "Won " + bid * 2 + " coins!!!";
    }
    else {
      // else if none are true...
      // grab the value from the input with the "bidId"
      var bid = document.getElementById("bidId").value;
      // Send a message that notifies the user that they lost
      document.getElementById("smMessge").innerHTML = "You a bum";
      // Take the bid variable(dynamic value from the input) and subtract it to the variable coins
      coins = coins - bid;
      // Update the on screen amount for total coins
      document.getElementById("coinId").innerHTML = "Total Coins = " + coins;
      // Update the on screen amount for total coins
      document.getElementById("payout").innerHTML = "lost " + bid + " coins";
    }

  }
  // Else in the situation where bid is less than 0 and more than coins available......
  else {
    // then render the following message on the screen using the paragraph with the class "smMessage"
    document.getElementById("smMessge").innerHTML = "you have to bid more then 0 or less then your max coins";
  }
}






