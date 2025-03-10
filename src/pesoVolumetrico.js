export default class PesoVolumetrico{
    costosEnvio = [
        { min: 0, max: 10, costo: 0},
        { min: 11, max: 20, costo: 3.5},
        { min: 21, max: 40, costo: 5},
        { min: 41, max: 80, costo: 6},
        { min: 81, max: 100, costo: 6.5},
        { min:101, max: 200, costo: 8},
        { min: 201, max: Infinity, costo: 9}
    ];

    constructor(peso) {
        this.peso = peso;
    }
}