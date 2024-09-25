/*
Write a program that reads minutes (integer) and converts them into hours and minutes.
Print the result in the format of HH: MM
 */

function time(minutes) {
  //   calculating hours and minutes
  const calcHours = Math.floor(minutes / 60);
  const calcMinutes = minutes % 60;

  //   formatting hours and minutes to be double digits
  const formatHours = String(calcHours).padStart(2, "0");
  const formatMinutes = String(calcMinutes).padStart(2, "0");
  console.log(`${formatHours}:${formatMinutes}`);
}

time(325);
