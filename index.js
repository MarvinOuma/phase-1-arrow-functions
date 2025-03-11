// index.js


const multiplyByTwo = function(num) {
    return num * 2;
  };
  
  
  const square = num => num * num;
  
  
  const add = (a, b) => a + b;
  
  
  const greet = name => {
    const greeting = `Hello, ${name}!`;
    return greeting;
  };
  
  
  const sayHello = () => "Hello!";
  
  
  const doubleArray = arr => arr.map(num => num * 2);
  
  
  const divide = function(dividend, divisor) {
    return dividend / divisor;
  };
  
  // Optional export for testing
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
      multiplyByTwo,
      square,
      add,
      greet,
      sayHello,
      doubleArray,
      divide
    };
  }