/*
X liters of paint are used to paint a room. To obtain the desired color, yellow, red and
white paint is mixed. Yellow paint is 4 times more than red and 2 times less than white.
How many liters of each color have they spent on painting a room?
As a parameter you take the liters of yellow paint - integer [10,100]
 */

function calcPaintLiters(paintYellow) {
  const paintRed = paintYellow / 4;
  const paintWhite = paintYellow * 2;
  const totalPaint = paintYellow + paintRed + paintWhite;
  console.log(
    `Red: ${paintRed}\nYellow: ${paintYellow}\nWhite: ${paintWhite}\nTotal: ${totalPaint}`
  );
}

calcPaintLiters(42);
