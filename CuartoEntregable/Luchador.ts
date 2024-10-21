import { Personaje } from "./Personaje";

export class Luchador extends Personaje {
    protected armaDisponible: string;
    protected nivelFuerza: number;

    constructor(nombre: string, nivel: number, puntosDeVida: number, armaDisponible: string, nivelFuerza: number) {
        super(nombre, nivel, puntosDeVida);
        this.armaDisponible = armaDisponible;
        this.nivelFuerza = nivelFuerza;
    }

    public getArmaDisponible(): string {
        return this.armaDisponible;
    }

    public getNivelFuerza(): number {
        return this.nivelFuerza;
    }

    public serArmaDisponible(armaDisponible: string): void {
        this.armaDisponible = armaDisponible;
    }

    public setNivelFuerza(nivelFuerza: number): void {
        this.nivelFuerza = nivelFuerza;
    }

    public atacar(personaje: Personaje): void { 
        personaje.setPuntosDeVida(personaje.getPuntosDeVida() + 20);
        this.nivelFuerza += 10;
        console.log(`🥷  ${this.nombre} está ATACANDO`);
        console.log(`Tras el ataque ${this.nombre} obtuvó 20 puntos de vida por lo cual ahora tiene un total de ${this.puntosDeVida} puntos 💙  .Su nivel de fuerza ha aumentado y es de ${this.nivelFuerza}.`);
     }
 
    public defender(personaje: Personaje): void {
        if(this.puntosDeVida > 1) {
         personaje.setPuntosDeVida(personaje.getPuntosDeVida() - 20);
         this.nivelFuerza -= 10;
         console.log(`🥷  ${this.nombre} se está DEFENDIENDO`);
         console.log(`Tras defenderse ${this.nombre} perdió 20 puntos de vida por lo cual ahora tiene un total de ${this.puntosDeVida} puntos 💙  .Su nivel de fuerza ha disminuido y es de ${this.nivelFuerza}.`);
        } else {
            console.log(`🥷  ${this.nombre} ha MUERTO 💀`);
        }
    }

    public obtenerInformacion(): string {
        return `🥷  ${this.nombre} - Nivel: ${this.nivel}, Puntos De Vida: ${this.puntosDeVida}, Arma Disponible: ${this.armaDisponible}, Nivel de Fuerza: ${this.nivelFuerza}.`
    }
}

export class LuchadorEvolucionado extends Luchador {
    private elementoDeDefensa: string;
    
    constructor(nombre: string, nivel: number, puntosDeVida: number, armaDisponible: string, nivelFuerza: number, elementoDeDefensa: string) {
        super(nombre, nivel, puntosDeVida, armaDisponible, nivelFuerza);
        this.elementoDeDefensa = elementoDeDefensa;
    }

    public getElementoDeDefensa(): string {
        return this.elementoDeDefensa;
    }

    public setElementoDeDefensa(elementoDeDefensa: string): void {
        this.elementoDeDefensa = elementoDeDefensa;
    }

    public atacar(luchadorEvolucionado: LuchadorEvolucionado): void { 
        luchadorEvolucionado.setPuntosDeVida(luchadorEvolucionado.getPuntosDeVida() + 50);
        this.nivelFuerza += 30;
        console.log(`🥷  ${this.nombre} es un Luchador Evolucionado y está ATACANDO con su nueva arma disponible ${this.armaDisponible}.`);
        console.log(`Tras el ataque ${this.nombre} obtuvó 50 puntos de vida por lo cual ahora tiene un total de ${this.puntosDeVida} puntos 💙  .Su nivel de fuerza ha aumentado y es de ${this.nivelFuerza}.`);
     }
 
    public defender(luchadorEvolucionado: LuchadorEvolucionado): void {
        if(this.puntosDeVida > 1) {
         luchadorEvolucionado.setPuntosDeVida(luchadorEvolucionado.getPuntosDeVida() - 10);
         this.nivelFuerza -= 5;
         console.log(`🥷  ${this.nombre} es un Luchador Evolucionado y se está DEFENDIENDO con su ${this.armaDisponible}.`);
         console.log(`Tras defenderse ${this.nombre} perdió 10 puntos de vida por lo cual ahora tiene un total de ${this.puntosDeVida} puntos 💙  .Su nivel de fuerza ha disminuido y es de ${this.nivelFuerza}.`);
        } else {
            console.log(`🥷  ${this.nombre} ha MUERTO 💀`);
        }
    }

    public obtenerInformacion(): string {
        return `🥷  ${this.nombre} - Nivel: ${this.nivel}, Puntos De Vida: ${this.puntosDeVida}, Arma Disponible: ${this.armaDisponible}, Elemento de Defensa: ${this.elementoDeDefensa}  , Nivel de Fuerza: ${this.nivelFuerza}. `
    }

}
