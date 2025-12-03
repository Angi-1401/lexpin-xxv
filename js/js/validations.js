/**
 * Regular Expressions for Validations
 *
 * Defines patters for validating user
 * input such as email, passwords, etc.
 */

function validateInput(value, regex) {
  return regex.test(value);
}

// Example regex patterns

// Username: 3-24 characters, at least one uppercase letter, one lowercase letter, and one special character (# ? ! _ - *); with optional digits
const userPattern =
  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[#?!_\-\*])(?=.*?[0-9]?)[A-Za-z0-9#?!_\-\*]{3,24}$/;

// First and Last Name (Spaces & Spanish characters allowed): 3-24 characters, at least one uppercase letter, one lowercase letter
const namePattern = /^(?=.*?[A-ZÁÉÍÓÚÑ])(?=.*?[a-záéíóúñ])(?=.*?[\s]).{3,24}$/;

const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

// Password: 8-32 characters, at least one uppercase letter, one lowercase letter, one digit, and one special character (# ? ! @ $ % ^ & * -)
const passPattern =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z\d!@#$%^&*(),.?":{}|<>]{8,32}$/;

/**
 * Handling Form Submission and Validations with Error / Exception Validations
 *
 * Try ... Catch ... Finally
 *
 * Try block: Code that may throw an error
 * Catch block: Code to handle the error
 * Finally block: Code that runs regardless of error occurrence
 */

const usernameInput = document.getElementById("username");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

const form = document.getElementById("form");
form.addEventListener("submit", (event) => {
  event.preventDefault();

  try {
    if (
      !validateInput(usernameInput.value, userPattern) ||
      !validateInput(emailInput.value, emailPattern) ||
      !validateInput(passwordInput.value, passPattern)
    ) {
      // Throwing an error if validation fails
      // Force the code to jump to the catch block
      throw new Error("Invalid input.");
    }

    alert(`Hello, ${usernameInput.value}! Your form has been submitted successfully.`);
  } catch (error) {
    alert(error.message);
  }
});

// Ejercicio para divertirse:
// Crear un formulario de contacto con validaciones para sus campos. Se debe validar lo siguiente:
// Nombre: Solo letras y espacios, mínimo 3 caracteres.
// Email: Formato válido de email.
// Mensaje: Mínimo 10 caracteres, máximo 300 caracteres.
// Todos los campos deben estar llenos.
// Mostrar mensajes de error específicos para cada campo que no pase la validación utilizando DOM Manipulation.
// Al enviar el formulario correctamente, mostrar un mensaje de éxito al usuario utilizando DOM Manipulation.