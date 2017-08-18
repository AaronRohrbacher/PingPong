//Business Logic
function classReturn(number) {
  if (number === 42) {
    var customClass = "guideToGalaxy";
  } else if (number === 420) {
    customClass = "green";
  } else if (number === 1776) {
    customClass = "freedom";
  }
  return customClass;
}

function numberReturn(number, direction) {
  var numberArr = []
  for (i=1; i <= number; i++) {
    numberArr.push(i);
  }
  for (i = 0; i <= numberArr.length; i++) {
    if (numberArr[i] % 15 === 0) {
      numberArr[i] = "ping-pong";
    } else if (numberArr[i] % 5 === 0) {
      numberArr[i] = "pong";
    } else if (numberArr[i] % 3 === 0) {
      numberArr[i] = "ping";
    }
  }
  if (direction === "reverse") {
    return numberArr.reverse()
  } else {
    return numberArr
  }
  numberArr = [];
}

//UI Logic
//Toggles Christopher Walken's Words of Wisdom
$(document).ready(function() {
  $("#pingPongClick").click(function(event) {
    $(".walken").slideToggle();
    $("#more").toggle();
    $("#less").toggle();
  })
//Displays the game and right column
  $("form#submitNumber").submit(function(event) {
    event.preventDefault();
    $("#customClass").removeClass()
    $("#customClass").addClass("well "+classReturn(parseInt($("input#number").val())));
    $("#pingPongPlay").slideDown();
    $("#output").empty();
    $.each(numberReturn(parseInt($("input#number").val()), $("input:radio[name=direction]:checked").val()), function(index, arrValue) {
      $("#output").append("<li>"+arrValue+"</li>");
    });
  });
});
