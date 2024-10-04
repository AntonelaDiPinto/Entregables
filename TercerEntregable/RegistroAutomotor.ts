import { Vehiculo } from "./Vehiculo";

class RegistroAutomotor {
    private vehiculos: Vehiculo[];
    private nombre: string;
    private localidad: string;

    constructor(vehiculos: Vehiculo[], nombre: string, localidad: string) {
        this.vehiculos = vehiculos;   
    }

    public getNombre(): string {
        return this.nombre;
    }

    public getLocalidad(): string {
        return this.localidad;
    }

    public setNombre(nombre: string): void {
        this.nombre = nombre;
    }

    public setLocalidad(localidad: string): void {
        this.localidad = localidad;
    }

    public agregarVehiculo(vehiculo: Vehiculo): void {
        this.vehiculos.push(vehiculo);
    }

    public obtenerVehiculoPorPatente(patente: string): Vehiculo  | undefined {
        return this.vehiculos.find(vehiculo => vehiculo.getPatente() === patente);
    }

   public modificarVehiculo(patente: string, titular: string): boolean {
        const vehiculo = this.obtenerVehiculoPorPatente(patente);
        if (vehiculo) {
            vehiculo.setTitular(titular);
            return true;
        }
        return false;
    } // Se modifica solo el titular del vehiculo ya que el resto de los datos no varian.

 public darDeBajaVehiculo(patente: string): boolean {
        const index = this.vehiculos.findIndex(vehiculo => vehiculo.getPatente() === patente);
        if (index !== -1) {
            this.vehiculos.splice(index, 1);
            return true;
        }
        return false;
    }

    public obtenerTodosLosVehiculos(): string {
        return this.vehiculos.map(vehiculo => vehiculo.obtenerInfo()).join("\n");
    }
}




