export abstract class Personaje {
    protected nombre: string;
    protected nivel: number;
    protected puntosDeVida: number;

    constructor(nombre: string, nivel: number, puntosDeVida: number){
        this.nombre = nombre;
        this.nivel = nivel;
        this.puntosDeVida = puntosDeVida;
    }

    public atacar(): void {
        console.log("El personaje está ATACANDO");
    }

    public defender(): void {
        console.log("El personaje se está DEFENDIENDO");
    }
}