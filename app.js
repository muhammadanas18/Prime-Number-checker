document.addEventListener("DOMContentLoaded", function () {
  let numberInput = document.getElementById("numberInput");
  let checkButton = document.getElementById("checkButton");
  let resultMessage = document.getElementById("resultMessage");

  checkButton.addEventListener("click", () => {
    const number = parseInt(numberInput.value);

    if (isNaN(number)) {
      resultMessage.textContent = "Please enter a valid number";
      resultMessage.style.color = "red";
      return;
    }
    if (isPrime(number)) {
      resultMessage.textContent = `${number} is a prime number.`;
      resultMessage.style.color = "green";
    } else {
      resultMessage.textContent = `${number} is not a prime number.`;
      resultMessage.style.color = "red";
    }
  });

  function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;

    for (let i = 5; i * i <= num; i += 6) {
      if (num % i === 0 || num % (i + 2) === 0) return false;
    }

    return true;
  }
});
