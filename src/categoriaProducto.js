class CategoriaProducto{
    categorias = {
        alimentos: {
            impuesto: 0,
        },
        bebidas: {
            impuesto: 7,
        },
        material: {
            impuesto: 0,
        },
        muebles: {
            impuesto: 3,
        },
        electronicos: {
            impuesto: 4,
        },
        vestimenta: {
            impuesto: 2,
        },
        varios: {
            impuesto: 0,
        },
    }
    constructor(categoria){
        return this.categorias[categoria];
    }
}
export default CategoriaProducto;