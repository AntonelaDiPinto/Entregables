import { Luchador } from "./Luchador";

export abstract class Personaje {
    protected nombre: string;
    protected nivel: number;
    protected puntosDeVida: number;

    constructor(nombre: string, nivel: number, puntosDeVida: number){
        this.nombre = nombre;
        this.nivel = nivel;
        this.puntosDeVida = puntosDeVida;
    }

    public getNombre(): string {
        return this.nombre;
    }

    public getNivel(): number {
        return this.nivel;
    }

    public getPuntosDeVida(): number {
        return this.puntosDeVida;
    }

    public setNivel(nivel: number): void {
        this.nivel = nivel;
    }

    public setPuntosDeVida(puntosDeVida: number): void {
        if(puntosDeVida < 0) {
            this.puntosDeVida = 0;
        }else {
            this.puntosDeVida = puntosDeVida;
        }
    }

    abstract atacar(personaje: Personaje): void;

    abstract defender(personaje: Personaje): void;
}