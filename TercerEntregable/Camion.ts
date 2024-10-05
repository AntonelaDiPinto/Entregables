import { Vehiculo } from "./Vehiculo";

export class Camion extends Vehiculo {
    private tipo: string;
    private categoria: number;
    private designacion: string;

    constructor(marca: string, modelo: string, anio: number, patente: string, titular: string, tipo: string, categoria: number, designacion: string) {
        super(marca, modelo, anio, patente, titular);
        this.tipo = tipo;
        this.categoria = categoria;
        this.designacion = designacion;
    }

    public getTipo(): string {
        return this.tipo;
    }

    public getCategoria(): number {
        return this.categoria;
    }

    public getDesignacion(): string {
        return this.designacion;
    }
}