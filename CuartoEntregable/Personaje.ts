export abstract class Personaje {
    protected nombre: string;
    protected nivel: number;
    protected puntosDeVida: number;

    public atacar(): void {
        console.log("El personaje está ATACANDO");
    }

    public defender(): void {
        console.log("El personaje se está DEFENDIENDO");
    }
}