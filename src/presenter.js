import Totalizador from "./totalizador.js";

const cantidadDeItem = document.querySelector("#cantidad-de-item");
const precioDeItem = document.querySelector("#precio-de-item");
const codigoDeEstado = document.querySelector("#codigo-de-estado")
const form = document.querySelector("#sumar-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  
  const cantidadDeItems = Number.parseInt(cantidadDeItem.value);
  const precioDeItems = Number.parseInt(precioDeItem.value);
  const codigoEstadoValor = codigoDeEstado.value.toUpperCase().slice(0, 2);


  const totalizador = new Totalizador(cantidadDeItems, precioDeItems,  codigoEstadoValor);


  div.innerHTML = `
    <p>Cantidad: ${totalizador.cantidadDeItems}</p>
    <p>Precio: ${totalizador.precioDeItems}</p>
    <p>Código de Estado: ${totalizador.codigoDeEstado}</p>
    <p>Precio Neto (${totalizador.cantidadDeItems} * \$${totalizador.precioDeItems}): ${totalizador.precioNeto}</p>
`;
});