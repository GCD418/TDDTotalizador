class Totalizador {
    constructor(cantidadDeItem, precioDeItem) {
        this.cantidadDeItem = cantidadDeItem;
        this.precioDeItem = precioDeItem;
    }

    get cantidadDeItems() {
        return this.cantidadDeItem;
    }

    get precioDeItems() {
        return this.precioDeItem;
    }
}

export default Totalizador;