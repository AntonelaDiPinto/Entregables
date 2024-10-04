export class Vehiculo {
    protected marca: string;
    protected modelo: string;
    protected patente: string;
    protected titular: string;

    constructor(marca: string, modelo: string, patente: string, titular: string) {
        this.marca = marca;
        this.modelo = modelo;
        this.patente = patente;
        this.titular = titular;
    }

    public getMarca(): string {
        return this.marca;
    }

    public getModelo(): string {
        return this.modelo;
    }

    public getPatente(): string {
        return this.patente;
    }

    public getTitular(): string {
        return this.titular;
    }

    public setModelo(modelo: string): void {
        this.modelo = modelo;
    }

    public setMarca(marca: string): void {
        this.marca = marca;
    }

    public setPatente(patente: string): void {
        this.patente = patente;
    }

    public setTitular(titular: string): void {
        this.titular = titular;
    }

    public obtenerInfo(): string {
        return `El vehículo consultado es: Marca: ${this.marca}, Modelo: ${this.modelo}, Patente: ${this.patente}, Titular: ${this.titular}`;
    }

}