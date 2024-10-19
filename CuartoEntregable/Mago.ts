import { Personaje } from "./Personaje";

export class Mago extends Personaje {
    private trucosDeMagia: string;
    private mana: number;
   

    constructor(nombre: string, nivel: number, puntosDeVida: number, trucosDeMagia: string, mana: number) {
        super(nombre, nivel, puntosDeVida);
        this.trucosDeMagia = trucosDeMagia;
        this.mana = mana;
    }

    public getTrucosDeMagia(): string {
        return this.trucosDeMagia;
    }

    public setTrucosDeMagia(trucosDeMagia: string): void {
        this.trucosDeMagia = trucosDeMagia;
    }

    public getMana(): number {
        return this.mana;
    }

    public setMana(mana: number): void {
        this.mana = mana;
    }

    public atacar(personaje: Personaje): void { 
        personaje.setPuntosDeVida(personaje.getPuntosDeVida() + 5)
        console.log(`${this.getNombre()} está ATACANDO`);
        console.log(`Tras el ataque ${this.getNombre()} obtuvó 5 puntos de vida por lo cual ahora tiene un total de ${this.getPuntosDeVida()} puntos ❤️`);
     }
 
     public defender(personaje: Personaje): void {
        if(this.puntosDeVida > 1) {
         personaje.setPuntosDeVida(personaje.getPuntosDeVida() - 5)
         console.log(`${this.getNombre()} se está DEFENDIENDO`);
         console.log(`Tras defenderse ${this.getNombre()} perdió 20 puntos de vida por lo cual ahora tiene un total de ${this.getPuntosDeVida()} puntos ❤️`);
        } else {
            console.log(`${this.getNombre()} ha MUERTO 💀`)
        }
    }

    public hechizar(mago: Mago): void {
        if(this.mana > 0) {
           mago.setMana(this.mana -= 1);
           console.log(`${mago.getNombre()} ha Hechizado 🙂 y ahora su mana es de ${mago.getMana()}.`)
        } else {
            console.log(`${mago.getNombre()} ya no tiene mana por lo cual no puede realizar más Hechizos 😞`)
        }
    } 
}