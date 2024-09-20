"use strict";
/*
Write a program that calculates the speed in meters per second and displays the result on the console. 
The input data are integers as follows: 
∙ Distance in meters 
∙ Hours 
∙ Minutes 
∙ Seconds 
Use the formula V = S/T where V - speed, S - distance, T - time
 */

function calcSpeed(distanceInMeters, hours, minutes, seconds) {
  const time = hours * 3600 + minutes * 60 + seconds;
  const speed = distanceInMeters / time;
  console.log(speed.toFixed(6));
}

calcSpeed(2500, 5, 56, 23);
