export class Moto {
    private marca: string;
    private modelo: string;
    private anio: number;
    private patente: string;
    private titular: string;

    constructor(marca: string, modelo: string, anio: number, patente: string, titular: string) {
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

    public getAnio(): number {
        return this.anio;
    }

    public getPatente():string {
        return this.patente;
    }

    public getTitular():string {
        return this.titular;
    }

    public setMarca(marca: string): void {
        if(marca != "") {
            this.marca = "No se introdujó el nombre de una marca";
            } else 
            this.marca = marca;   
    }

    public setModelo(modelo: string): void {
        if(modelo != "") {
            this.modelo = "No se introdujó el nombre de un modelo";
        } else
        this.modelo = modelo;
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
}