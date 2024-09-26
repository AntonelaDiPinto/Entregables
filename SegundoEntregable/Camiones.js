"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Camion = void 0;
var Camion = /** @class */ (function () {
    function Camion(marca, modelo, anio, patente, titular) {
        this.marca = marca;
        this.modelo = modelo;
        this.patente = patente;
        this.titular = titular;
    }
    Camion.prototype.getMarca = function () {
        return this.marca;
    };
    Camion.prototype.getModelo = function () {
        return this.modelo;
    };
    Camion.prototype.getAnio = function () {
        return this.anio;
    };
    Camion.prototype.getPatente = function () {
        return this.patente;
    };
    Camion.prototype.getTitular = function () {
        return this.titular;
    };
    Camion.prototype.setMarca = function (marca) {
        this.marca = marca;
    };
    Camion.prototype.setModelo = function (modelo) {
        this.modelo = modelo;
    };
    Camion.prototype.setAnio = function (anio) {
        this.anio = anio;
    };
    Camion.prototype.setPatente = function (patente) {
        this.patente = patente;
    };
    Camion.prototype.setTitular = function (titular) {
        this.titular = titular;
    };
    return Camion;
}());
exports.Camion = Camion;
