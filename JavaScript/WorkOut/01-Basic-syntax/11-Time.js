/*
Write a function that takes minutes (integer) and converts them into hours and minutes.
Print the result in the format H:M.
 */

const clock = function (integer) {
  const calculateHours = Math.floor(integer / 60);
  const calculateMinutes = integer % 60;

  console.log(`${calculateHours}:${calculateMinutes}`);
};

clock(325);
