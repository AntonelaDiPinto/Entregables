import { Auto } from "./Autos";
import { Moto } from "./Motos";
import { Camion } from "./Camiones";

class RegistroAutomotor {
    private nombreRegistro: string;
    private localidad: string;
    private autos: Auto[];
    private motos: Moto[];
    private camiones: Camion[];

    constructor(nombreRegistro: string, localidad: string, autos?: Auto[], motos?: Moto[], camiones?: Camion[]) {
        this.nombreRegistro = nombreRegistro;
        this.localidad = localidad;
        if (autos != undefined) {
            this.autos = autos;
        } else {
            this.autos = [];
        }
        if (motos != undefined) {
            this.motos = motos;
        } else {
            this.motos = [];
        }
        if (camiones != undefined) {
            this.camiones = camiones;
        } else {
            this.camiones = [];
        }
    }

    public getNombreRegistro(): string {
        return this.nombreRegistro;

    }

    public getLocalidad(): string {
        return this.localidad;

    }

    public setNombreRegistro(nombreRegistro: string): void {
        this.nombreRegistro = nombreRegistro;
    }

    public setLocalidad(localidad: string): void {
        this.localidad = localidad;
    }

}