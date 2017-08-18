//Business Logic
function numberReturn(number) {
  numberArr = []
  for (i=1; i <= number; i++) {
    numberArr.push(i);
  }
  console.log(numberArr);
  return numberArr
}

//UI Logic
$(document).ready(function() {
  $("form#submitNumber").submit(function(event) {
    event.preventDefault();
    var input = $("input#number").val();

    $("#output").text(numberReturn(input));
  });
});
