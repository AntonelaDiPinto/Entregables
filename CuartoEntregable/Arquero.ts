import { Personaje } from "./Personaje";

export class Arquero extends Personaje {
    protected cantidadFlechas: number;
    protected equipamiento: string;
    protected precision: number;

    constructor(nombre: string, nivel: number, puntosDeVida: number, cantidadFlechas: number, equipamiento: string, precision: number) {
        super(nombre, nivel, puntosDeVida);
        this.cantidadFlechas = cantidadFlechas;
        this.equipamiento = equipamiento;
        this.precision = precision;
    }

    public getCantidadFlechas(): number {
        return this.cantidadFlechas;
    }

    public getEquipamiento(): string {
        return this.equipamiento;
    }

    public getPrecision(): number {
        return this.precision;
    }

    public setCantidadFlechas(cantidadFlechas: number): void {
        this.cantidadFlechas = cantidadFlechas;
    }

    public setEquipamiento(equipamiento: string): void {
        this.equipamiento = equipamiento;
    }

    public setPrecision(precision: number): void {
        this.precision = precision;
    }

    public atacar(personaje: Personaje): void { 
        personaje.setPuntosDeVida(personaje.getPuntosDeVida() + 10)
        console.log(`🧝 ${this.nombre} está ATACANDO`);
        console.log(`Tras el ataque ${this.nombre} obtuvó 10 puntos de vida por lo cual ahora tiene un total de ${this.puntosDeVida} puntos ❤️`);
     }
 
     public defender(personaje: Personaje): void {
        if(this.puntosDeVida > 1) {
         personaje.setPuntosDeVida(personaje.getPuntosDeVida() - 10)
         console.log(`🧝 ${this.nombre} se está DEFENDIENDO`);
         console.log(`Tras defenderse ${this.nombre} perdió 20 puntos de vida por lo cual ahora tiene un total de ${this.puntosDeVida} puntos ❤️`);
        } else {
            console.log(`🧝 ${this.nombre} ha MUERTO 💀`)
        }
    }

    public lanzarFlechas(arquero: Arquero): void {
        if(this.cantidadFlechas > 0){ 
           arquero.setCantidadFlechas(this.cantidadFlechas -= 1);
           console.log(`🧝 ${this.getNombre()} ha lanzado una 🏹 le restan un total de ${this.getCantidadFlechas()} flechas.`)
        } else {
            console.log(`🧝 ${this.getNombre()} ha lanzado todas sus flechas ya no puede lanzar más 🏹.`) 
        }
    }

    public obtenerInformacion(): string {
        return `🧝 ${this.nombre} - Nivel: ${this.nivel}, Puntos De Vida: ${this.puntosDeVida}, Cantidad de Flechas: ${this.cantidadFlechas}, Equipamiento: ${this.equipamiento}, Precisión: ${this.precision}.`
    }
}

export class ArqueroEvolucionado extends Arquero {
    private experiencia: number;

    constructor(nombre: string, nivel: number, puntosDeVida: number, cantidadFlechas: number, equipamiento: string, precision: number, experiencia: number) {
        super(nombre, nivel, puntosDeVida, cantidadFlechas, equipamiento, precision);
        this.experiencia = experiencia;
    }

    public getExperiencia(): number {
        return this.experiencia;
    }

    public setExperiencia(experiencia: number): void {
        this.experiencia = experiencia;
    }

    public atacar(personaje: Personaje): void { 
        personaje.setPuntosDeVida(personaje.getPuntosDeVida() + 25);
        this.sumarExperiencia();
        console.log(`🧝 ${this.nombre} está ATACANDO y ha ganado 100 puntos de Experiencia.`);
        console.log(`Tras el ataque ${this.nombre} obtuvó 25 puntos de vida por lo cual ahora tiene un total de ${this.puntosDeVida} puntos ❤️  y su experiencia es igual a ${this.experiencia}.`);
     }

     public sumarExperiencia(): void {
        this.experiencia += 100;
    }
 
     public defender(personaje: Personaje): void {
        if(this.puntosDeVida > 1) {
         personaje.setPuntosDeVida(personaje.getPuntosDeVida() -5)
         console.log(`🧝 ${this.nombre} se está DEFENDIENDO`);
         console.log(`Tras defenderse ${this.nombre} perdió 5 puntos de vida por lo cual ahora tiene un total de ${this.puntosDeVida} puntos ❤️`);
        } else {
            console.log(`🧝 ${this.nombre} ha MUERTO 💀`);
        }
    }

    public obtenerInformacion(): string {
        return `🧝 ${this.nombre} - Nivel: ${this.nivel}, Puntos De Vida: ${this.puntosDeVida}, Cantidad de Flechas: ${this.cantidadFlechas}, Equipamiento: ${this.equipamiento}, Precisión: ${this.precision}, Experiencia: ${this.experiencia}.`
    }
}