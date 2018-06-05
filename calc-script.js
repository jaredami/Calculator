$(document).ready(function() {
  var currentCalc = ""; // stores the calculation being made

  // when number buttons are clicked...
  $(".numberButton").click(function() {
    if ($("#outputScreen").html() == 0) {
      // if a 0 is displayed, empty the screen before inserting new #'s
      $("#outputScreen").empty();
    }
    if ($("#outputScreen").text().length <= 11) {
      $("#outputScreen").append($("#" + this.id).html()); // add the number pressed to the output screen
    }
  });

  // when the clear buttons are clicked...
  $("#acButton").click(function() {
    // for the AC button...
    $("#outputScreen").html("0"); // clear the output screen
    currentCalc = ""; // clear the calculation
  });
  $("#ceButton").click(function() {
    // for the CE button...
    $("#outputScreen").html("0"); // clear the output screen, but not the calculation
  });

  // when the operation buttons are cliked...
  $(".operationButton").click(function() {
    currentCalc = currentCalc.concat($("#outputScreen").text()); // add number on screen to calculation
    currentCalc = currentCalc.concat($("#" + this.id).text()); // add operation clicked to calculation
    $("#outputScreen").empty(); // clear screen in prep for next number
  });

  // when equals button is clicked...
  $("#equalsButton").click(function() {
    currentCalc = currentCalc.concat($("#outputScreen").text()); // add number on screen to calculation
    var answer = eval(currentCalc)
      .toString()
      .slice(0, 12);
    $("#outputScreen").text(answer); // evaluate the currentCalc string and display on screen
  });
});
