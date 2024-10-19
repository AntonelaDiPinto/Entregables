import { Personaje } from "./Personaje";

export class Luchador extends Personaje {
    private armaDisponible: string;
    private nivelFuerza: number;
    
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
        console.log(`${this.getNombre()} está ATACANDO`);
        console.log(`Tras el ataque ${this.getNombre()} obtuvó 20 puntos de vida por lo cual ahora tiene un total de ${this.getPuntosDeVida()} puntos ❤️`);
     }
 
    public defender(personaje: Personaje): void {
        if(this.puntosDeVida > 1) {
         personaje.setPuntosDeVida(personaje.getPuntosDeVida() - 20)
         console.log(`${this.getNombre()} se está DEFENDIENDO`);
         console.log(`Tras defenderse ${this.getNombre()} perdió 20 puntos de vida por lo cual ahora tiene un total de ${this.getPuntosDeVida()} puntos ❤️`);
        } else {
            console.log(`${this.getNombre()} ha MUERTO 💀`);
        }
    }

    public evolucionar(luchador: Luchador): void {
        if(this.puntosDeVida >= 100) {
            super.setNivel(10); 
            luchador.setNivelFuerza(this.nivelFuerza = 500);
            luchador.serArmaDisponible(this.armaDisponible = "Espada de Diamante ⚔️");
            console.log(`${this.getNombre()} ha EVOLICIONADO, ha alcanzado el nivel 10, ahora su nivel de fuerza es de ${this.nivelFuerza} y tiene disponilbe un arma nueva: ${this.armaDisponible}.`)
        } else {
            console.log(`${this.getNombre()} aún no ha evolucionado.`)
        }
    }
}