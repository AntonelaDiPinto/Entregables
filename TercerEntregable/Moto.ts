import { Vehiculo } from "./Vehiculo";

export class Moto extends Vehiculo {
    private cilindrada: number;

    constructor(marca: string, modelo: string, anio: number, patente: string, titular: string, cilindrada: number) {
        super(marca, modelo, anio, patente, titular);
        this.cilindrada = cilindrada;
    }

    public getCilindrada() {
        return this.cilindrada;
    }
    
}