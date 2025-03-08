import Totalizador from "./totalizador.js";

const cantidadDeItem = document.querySelector("#cantidad-de-item");
const precioDeItem = document.querySelector("#precio-de-item");
const _codigoDeEstado = document.querySelector("#codigo-de-estado")
const form = document.querySelector("#impuestos-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  
  const cantidadDeItems = Number.parseInt(cantidadDeItem.value);
  const precioDeItems = Number.parseInt(precioDeItem.value);
  const codigoDeEstado = _codigoDeEstado.value;

  /*if (codigoDeEstado === "") {
    alert("Por favor, selecciona un estado.");
    return;
  }*/

  const totalizador = new Totalizador(cantidadDeItems, precioDeItems,  codigoDeEstado);


  div.innerHTML = `
    <p>Cantidad: ${totalizador.cantidadDeItems}</p>
    <p>Precio: ${totalizador.precioDeItems}</p>
    <p>Descuento: ${totalizador.porcentajeDescuento}%</p>
    <p>Código de Estado seleccionado: ${totalizador.codigoDeEstado}</p>
    <p>Impuesto para ${totalizador.codigoDeEstado} = (%${totalizador.impuesto})</p>
    <p>Precio Neto (${totalizador.cantidadDeItems} * \$${totalizador.precioDeItems}): ${totalizador.precioNeto}</p>
    <p>Precio Total(Con impuesto únicamente): \$${totalizador.calcularPrecioTotal().toFixed(2)}</p>
`;
});