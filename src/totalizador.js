class Totalizador {

    precioNeto = null;
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

    get getPrecioNeto() {
        return this.precioNeto ?? this.calcularPrecioNeto();
    }

    calcularPrecioNeto() {
        this.precioNeto = this.cantidadDeItem * this.precioDeItem;
        return this.precioNeto;
    }
}

export default Totalizador;