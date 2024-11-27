// Closure - пази рефернциите
/*
The scope of an inner function includes the scope of
the outer function
An inner function retains variables being used from the outer
function scope even after the parent function has returned
 */
function outer(number) {
  let current = 'outer';
  console.log('outer - ' + number);

  return function inner(number) {
    console.log(current);
    console.log('inner - ' + number);
  };
}

const inner = outer(10);

inner(20);
