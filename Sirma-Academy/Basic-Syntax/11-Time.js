/*
Write a function that takes minutes (integer) and converts them into hours and minutes.
Print the result in the format H:M.
 */

function time(minutes) {
  const calcHours = Math.floor(minutes / 60);
  const calcMinutes = minutes % 60;

  console.log(`${calcHours}:${calcMinutes}`);
}

time(325);
