// Partial Application
function logger(services, text) {
  console.log(`${services} service: ${text}`);
}

logger('admin', 'Successful user registration');

// Partial Application with function wrapper
const adminLog = (text) => logger('admin', text);

adminLog('user has been deleted');

// Partial Application with bind
const userLog = logger.bind(null, 'user');

userLog('Post created');

// Normal Function
const sum = (a, b, c) => {
  return a + b + c;
};

// Currying Function
const curryingSum = (a) => {
  // first function that takes a
  return (b) => {
    // second function that returns b
    return (c) => {
      // third function that returns c
      return a + b + c; // forth function that returns sum of a, b, c
    };
  };
};
// When we use arrow function we can use it without keyword return and curly brackets like this:
const curryingSumShort = (a) => (b) => (c) => a + b + c;
console.log(curryingSum(5)(10)(15));
// Calling the Currying Function
const firstFunction = curryingSum(5);
const secondFunction = firstFunction(10);
const forthFunctionResult = secondFunction(15);

console.log(forthFunctionResult);

// Shortly written
const result = curryingSum(5)(10)(15);
console.log(result);
