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
        this.autos.push(autos);
    };
    RegistroAutomotor.prototype.agregarMoto = function (motos) {
        this.motos.push(motos);
    };
    RegistroAutomotor.prototype.agregarCamion = function (camiones) {
        this.camiones.push(camiones);
    };
    RegistroAutomotor.prototype.bajaAuto = function (patente) {
        this.autos = this.autos.filter(function (autos) { return autos.getPatente() !== patente; });
    };
    RegistroAutomotor.prototype.bajaMoto = function (patente) {
        this.motos = this.motos.filter(function (motos) { return motos.getPatente() !== patente; });
    };
    RegistroAutomotor.prototype.bajaCamion = function (patente) {
        this.camiones = this.camiones.filter(function (camiones) { return camiones.getPatente() !== patente; });
    };
    return RegistroAutomotor;
}());
exports.RegistroAutomotor = RegistroAutomotor;
