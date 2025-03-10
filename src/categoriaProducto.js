class CategoriaProducto{
    categorias = {
        alimentos: {
            impuesto: 0,
            descuento: 2,
        },
        bebidas: {
            impuesto: 7,
            descuento: 0,
        },
        material: {
            impuesto: 0,
            descuento: 1.5,
        },
        muebles: {
            impuesto: 3,
            descuento: 0,
        },
        electronicos: {
            impuesto: 4,
            descuento: 1,
        },
        vestimenta: {
            impuesto: 2,
            descuento: 0,
        },
        varios: {
            impuesto: 0,
            descuento: 0,
        },
    }
    constructor(categoria){
        return this.categorias[categoria];
    }
}
export default CategoriaProducto;