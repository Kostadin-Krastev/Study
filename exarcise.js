function sumArr(input) {
  while (input.length > 1) {
    let condenceArr = [];

    for (let i = 0; i < input.length - 1; i++) {
      let arrValue = input[i] + input[i + 1];

      condenceArr.push(arrValue);
    }
    input = condenceArr;
  }

  console.log(input);
}

sumArr([2, 10, 3]);
