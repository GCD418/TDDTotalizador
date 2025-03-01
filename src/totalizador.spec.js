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
});
