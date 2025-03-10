export default class TipoUsuario{
   usuarios = {
    normal: {
        descuentoCostoEnvio: 0,
    },
    recurrente: {
        descuentoCostoEnvio: 0.5,
    },
    antiguorecurrente: {
        descuentoCostoEnvio: 1,
    },
    especial: {
        descuentoCostoEnvio: 1.5,
    },
   } 
   constructor(usuario){
    return this.usuarios[usuario];
   }
}