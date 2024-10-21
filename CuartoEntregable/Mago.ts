import { Personaje } from "./Personaje";

export class Mago extends Personaje {
    protected trucosDeMagia: string;
    protected mana: number;
    protected cajaMagica: string[];
   

    constructor(nombre: string, nivel: number, puntosDeVida: number, trucosDeMagia: string, mana: number, cajaMagica?: []) {
        super(nombre, nivel, puntosDeVida);
        this.trucosDeMagia = trucosDeMagia;
        this.mana = mana;
        this.cajaMagica = [];
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
        console.log(`🧙 ${this.nombre} está ATACANDO`);
        console.log(`Tras el ataque ${this.nombre} obtuvó 5 puntos de vida por lo cual ahora tiene un total de ${this.puntosDeVida} puntos ❤️`);
     }
 
     public defender(personaje: Personaje): void {
        if(this.puntosDeVida > 1) {
         personaje.setPuntosDeVida(personaje.getPuntosDeVida() - 5)
         console.log(`🧙 ${this.nombre} se está DEFENDIENDO`);
         console.log(`Tras defenderse ${this.nombre} perdió 5 puntos de vida por lo cual ahora tiene un total de ${this.puntosDeVida} puntos ❤️`);
        } else {
            console.log(`${this.nombre} ha MUERTO 💀`);
        }
    }

    public encontrarCajaMagica(nuevoAtaque: string): void {
        this.cajaMagica.push(nuevoAtaque);
        console.log(`🧙 ${this.nombre} ha encontrado la Caja Mágica 🎁 y ha aprendido un nuevo ataque: ${nuevoAtaque}`);
    }

    public hechizar(mago: Mago): void {
        if(this.mana > 0) {
           mago.setMana(this.mana -= 1);
           console.log(`🧙 ${mago.nombre} ha Hechizado 🙂 y ahora su maná es de ${mago.mana}.`)
        } else {
            console.log(`🧙 ${mago.nombre} ya no tiene maná por lo cual no puede realizar más Hechizos 😞`)
        }
    } 

    public obtenerInformacion(): string {
        return `🧙 ${this.nombre} - Nivel: ${this.nivel}, Puntos De Vida: ${this.puntosDeVida}, Trucos de Magia: ${this.trucosDeMagia}, Maná: ${this.mana}.`
    }
}

export class MagoEvolucionado extends Mago {
    private pociones: number;

    constructor(nombre: string, nivel: number, puntosDeVida: number, trucosDeMagia: string, mana: number, pociones: number, cajaMagica?: string[]) {
        super(nombre, nivel, puntosDeVida, trucosDeMagia, mana, []);
        this.pociones = pociones;
    }

    public getPociones(): number {
        return this.pociones;
    }

    public setPociones(pociones: number): void {
        this.pociones = pociones;
    }

    public curar(personaje: Personaje): void {
        if (this.puntosDeVida > 0) {
            this.puntosDeVida += 10;
            this.pociones -= 1;
            console.log(`🧙 ${this.nombre} curó a ${personaje.getNombre()} utilizando una de sus pociones ⚗️  y obtuvó 10 puntos de vida 💜.`);
        } else {
            console.log(`🧙 ${this.nombre} no puede curar porque no tiene suficiente vida o no le quedan más pociones.`);
        }
    }

    public recibirDanio(): void {
       if(this.puntosDeVida > 1) {
        this.puntosDeVida -= 10;
        this.mana -= 1;
        console.log(`🧙 ${this.nombre} está Siendo Atacado.`);
        console.log(`Tras el ataque ${this.nombre} perdió 10 puntos de vida por lo cual ahora tiene un total de ${this.puntosDeVida} puntos 💜 y se le resto 1 punto de Maná.`);
       } else {
        console.log(`🧙 ${this.nombre} ha MUERTO 💀`);
       }
    }

    public obtenerInformacion(): string {
        return `🧙 ${this.nombre} - Nivel: ${this.nivel}, Puntos De Vida: ${this.puntosDeVida}, Trucos de Magia: ${this.trucosDeMagia}, Maná: ${this.mana}, Pociones: ${this.pociones}.`
    }
}
    


