/*
Filename: complex_code_example.js
Content: Complex Fibonacci sequence generator
*/

// Function to generate the Fibonacci sequence up to a given limit
function generateFibonacciSequence(limit) {
  // Initialize the array with the first two elements
  let fibonacciSequence = [0, 1];

  // Calculate the Fibonacci sequence up to the given limit
  for (let i = 2; i < limit; i++) {
    fibonacciSequence[i] = fibonacciSequence[i - 1] + fibonacciSequence[i - 2];
  }

  return fibonacciSequence;
}

// Function to print the generated Fibonacci sequence
function printFibonacciSequence(fibonacciSequence) {
  // Log each element of the Fibonacci sequence
  for (let i = 0; i < fibonacciSequence.length; i++) {
    console.log(fibonacciSequence[i]);
  }
}

// Generate the Fibonacci sequence up to a limit of 20
let fibonacciSequence = generateFibonacciSequence(20);

// Print the generated Fibonacci sequence
printFibonacciSequence(fibonacciSequence);