function printLine(inputNumber) {
  let numbers = [];
  for (let i = 1; i <= inputNumber; i++) {
    numbers.push(1); // Always push 1
  }
  console.log(numbers.join(' '));
}

function printSquare(side) {
  for (let i = 1; i <= side; i++) {
    printLine(side); // Pass 'side' to print consistent rows of 1s
  }
}

printSquare(5);
