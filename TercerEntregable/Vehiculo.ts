export class Vehiculo {
    protected marca: string;
    protected modelo: string;
    protected anio: number;
    protected patente: string;
    protected titular: string;

    constructor(marca: string, modelo: string, anio: number, patente: string, titular: string) {
        this.marca = marca;
        this.modelo = modelo;
        this.anio = anio;
        this.patente = patente;
        this.titular = titular;
    }

    public getMarca(): string {
        return this.marca;
    }

    public getModelo(): string {
        return this.modelo;
    }

    public getAnio(): number {
        return this.anio;
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

    public setAnio(anio: number): void {
        this.anio = anio;
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