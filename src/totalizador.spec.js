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
});
