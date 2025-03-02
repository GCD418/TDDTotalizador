class Totalizador {

    //precioNeto = null;
    tasaImpuestos = {
        UT: 6.65,
        NV: 8.0,
        TX: 6.25,
        AL: 4.0,
        CA: 8.25,
    }
    constructor(cantidadDeItem, precioDeItem, codigoDeEstado = "CA") {
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

    get impuesto() {
        return this.tasaImpuestos[this.codigoDeEstado];
    }

    calcularPrecioNeto() {
        this._precioNeto = this.cantidadDeItem * this.precioDeItem;
        return this._precioNeto;
    }
}

export default Totalizador;