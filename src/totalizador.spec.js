import Totalizador from "./totalizador.js";

describe("Totalizador", () => {
  it("Debería retornar la cantidad de ítems", () => {
    const totalizador = new Totalizador(3, 100);
    expect(totalizador.cantidadDeItems).toEqual(3); 
  });

  it("Debería retornar el precio de ítems", () => {
    const totalizador = new Totalizador(3, 100); 
    expect(totalizador.precioDeItem).toEqual(100); 
  });

  it("Debería retornar el código de estado en mayúsculas y con 2 caracteres", () => {
    const totalizador = new Totalizador(3, 100, "ny"); 
    expect(totalizador.codigoDeEstado).toEqual("NY");
  });

  it("Debería retornar el precio neto", () => {
    const totalizador = new Totalizador(3, 100); 
    expect(totalizador.precioNeto).toEqual(300); 
  });

  it("Debería retornar el impuesto de acuerdo al código de estado", () => {
    const totalizador = new Totalizador(3, 100, "UT"); 
    expect(totalizador.impuesto).toEqual(6.65); 
  });

  it("Debería retornar el precio total de acuerdo al código de estado con el valor del impuesto según el precio neto y el porcentaje de Ca", () => {
    const totalizador = new Totalizador(20, 3, "CA"); 
    expect(totalizador.precioTotal).toEqual(64.95); 
  });
  it("Debería retornar el precio total de acuerdo al código de estado con el valor del impuesto según el precio neto y el porcentaje de AL", () => {
    const totalizador = new Totalizador(20, 3, "AL"); 
    expect(totalizador.precioTotal).toEqual(62.40); 
  });
  it("Debería retornar el precio total de acuerdo al código de estado con el valor del impuesto según el precio neto y el porcentaje de NV", () => {
    const totalizador = new Totalizador(20, 3, "NV"); 
    expect(totalizador.precioTotal).toEqual(64.80); 
  });
  it("Debería retornar el precio total de acuerdo al código de estado con el valor del impuesto según el precio neto y el porcentaje de UT", () => {
    const totalizador = new Totalizador(20, 3, "UT"); 
    expect(totalizador.precioTotal).toEqual(63.99); 
  });

  it("Debería retornar un descuento del 3% cuando el monto total sea mayor a 1000", () => {
    const totalizador = new Totalizador(100, 10); 
    expect(totalizador.porcentajeDescuento).toEqual(3); 
  });

  it("Debería retornar un descuento del 5% cuando el monto total sea mayor a 3000", () => {
    const totalizador = new Totalizador(100, 30); 
    expect(totalizador.porcentajeDescuento).toEqual(5); 
  });

});