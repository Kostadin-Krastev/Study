/*
Write a function that takes the look and dimensions of a geometric figure and calculates
its face.
The figures are of four types: square, rectangle, circle, and triangle. The first
parameter is the type of figure (square, rectangle, circle, or triangle). 
- If the figure is a square, the next parameter is a number - the length of its side. 
- If the figure is a rectangle, the next two parameters produce two numbers - the
lengths of its sides. 
- If the figure is a circle, the next parameter is a number - the radius of the circle. 
- If the figure is a triangle, the next two parameters produce two numbers - the
length of its side and the length of the height to it.
Round the result to 2 decimal places.
 */
function calculate(type, dimA, dimB) {
  let area;

  if (type === 'square') {
    area = dimA * dimA;
  } else if (type === 'rectangle') {
    area = dimA * dimB;
  } else if (type === 'circle') {
    area = Math.PI * dimA ** 2;
  } else if (type === 'triangle') {
    area = 0.5 * dimA * dimB;
  }

  console.log(area.toFixed(2));
}

calculate('triangle', 4.5, 20);
