/*
Write a function that receives an integer and prints on the console, whether even or odd.
 */

const oddOrEven = function (integer) {
  if (integer % 2 === 0) {
    console.log('even');
  } else console.log('odd');
};

oddOrEven(1024);
