/**
 * Export in Vanilla JavaScript
 *
 * Import allows you to bring in functions, objects, or primitives from other
 * modules.
 *
 * Export allows you to share functions, objects, or primitives from a module to be
 * used in other modules.
 *
 * A module is simply a JavaScript file that contains code you want to reuse in
 * other files.
 */

// Importing from export.js
import { greet, PI, Circle, users } from "./export.js";
import bakeCake from "./export-default.js";

// Using the imported function
console.log(greet("World")); // Output: Hello, World!

// Using the imported constant
console.log(`Value of PI: ${PI}`); // Output: Value of PI: 3.14159

// Using the imported default export
bakeCake();

// Using the imported class
const myCircle = new Circle(5);
console.log(`Area of circle: ${myCircle.area()}`); // Output: Area of circle: 78.53975

// Using the imported data structure
console.log("Users:", users);
