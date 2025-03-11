import Totalizador from "./totalizador.js";

const cantidadDeItem = document.querySelector("#cantidad-de-item");
const precioDeItem = document.querySelector("#precio-de-item");
const _codigoDeEstado = document.querySelector("#codigo-de-estado")
const form = document.querySelector("#impuestos-form");
const div = document.querySelector("#resultado-div");
const _categoriaDeProducto = document.querySelector("#categoria-de-producto");
const _tipoDeUsuario = document.querySelector("#tipo-usuario");
const _pesoVolumetrico = document.querySelector("#peso-volumetrico");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  
  const cantidadDeItems = Number.parseInt(cantidadDeItem.value);
  const precioDeItems = Number.parseInt(precioDeItem.value);
  const codigoDeEstado = _codigoDeEstado.value;
  const categoriaDeProducto = _categoriaDeProducto.value;
  const tipoDeUsuario = _tipoDeUsuario.value;
  const pesoVolumetrico = Number.parseFloat(_pesoVolumetrico.value);
  /*if (codigoDeEstado === "") {
    alert("Por favor, selecciona un estado.");
    return;
  }*/

  const totalizador = new Totalizador(cantidadDeItems, precioDeItems,  codigoDeEstado, categoriaDeProducto, tipoDeUsuario, pesoVolumetrico);


  div.innerHTML = `
    <p>Cantidad: ${totalizador.cantidadDeItems}</p>
    <p>Precio: ${totalizador.precioDeItems}</p>
    <p>Precio Neto (${totalizador.cantidadDeItems} * \$${totalizador.precioDeItems}): ${totalizador.precioNeto}</p>
    <p>Descuento por cantidad: ${totalizador.porcentajeDescuento}%</p>
    <p>Código de Estado seleccionado: ${totalizador.codigoDeEstado}</p>
    <p>Impuesto para ${totalizador.codigoDeEstado} = (%${totalizador.impuesto})</p>
    <p>Categoría de producto seleccionada: ${categoriaDeProducto}</p>
    <p>Impuesto de la categoría de producto: ${totalizador.impuestoCategoriaProducto}%</p>
    <p>Descuento de la categoría de producto: ${totalizador.descuentoCategoriaProducto}%</p>
    <p>Descuento del tipo de usuario: ${totalizador.descuentoPorUsuario}%</p>
    <p>Peso Volumétrico: ${_pesoVolumetrico.value} kg = ${totalizador.costoPesoVolumetrico.toFixed(2)}\$ por unidad</p>
    <p>Costo de envío por peso volumétrico: \$${totalizador.costoDeEnvio.toFixed(2)}</p>
    <p>Precio Total(Con impuesto únicamente): \$${totalizador.calcularPrecioTotal().toFixed(2)}</p>
`;
});