import CategoriaProducto from "./categoriaProducto";
import TipoUsuario from "./tipoUsuario";
import PesoVolumetrico from "./pesoVolumetrico";

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
        7000: 7,
        10000: 10,
        30000: 15,
    };
    constructor(cantidadDeItem, precioDeItem, codigoDeEstado = "CA", categoriaDeProducto = "varios", tipoDeUsuario = "normal", pesoVolumetrico = 0) {
        this.cantidadDeItem = cantidadDeItem;
        this.precioDeItem = precioDeItem;
        this.pesoVolumetrico = new PesoVolumetrico(pesoVolumetrico);
        if (typeof codigoDeEstado === 'string') {
            this._codigoDeEstado = codigoDeEstado.toUpperCase().slice(0, 2);
        } else {
            this._codigoDeEstado = 'XX';
        }
        this._categoriaDeProducto = new CategoriaProducto(categoriaDeProducto);
        this.categoriaDeProductoLiteral = categoriaDeProducto;
        this._tipoDeUsuario = new TipoUsuario(tipoDeUsuario);
        this.tipoDeUsuarioLiteral = tipoDeUsuario;
        this._precioNeto = null;
        this._precioTotal = null;
        this._descuento = null;
        this._precioTotalD = null;
      
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
        return this._descuento ?? this.calcularPorcentajeDescuentoPorCantidad();
    }

    get precioTotalD() {
        return this._precioTotalD ?? this.calcularPrecioConDescuentos();
    }

    get impuestoCategoriaProducto(){
        return this._categoriaDeProducto["impuesto"];
    }

    get descuentoCategoriaProducto(){
        return this._categoriaDeProducto["descuento"]
    }

    get montoImpuesto() {
        return this.calcularMontoImpuestoPorEstado(); 
    }

    get precioTotalSoloImpuestos() {
        return this.calcularPrecioTotalSoloImpuestos();
    }

    get descuentoPorUsuario() {
        return this._tipoDeUsuario["descuentoCostoEnvio"]
    }

    get costoPesoVolumetrico() {
        return this.pesoVolumetrico.getCosto();
    }

    get costoDeEnvio() {
        return this.calcularCostoDeEnvio();
    }

    calcularPrecioNeto() {
        this._precioNeto = this.cantidadDeItem * this.precioDeItem;
        return this._precioNeto;
    }
    // calcularPrecioTotal() {
    //     const descuentoDolares = this.precioNeto * (this.porcentajeDescuento / 100);
    //     const precioConDescuento = this.precioNeto - descuentoDolares;
    //     const impuestoDolares = precioConDescuento * (this.impuesto / 100);
    //     this._precioTotalD = this.precioNeto + impuestoDolares - descuentoDolares;
    //     return this._precioTotalD;

    // }     

    calcularPorcentajeDescuentoPorCantidad() {
        this._descuento = 0;
        for (let monto in this.tasaDescuentos) {
            if (this.precioNeto >= parseInt(monto)) 
                this._descuento = this.tasaDescuentos[monto];
            else
                break;
        }
        return this._descuento;
    }

    calcularCostoDeEnvio() {
        return (this.costoPesoVolumetrico * this.cantidadDeItem) * (1 - this.descuentoPorUsuario / 100);
    }

    calcularMontoImpuestoPorEstado() {
        const subtotal = this.cantidadDeItem * this.precioDeItem; 
        const tasa = this.tasaImpuestos[this._codigoDeEstado] ?? 0; 
        return subtotal * (tasa / 100);
    }

    calcularMontoDescuentoPorCategoria() {
        const descuentoCategoria = this._categoriaDeProducto["descuento"] ?? 0;
        const descuentoEnDolares = this.precioNeto * (descuentoCategoria / 100);
        return descuentoEnDolares;
    }

    calcularImpuestosTotales(){
        const impuestoEstado = this.calcularPrecioConDescuentos() * (this.impuesto / 100);
        const impuestoCategoria = this.calcularPrecioConDescuentos() * (this.impuestoCategoriaProducto / 100);
        return (impuestoEstado + impuestoCategoria);
    }

    calcularPrecioTotalSoloImpuestos() {
        return this.calcularPrecioConDescuentos() + this.calcularImpuestosTotales();
    }

    calcularDescuentoEspecial() {
        if(this.tipoDeUsuarioLiteral === "recurrente" && this.precioNeto > 3000 && this.categoriaDeProductoLiteral === "alimentos") {
            return 100;
        }
        if(this.tipoDeUsuarioLiteral === "especial" && this.precioNeto > 7000 && this.categoriaDeProductoLiteral === "electronicos") {
            return 200;
        }
        return 0;
    }

    calcularPrecioConDescuentos() {
        const descuentoCategoria = this.calcularMontoDescuentoPorCategoria();
        const descuentoDolares = this.precioNeto * (this.porcentajeDescuento / 100);
        const precioConDescuento = this.precioNeto - descuentoDolares - descuentoCategoria;
        return precioConDescuento;
    }

    calcularPrecioTotal() {
        const impuestoDolares = this.calcularPrecioTotalSoloImpuestos();
        this._precioTotalD = impuestoDolares + this.calcularCostoDeEnvio();
        return this._precioTotalD;
    }
}

export default Totalizador;