/**
 * Functions
 *
 * A function is a block of code designed to perform a particular
 * task. It is executed when "called" or "invoked".
 */

// Function without parameters and without return value

/**
 * Greets the user with a simple message.
 * @author Angélica Rivas
 * 
 * @returns {void}
 */
function greet() {
  console.log("Hi :3");
}

// Function with parameters and without return value

/**
 * Greets the user by their name.
 * @author Angélica Rivas
 * 
 * @param {string} name - The name of the user to greet.
 * @returns {void}
 */
function greetUser(name) {
  console.log(`Hello, ${name}!`);
}

// Function with parametes and reuturn value

/**
 * Sums two numbers and returns the result.
 *
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @returns {number} The sum of a and b.
 */
function sum(a, b) {
  let result = a + b;
  return result;
}

greet(); // Calling the function
greetUser("Yeferson"); // Calling the function with an argument

console.log(sum(3, 5));

let add = sum(7, 2);
console.log(add);

/**
 * Ejercicios
 *
 * Crea una función que reciba un nombre y un apellido y devuelva
 * un saludo personalizado (es decir, usando el nombre completo
 * recibido).
 *
 * Crea una función que reciba la altura y peso de una persona y
 * retorne el índice de masa corporal (IMC).
 *
 * Crea una función que retorne verdadero si se le envía un número
 * entero o flotante y falso en el caso contrario.
 */

/**
 * Greets the user by their first name and last name
 * 
 * @param {string} firstName - User's first name
 * @param {string} lastName - User's last name
 * @returns {string}
 */
function personalizedGreet(firstName, lastName) {
  return `Hola, ${firstName} ${lastName}!`;
}

console.log(personalizedGreet("Kevin", "Singer"));

/**
 * Calculate the BMI for a given weight and height
 * 
 * @param {float} weight
 * @param {float} height 
 * @returns {float} BMI Value
 */
function BMI(weight, height) {
  let bmi = weight / (height * height);
  return bmi;
}

console.log(BMI(70, 1.75).toFixed(2)); // Peso en kg, altura en metros

function isNumber(value) {
  return typeof value === "number" && !isNaN(value);
}

function isNumber2(value) {
  return Number.isInteger(value) || Number.isFinite(value);
}

console.log(isNumber(3.1416));
console.log(isNumber(5));
console.log(isNumber("Rabanito"));

let input;

do {
  input = prompt("Ingrese un número:");
  console.log(input);
  if (!isNumber(parseFloat(input))) {
    alert("El valor ingresado no es un número. Intente de nuevo.");
    console.log(!isNumber(parseFloat(input)));
  }
} while (!isNumber(parseFloat(input)));

alert(`El número ingresado es ${input}`);
