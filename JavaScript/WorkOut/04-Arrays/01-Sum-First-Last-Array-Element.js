/*
Write a function that receives an array of strings and prints the sum of the first and last element in that array.
 */
function sumArrayFirstLast(inputArray) {
  const firstArrayElement = Number(inputArray[0]);
  const lastArrayElemrnt = Number(inputArray[inputArray.length - 1]);
  const calculateArrayFirstLastElements = firstArrayElement + lastArrayElemrnt;

  console.log(calculateArrayFirstLastElements);
}

sumArrayFirstLast(['10', '17', '22', '33']);
