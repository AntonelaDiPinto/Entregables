import { Vehiculo } from "./Vehiculo";

export class Auto extends Vehiculo {
    private numeroPuertas: number;
    private color: string;

    constructor(marca: string, modelo: string, anio: number, patente: string, titular: string, numeroPuertas: number, color: string) {
        super(marca, modelo, anio, patente, titular);
        this.numeroPuertas = numeroPuertas;
        this.color = color;
    }

    public getNumeroPuertas(): number {
         return this.numeroPuertas;
    }

    public getColor(): string {
        return this.color;
    }
    
}