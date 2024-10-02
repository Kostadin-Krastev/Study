'use strict';
// Calculate the temperature Amplitude using two arrays
const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];
const temperatures2 = [0, -5, -3, -14, 'error', 6, 26];
const allTemperatures = temperatures.concat(temperatures2);

const calculateAmplitude = function (temperatures, temperatures2) {
  // Combining the two arrays temperature and temperature2
  const allTemperatures = temperatures.concat(temperatures2);

  // variables that contains the max and min temperature
  let maxTemperature = allTemperatures[0];
  let minTemperature = allTemperatures[0];

  // Looping over the array temperatures
  for (let t = 0; t < allTemperatures.length; t++) {
    // variable that contain current temperature
    let currentTemperature = allTemperatures[t];

    // Continuing the Loop when the value is not a number
    if (typeof currentTemperature !== 'number') continue;

    // updating max and min temperature base on the current temperature
    if (currentTemperature > maxTemperature) {
      maxTemperature = currentTemperature;
    } else if (currentTemperature < minTemperature) {
      minTemperature = currentTemperature;
    }
  }
  // Calculate temperature Amplitude
  const tempAmplitude = maxTemperature - minTemperature;
  return `Max temperature is ${maxTemperature}, min temperature is ${minTemperature}, and the temperature Amplitude is ${tempAmplitude}`;
};
// Storing the Amplitude calculation into a variable
const amplitude = calculateAmplitude(temperatures, temperatures2);

console.log(amplitude);
