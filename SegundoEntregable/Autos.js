"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Auto = void 0;
var Auto = /** @class */ (function () {
    function Auto(marca, modelo, anio, patente, titular) {
        this.marca = marca;
        this.modelo = modelo;
        this.patente = patente;
        this.titular = titular;
    }
    Auto.prototype.getMarca = function () {
        return this.marca;
    };
    Auto.prototype.getModelo = function () {
        return this.modelo;
    };
    Auto.prototype.getAnio = function () {
        return this.anio;
    };
    Auto.prototype.getPatente = function () {
        return this.patente;
    };
    Auto.prototype.getTitular = function () {
        return this.titular;
    };
    Auto.prototype.setMarca = function (marca) {
        this.marca = marca;
    };
    Auto.prototype.setModelo = function (modelo) {
        this.modelo = modelo;
    };
    Auto.prototype.setAnio = function (anio) {
        this.anio = anio;
    };
    Auto.prototype.setPatente = function (patente) {
        this.patente = patente;
    };
    Auto.prototype.setTitular = function (titular) {
        this.titular = titular;
    };
    return Auto;
}());
exports.Auto = Auto;
