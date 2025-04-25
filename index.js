//Imports the functions from both utility modules using ES import syntax.
import { add, subtract } from './mathUtils.js';
import { concatenateStrings, splitString } from './stringUtils.js';
//Calls each function at least once and logs the results to the console.
const sum = add(5, 3);
const difference = subtract(10, 4);
const concatenated = concatenateStrings('Hello', 'World');
const split = splitString('Hello World', ' ');
console.log(`Sum: ${sum}`); // Output: Sum: 8
console.log(`Difference: ${difference}`); // Output: Difference: 6
console.log(`Concatenated: ${concatenated}`); // Output: Concatenated: HelloWorld
console.log(`Split: ${split}`); // Output: Split: Hello,World
// Run with: node index.js



