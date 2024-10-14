import { Personaje } from "./Personaje";

export class Mago extends Personaje {
    private trucosDeMagia: string;

    constructor(nombre: string, nivel: number, puntosDeVida: number, trucosDeMagia: string) {
        super();
        this.trucosDeMagia = trucosDeMagia;
    }

    public getTrucosDeMagia(): string {
        return this.trucosDeMagia;
    }

    public setTrucosDeMagia(trucosDeMagia: string): void {
        this.trucosDeMagia = trucosDeMagia;
    }
}