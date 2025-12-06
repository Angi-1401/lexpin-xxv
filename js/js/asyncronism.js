/**
 * Asynchronism
 *
 * Is a programming paradigm that allows for non-blocking operations,
 * enabling tasks to run concurrently without waiting for each other to complete.
 */

console.log("Start of the script");

// setTimeout simulates an asynchronous operation
setTimeout(() => {
  console.log("This message is displayed after a delay");
}, 2000); // 2 seconds

// setInterval simulates a repeated asynchronous operation
let count = 0;
let interval = setInterval(() => {
  count++;
  console.log(`Interval count: ${count}`);
  if (count === 5) {
    clearInterval(interval); // Stop the interval after 5 counts
  }
}, 1000); // 1 second

/**
 * APIs: Fetch, promises, async/await and http requests
 *
 * Fetch API provides a modern way to make network
 * requests.
 *
 * Promises represent the eventual completion (or failure)
 * of an asynchronous operation and its resulting value.
 *
 * Async/await is syntactic sugar built on top of promises,
 * allowing for writing asynchronous code in a more synchronous manner.
 */

fetch("https://rickandmortyapi.com/api/character/1,2")
  .then((response) => {
    console.log("Status Code:", response.status);
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("Network response was not ok");
    }
  })
  .then((data) => {
    console.log("Data fetched:", data);
  })
  .catch((error) => {
    console.error("Fetch error:", error);
  });

async function getAllCharacters() {
  try {
    const response = await fetch("https://rickandmortyapi.com/api/character");
    console.log("Status Code:", response.status);

    if (response.ok) {
      return await response.json();
    } else {
      throw new Error("Network response was not ok");
    }
  } catch (error) {
    console.error("Fetch error:", error);
  }
}

const charactersContainer = document.getElementById("characters-container");

getAllCharacters().then((data) => {
  data.results.forEach((character) => {
    const characterDiv = document.createElement("div");
    characterDiv.innerHTML = `
      <h2>${character.name}</h2>
      <img src="${character.image}" alt="${character.name}" />
      <p>Status: ${character.status}</p>
      <p>Species: ${character.species}</p>
    `;
    charactersContainer.appendChild(characterDiv);
  });
});

/**
 * Mini proyecto: Consumir una API pública o semi pública de su elección y mostrar
 * los datos en el DOM de manera amigable y estructurada.
 *
 * Asegurarse de manejar errores.
 *
 * Opcional 1: Implementar estados de carga (loading) y mostrar un mensaje al
 * usuario mientras se obtienen los datos.
 *
 * Opcional 2: Agregar funcionalidad de paginación si la API lo soporta.
 *
 * Entrega: 2025/12/07
 */
