class Totalizador {

    //precioNeto = null;
    tasaImpuestos = {
        UT: 6.65,
        NV: 8.0,
        TX: 6.25,
        AL: 4.0,
        CA: 8.25,
    };
    tasaDescuentos = {
        1000: 3,
        3000: 5,
    };
    constructor(cantidadDeItem, precioDeItem, codigoDeEstado = "CA") {
        this.cantidadDeItem = cantidadDeItem;
        this.precioDeItem = precioDeItem;
        if (typeof codigoDeEstado === 'string') {
            this._codigoDeEstado = codigoDeEstado.toUpperCase().slice(0, 2);
        } else {
            this._codigoDeEstado = 'XX';
        }
        this._precioNeto = null;
        this._precioTotal = null;
        this._descuento = null;
      
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

    get precioTotal(){
        return this._precioTotal ?? this.calcularPrecioTotal();
    }

    get impuesto() {
        return this.tasaImpuestos[this.codigoDeEstado];
    }

    get porcentajeDescuento() {
        return this._descuento ?? this.calcularPorcentajeDescuento();

    }

    calcularPrecioNeto() {
        this._precioNeto = this.cantidadDeItem * this.precioDeItem;
        return this._precioNeto;
    }
    calcularPrecioTotal() {
        const impuestoDolares = this.precioNeto * (this.impuesto / 100);
        this._precioTotal = this.precioNeto + impuestoDolares;
        return this._precioTotal;
    }     

    calcularPorcentajeDescuento() {
        this._descuento = 0;
        for (let monto in this.tasaDescuentos) {
            if (this.precioNeto >= parseInt(monto)) 
                this._descuento = this.tasaDescuentos[monto];
            else
                break;
        }
        return this._descuento;
    }
}

export default Totalizador;