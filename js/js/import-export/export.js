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

// Exporting a function
export function greet(name) {
  return `Hello, ${name}!`;
}

// Exporting a constant
export const PI = 3.14159;

// Exporting a class
export class Circle {
  constructor(radius) {
    this.radius = radius;
  }
  area() {
    return PI * this.radius * this.radius;
  }
}

// Exporting a data structure
export const users = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 3, name: 'Charlie' }
]