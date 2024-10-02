'use strict';
// Calculate the temperature Amplitude
const temperatures = [3, -2, -6, -1, 9, 13, 17, 15, 14, 9, 5];

const calculateAmplitude = function (temperaturesInput) {
  // variables that contains the max and min temperature
  let maxTemperature = temperatures[0];
  let minTemperature = temperatures[0];
  for (let t = 0; t < temperatures.length; t++) {
    // variable that contain current temperature
    let currentTemperature = temperaturesInput[t];

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

console.log(calculateAmplitude(temperatures));
