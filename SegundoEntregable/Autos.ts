export class Auto {
    private marca: string;
    private modelo: string;
    private patente: string;
    private titular: string;

    constructor(marca: string, modelo: string, patente: string, titular: string) {
        this.marca = marca;
        this.modelo = modelo;
        this.patente = patente;
        this.titular = titular;
    }

    public getMarca():string {
        return this.marca;
    }

    public getModelo():string {
        return this.modelo;
    }

    public getPatente():string {
        return this.patente;
    }

    public getTitular():string {
        return this.titular;
    }

    public setMarca(marca: string): void {
        this.marca = marca;
    }

    public setModelo(modelo: string): void {
        this.modelo = modelo;
    }

    public setPatente(patente: string): void {
        this.patente = patente;
    }

    public setTitular(titular: string): void {
        this.titular = titular;
    }
}