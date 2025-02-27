import Totalizador from "./totalizador.js";

describe("Totalizador", () => {
  it("Debería retornar la cantidad de ítems", () => {
    const totalizador = new Totalizador(3);
    expect(totalizador.obtenerCantidadDeItems).toEqual(3);
  });
});