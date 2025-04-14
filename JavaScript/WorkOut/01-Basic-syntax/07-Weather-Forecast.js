/*
Write a function that takes as parameters city (text) and degrees (integer) and displays
the following message on the console: "Today in {city} it is {degrees} degrees.".
 */
let cityName = 'Sofia';
cityName = 'Varna';
let degreesNumber = 29;
degreesNumber = 32;

const displayWeatherMessage = function (cityName, degreesNumber) {
  const message = `Today in ${cityName} it is ${degreesNumber} degrees`;

  return message;
};

console.log(displayWeatherMessage(cityName, degreesNumber));
