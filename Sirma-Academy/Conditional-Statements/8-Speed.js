"use strict";
/*
Write a program that receives speed (real number) and prints speed information. 
• At speeds up to 10 (inclusive) print "slow". 
• At speeds above 10 and up to 60 print "average". 
• At speeds above 60 and up to 120, print "fast". 
• At speeds above 120 and up to 160 MHz, print "super-fast". 
• At higher speeds, print "turbo-fast".  
 */

let speed = 10;
speed = 59;
speed = 120;
speed = 121;
speed = 183;
speed = 59.99;
speed = 60.001;

const speedInformation = function (speed) {
  if (speed <= 10) {
    console.log("slow");
  } else if (speed > 10 && speed <= 60) {
    console.log("average");
  } else if (speed > 60 && speed <= 120) {
    console.log("fast");
  } else if (speed > 120 && speed <= 160) {
    console.log("super-fast");
  } else {
    console.log("turbo-fast");
  }
};

speedInformation(speed);
