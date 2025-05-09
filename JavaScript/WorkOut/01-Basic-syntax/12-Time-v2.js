/*
Write a program that reads minutes (integer) and converts them into hours and minutes.
Print the result in the format of HH: MM
 */

const clock = function (integer) {
  const calculateHours = Math.floor(integer / 60);
  const hours = calculateHours.toString().padStart(2, '0');
  const calculateMinutes = integer % 60;
  const minutes = calculateMinutes.toString().padStart(2, '0');

  console.log(`${hours}:${minutes}`);
};

clock(325);
