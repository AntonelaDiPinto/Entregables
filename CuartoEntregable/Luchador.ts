import { Personaje } from "./Personaje";

export class Luchador extends Personaje {
    private armaDisponible: string;

    constructor(nombre: string, nivel: number, puntosDeVida: number, armaDisponible: string) {
        super(nombre, nivel, puntosDeVida);
        this.armaDisponible = armaDisponible;
    }

    public getArmaDisponible(): string {
        return this.armaDisponible;
    }

    public setArmaDisponible(armaDisponible: string): void {
        this.armaDisponible = armaDisponible;
    }
}