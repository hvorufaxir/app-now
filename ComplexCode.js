/* 
   Filename: ComplexCode.js
   Content: Complex JavaScript code that demonstrates various advanced concepts and techniques
*/

// Object-oriented programming with classes and inheritance
class Animal {
  constructor(name) {
    this.name = name;
  }

  eat() {
    console.log(`${this.name} is eating.`);
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name);
    this.breed = breed;
  }

  bark() {
    console.log(`${this.name} is barking.`);
  }
}

// Functional programming with higher-order functions
const multiplyByTwo = (array) => {
  return array.map((value) => value * 2);
};

const filterEvenNumbers = (array) => {
  return array.filter((value) => value % 2 === 0);
};

// Promises and async/await for asynchronous operations
const fetchData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data fetched successfully.");
    }, 2000);
  });
};

const performAsyncOperations = async () => {
  try {
    const data = await fetchData();
    console.log(data);
  } catch (error) {
    console.error("Error:", error);
  }
};

// Event listeners and DOM manipulation
document.addEventListener("DOMContentLoaded", () => {
  const button = document.querySelector("#myButton");
  button.addEventListener("click", () => {
    button.textContent = "Clicked!";
  });
});

// Closures and lexical scoping
const outerFunction = () => {
  const outerVariable = "Hello";

  const innerFunction = () => {
    console.log(outerVariable);
  };

  return innerFunction;
};

const closureExample = outerFunction();

// Module pattern for encapsulation
const counterModule = (() => {
  let count = 0;

  const increaseCount = () => {
    count++;
  };

  const decreaseCount = () => {
    count--;
  };

  const getCount = () => {
    return count;
  };

  return {
    increaseCount,
    decreaseCount,
    getCount,
  };
})();

// Regular expressions for pattern matching
const isValidEmail = (email) => {
  const emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return emailPattern.test(email);
};

// Data structures like sets and maps
const namesSet = new Set(["John", "Jane", "Tom"]);
const agesMap = new Map();
agesMap.set("John", 30);
agesMap.set("Jane", 25);
agesMap.set("Tom", 35);

// Generators for iterable functions
function* generatorFunction() {
  yield "Hello";
  yield "World";
}

const generator = generatorFunction();

// Complex algorithm or mathematical calculation
const calculateFibonacci = (n) => {
  const fibonacciSequence = [0, 1];

  for (let i = 2; i <= n; i++) {
    const nextFibonacci = fibonacciSequence[i - 1] + fibonacciSequence[i - 2];
    fibonacciSequence.push(nextFibonacci);
  }

  return fibonacciSequence;
};

// Other complex functionality or business logic

// Invoke the code and test the functionality
const dog = new Dog("Max", "Golden Retriever");
dog.bark();
dog.eat();

const numbers = [1, 2, 3, 4, 5];
const multipliedNumbers = multiplyByTwo(numbers);
console.log(multipliedNumbers);

const evenNumbers = filterEvenNumbers(numbers);
console.log(evenNumbers);

performAsyncOperations();

closureExample();

console.log(counterModule.getCount());
counterModule.increaseCount();
console.log(counterModule.getCount());

console.log(isValidEmail("example@example.com"));

console.log(namesSet);
console.log(agesMap);

console.log(generator.next().value);
console.log(generator.next().value);

console.log(calculateFibonacci(10));