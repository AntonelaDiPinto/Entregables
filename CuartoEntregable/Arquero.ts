import { Personaje } from "./Personaje";

export class Arquero extends Personaje {
    private cantidadFlechas: number;
    private equipamiento: string;
    private precision: number;

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
        console.log(`${this.getNombre()} está ATACANDO`);
        console.log(`Tras el ataque ${this.getNombre()} obtuvó 10 puntos de vida por lo cual ahora tiene un total de ${this.getPuntosDeVida()} puntos ❤️`);
     }
 
     public defender(personaje: Personaje): void {
        if(this.puntosDeVida > 1) {
         personaje.setPuntosDeVida(personaje.getPuntosDeVida() - 10)
         console.log(`${this.getNombre()} se está DEFENDIENDO`);
         console.log(`Tras defenderse ${this.getNombre()} perdió 20 puntos de vida por lo cual ahora tiene un total de ${this.getPuntosDeVida()} puntos ❤️`);
        } else {
            console.log(`${this.getNombre()} ha MUERTO 💀`)
        }
    }

    public lanzarFlechas(arquero: Arquero): void {
        if(this.cantidadFlechas > 0){ 
           arquero.setCantidadFlechas(this.cantidadFlechas -= 1);
           console.log(`${this.getNombre()} ha lanzado una 🏹 le restan un total de ${this.getCantidadFlechas()} flechas.`)
        } else {
            console.log(`${this.getNombre()} ha lanzado todas sus flechas ya no puede lanzar más 🏹.`) 
        }
    }

    public evolucionar(arquero: Arquero): void {
        if(this.puntosDeVida >= 150) {
            super.setNivel(10); 
            arquero.setPrecision(this.precision = 200);
            arquero.setEquipamiento(this.equipamiento = "Arma Congelante ❄️");
            console.log(`${this.getNombre()} ha EVOLICIONADO, ha alcanzado el nivel 10, ahora su precision es de ${this.precision} y tiene un nuevo equipamiento: ${this.equipamiento}.`)
        } else {
            console.log(`${this.getNombre()} aún no ha evolucionado.`)
        }
    }
}