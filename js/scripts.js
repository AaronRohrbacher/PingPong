//Business Logic
function numberReturn(number) {
  numberArr = []
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
  return numberArr
  numberArr = [];
}

//UI Logic
$(document).ready(function() {
  $("form#submitNumber").submit(function(event) {
    event.preventDefault();
    jQuery.each(numberReturn($("input#number").val()), function(index, arrValue) {
      $("#output").append("<li>"+arrValue+"</li>");
    });
  });
  $("#pingPongClick").click(function(event) {
    $("#walken").slideToggle();
  })
});
