var input1 = document.getElementById('input1')
var input2 = document.getElementById('input2')
var btn = document.getElementById('btn')
var text = document.getElementById('text')

function multiplier(input1, input2) {
  return input1 * input2;
}
function updateText() {
  var newNum = multiplier(input1.value, input2.value);
  text.innerHTML = "Result: " + newNum;
}
