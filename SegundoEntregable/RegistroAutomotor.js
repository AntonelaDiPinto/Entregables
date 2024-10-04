"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegistroAutomotor = void 0;
var RegistroAutomotor = /** @class */ (function () {
    function RegistroAutomotor(nombreRegistro, localidad, autos, motos, camiones) {
        this.nombreRegistro = nombreRegistro;
        this.localidad = localidad;
        if (autos != undefined) {
            this.autos = autos;
        }
        else {
            this.autos = [];
        }
        if (motos != undefined) {
            this.motos = motos;
        }
        else {
            this.motos = [];
        }
        if (camiones != undefined) {
            this.camiones = camiones;
        }
        else {
            this.camiones = [];
        }
    }
    RegistroAutomotor.prototype.getNombreRegistro = function () {
        return this.nombreRegistro;
    };
    RegistroAutomotor.prototype.getLocalidad = function () {
        return this.localidad;
    };
    RegistroAutomotor.prototype.setNombreRegistro = function (nombreRegistro) {
        this.nombreRegistro = nombreRegistro;
    };
    RegistroAutomotor.prototype.setLocalidad = function (localidad) {
        this.localidad = localidad;
    };
    RegistroAutomotor.prototype.agregarAuto = function (autos) {
        // Si la patente es distinto de "" y es distinto de undefined agregar auto sino mostrar error
        this.autos.push(autos);
    };
    RegistroAutomotor.prototype.agregarMoto = function (motos) {
        this.motos.push(motos);
    };
    RegistroAutomotor.prototype.agregarCamion = function (camiones) {
        this.camiones.push(camiones);
    };
    RegistroAutomotor.prototype.obtenerAutoPorPatente = function (patente) {
        return this.autos.find(function (autos) { return autos.getPatente() === patente; });
    };
    /*public bajaAuto(patente: string): void {
        this.autos = this.autos.filter(autos => autos.getPatente() !== patente);
    }*/
    RegistroAutomotor.prototype.bajaAuto = function (patente) {
        var index = this.autos.findIndex(function (autos) { return autos.getPatente() === patente; });
        if (index !== -1) {
            this.autos.splice(index, 1);
            return true;
        }
        return false;
    };
    /*public bajaMoto(patente: string): void {
        this.motos = this.motos.filter(motos => motos.getPatente() !== patente);
    }*/
    RegistroAutomotor.prototype.bajaMoto = function (patente) {
        var index = this.motos.findIndex(function (motos) { return motos.getPatente() === patente; });
        if (index !== -1) {
            this.motos.splice(index, 1);
            return true;
        }
        return false;
    };
    /*public bajaCamion(patente: string): void {
        this.camiones = this.camiones.filter(camiones => camiones.getPatente() !== patente);
    }*/
    RegistroAutomotor.prototype.bajaCamion = function (patente) {
        var index = this.camiones.findIndex(function (camiones) { return camiones.getPatente() === patente; });
        if (index !== -1) {
            this.camiones.splice(index, 1);
            return true;
        }
        return false;
    };
    return RegistroAutomotor;
}());
exports.RegistroAutomotor = RegistroAutomotor;
