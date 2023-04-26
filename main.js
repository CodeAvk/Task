const input = document.getElementById("number-input");
const errorMessage = document.getElementById("error-message");
const resultMessage = document.getElementById("result-message");

input.addEventListener("input", () => {
  const value = Number(input.value);

  if (value < 0) {
    errorMessage.textContent = "Enter a positive value";
    resultMessage.textContent = "";
  } else if (value % 2 === 0) {
    errorMessage.textContent = "";
    resultMessage.textContent = `Next 3 even numbers: ${value + 2}, ${
      value + 4
    }, ${value + 6}`;
  } else {
    errorMessage.textContent = "";
    resultMessage.textContent = `Next 3 odd numbers: ${value + 2}, ${
      value + 4
    }, ${value + 6}`;
  }
});
