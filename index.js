// Function that receives a function as an argument and calls it
function receivesAFunction(callback) {
    callback();
  }
  
  // Function that returns a named function
  function returnsANamedFunction() {
    return function namedFunction() {
      console.log("I am a named function!");
    };
  }
  
  // Function that returns an anonymous function
  function returnsAnAnonymousFunction() {
    return () => console.log("I am an anonymous function!");
  }
  
  // Example usage:
  receivesAFunction(() => console.log("Callback function executed!"));
  
  const namedFunc = returnsANamedFunction();
  namedFunc(); // Output: I am a named function!
  
  const anonymousFunc = returnsAnAnonymousFunction();
  anonymousFunc(); // Output: I am an anonymous function!
  