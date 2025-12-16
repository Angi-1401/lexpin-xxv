/**
 * Local Storage Utility Functions
 *
 * It's a set of helper functions to interact with the browser's local storage.
 * This allows for easy saving, retrieving, and deleting of data in local
 * storage.
 */

const inputField = document.getElementById("text-to-store");
const saveButton = document.getElementById("save-to-local-storage");
const updateButton = document.getElementById("btn-update");
const displaySpan = document.getElementById("local-storage-value");

saveButton.addEventListener("click", (e) => {
  e.preventDefault();

  const textToStore = inputField.value;
  localStorage.setItem("textData", textToStore);
});

const storedText = localStorage.getItem("textData");
displaySpan.textContent = storedText ? storedText : "No data found.";

const array = ["apple", "banana", "cherry"];
localStorage.setItem("fruits", JSON.stringify(array));

const retrieveArray = JSON.parse(localStorage.getItem("fruits"));
console.log(retrieveArray);
