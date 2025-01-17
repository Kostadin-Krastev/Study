/*
A young programmer has a certain budget and free time in each season. Write a program
that accepts the budget and the season and calculates where the programmer will go on
vacation and how much he will spend from his budget.
The budget determines the destination, and the season determines how much of the
budget he will spend. If it's summer, he'll be camping, in winter he is going to a hotel.
If he is in Asia, regardless of the season he will rest in a hotel. Each campsite or hotel,
according to the destination, has its own price which corresponds to a given percentage of
the budget:  At 100lv. or less – somewhere in Bulgaria
o Summer – 30% of the budget
o Winter – 70% of the budget  At 1000lv. Somewhere in Europe, somewhere in Europe.
o Summer – 40% of the budget
o Winter – 80% of the budget  With more than 1000lv. Somewhere in Asia
o On vacation in Asia, regardless of the season will spend 90% of the budget.

Input:
The function takes 2 parameters:
First parameter – Budget, real number in the range [10.00...5000.00]. • Second parameter – One of two possible seasons: "summer" or "winter"
Output:
Two lines must be printed on the console. • First line – "Somewhere in [destination]" among "Bulgaria", "Europe" and "Asia" • Second line – "{Type of holiday} – {Amount spent}"
The holiday can be at a “Camp" or "Hotel". The sum must be rounded to the nearest
second character after the comma.
 */

function calculateHoliday(budget, season) {
  // Storing destinations
  const destinationBulgaria = 'Bulgaria';
  const destinationEurope = 'Europe';
  const destinationAsia = 'Asia';

  // Storing type of holiday
  const camp = 'Camp';
  const hotel = 'Hotel';

  if (budget <= 100) {
    console.log(`Somewhere in ${destinationBulgaria}`);
    if (season === 'summer') {
      console.log(`${camp} - ${(budget * 0.3).toFixed(2)}`);
    } else {
      console.log(`${hotel} - ${(budget * 0.7).toFixed(2)}`);
    }
  } else if (budget <= 1000) {
    console.log(`Somewhere in ${destinationEurope}`);
    if (season === 'summer') {
      console.log(`${camp} - ${(budget * 0.4).toFixed(2)}`);
    } else {
      console.log(`${hotel} - ${(budget * 0.8).toFixed(2)}`);
    }
  } else if (budget > 1000) {
    console.log(`Somewhere in ${destinationAsia}
        ${hotel} - ${(budget * 0.9).toFixed(2)}`);
  }
}

// Test data 1
calculateHoliday(50, 'summer');

// Test data 2
calculateHoliday(75, 'winter');

// Test data 3
calculateHoliday(312, 'summer');

// Test data 4
calculateHoliday(678.53, 'winter');

// Test data 5
calculateHoliday(1500, 'summer');
