var input = document.getElementById('input')
var btn = document.getElementById('btn')
var text = document.getElementById('text')

function multiplier(input) {
  return input * 5;
}
function updateText() {
  var newNum = multiplier(input.value);
  text.innerHTML = "Result: " + newNum;
}
