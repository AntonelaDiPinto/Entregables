import { Personaje } from "./Personaje";

export class Arquero extends Personaje {
    private cantidadFlechas: number;
    private equipamiento: string;

    constructor(nombre: string, nivel: number, puntosDeVida: number, cantidadFlechas: number, equipamiento: string) {
        super();
        this.cantidadFlechas = cantidadFlechas;
        this.equipamiento = equipamiento;
    }

    public getCantidadFlechas(): number {
        return this.cantidadFlechas;
    }

    public getEquipamiento(): string {
        return this.equipamiento;
    }

    public setCantidadFlechas(cantidadFlechas: number): void {
        this.cantidadFlechas = cantidadFlechas;
    }

    public setEquipamiento(equipamiento: string): void {
        this.equipamiento = equipamiento;
    }
}