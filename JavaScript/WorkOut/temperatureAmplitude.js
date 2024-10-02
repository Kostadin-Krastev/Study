'use strict';
// Calculate the temperature Amplitude
const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

const calculateAmplitude = function (temperatures) {
  // variables that contains the max and min temperature
  let maxTemperature = temperatures[0];
  let minTemperature = temperatures[0];

  // Looping over the array temperatures
  for (let t = 0; t < temperatures.length; t++) {
    // variable that contain current temperature
    let currentTemperature = temperatures[t];

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
const amplitude = calculateAmplitude(temperatures);

console.log(amplitude);
