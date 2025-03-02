class Totalizador {

    //precioNeto = null;
    constructor(cantidadDeItem, precioDeItem, codigoDeEstado) {
        this.cantidadDeItem = cantidadDeItem;
        this.precioDeItem = precioDeItem;
        if (typeof codigoDeEstado === 'string') {
            this._codigoDeEstado = codigoDeEstado.toUpperCase().slice(0, 2);
        } else {
            this._codigoDeEstado = 'XX';
        }
        this._precioNeto = null;
      
    }

    get cantidadDeItems() {
        return this.cantidadDeItem;
    }

    get precioDeItems() {
        return this.precioDeItem;
    }

    get codigoDeEstado() {
        return this._codigoDeEstado;
    }

    get precioNeto() {
        return this._precioNeto ?? this.calcularPrecioNeto();
    }

    calcularPrecioNeto() {
        this._precioNeto = this.cantidadDeItem * this.precioDeItem;
        return this._precioNeto;
    }
}

export default Totalizador;