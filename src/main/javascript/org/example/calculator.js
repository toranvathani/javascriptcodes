let input = "";
const resultInput = document.getElementById("result");

function appendNumber(number) {
  input += number;
  resultInput.value = input;
}

function appendOperator(operator) {
  input += operator;
  resultInput.value = input;
}

function calculate() {
  try {
    input = eval(input).toString();
    resultInput.value = input;
  } catch (error) {
    resultInput.value = "Error";
  }
}

function clearInput() {
  input = "";
  resultInput.value = "";
}
