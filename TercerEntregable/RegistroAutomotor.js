"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegistroAutomotor = void 0;
var RegistroAutomotor = /** @class */ (function () {
    function RegistroAutomotor(vehiculos, nombre, localidad) {
        this.vehiculos = vehiculos;
    }
    RegistroAutomotor.prototype.getNombre = function () {
        return this.nombre;
    };
    RegistroAutomotor.prototype.getLocalidad = function () {
        return this.localidad;
    };
    RegistroAutomotor.prototype.setNombre = function (nombre) {
        this.nombre = nombre;
    };
    RegistroAutomotor.prototype.setLocalidad = function (localidad) {
        this.localidad = localidad;
    };
    RegistroAutomotor.prototype.agregarVehiculo = function (vehiculo) {
        this.vehiculos.push(vehiculo);
    };
    RegistroAutomotor.prototype.obtenerVehiculoPorPatente = function (patente) {
        return this.vehiculos.find(function (vehiculo) { return vehiculo.getPatente() === patente; });
    };
    RegistroAutomotor.prototype.modificarVehiculo = function (patente, titular) {
        var vehiculo = this.obtenerVehiculoPorPatente(patente);
        if (vehiculo) {
            vehiculo.setTitular(titular);
            return true;
        }
        return false;
    }; // Se modifica solo el titular del vehiculo ya que el resto de los datos no varian.
    RegistroAutomotor.prototype.darDeBajaVehiculo = function (patente) {
        var index = this.vehiculos.findIndex(function (vehiculo) { return vehiculo.getPatente() === patente; });
        if (index !== -1) {
            this.vehiculos.splice(index, 1);
            return true;
        }
        return false;
    };
    RegistroAutomotor.prototype.obtenerTodosLosVehiculos = function () {
        return this.vehiculos.map(function (vehiculo) { return vehiculo.obtenerInfo(); }).join("\n");
    };
    return RegistroAutomotor;
}());
exports.RegistroAutomotor = RegistroAutomotor;
