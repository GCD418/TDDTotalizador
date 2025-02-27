// import Totalizador from "./totalizador.js";

const cantidadDeItem = document.querySelector("#cantidad-de-item");
const precioDeItem = document.querySelector("#precio-de-item");
const form = document.querySelector("#sumar-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  
  const cantidadDeItems = Number.parseInt(cantidadDeItem.value);
  const precioDeItems = Number.parseInt(precioDeItem.value);
  //const totalizador = new Totalizador(cantidadDeItems);
  // const secondNumber = Number.parseInt(second.value);

  div.innerHTML = "<p>" + cantidadDeItems + " " + precioDeItems + "</p>";
});