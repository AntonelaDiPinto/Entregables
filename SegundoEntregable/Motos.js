"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Moto = void 0;
var Moto = /** @class */ (function () {
    function Moto(marca, modelo, anio, patente, titular) {
        this.marca = marca;
        this.modelo = modelo;
        this.patente = patente;
        this.titular = titular;
    }
    Moto.prototype.getMarca = function () {
        return this.marca;
    };
    Moto.prototype.getModelo = function () {
        return this.modelo;
    };
    Moto.prototype.getAnio = function () {
        return this.anio;
    };
    Moto.prototype.getPatente = function () {
        return this.patente;
    };
    Moto.prototype.getTitular = function () {
        return this.titular;
    };
    Moto.prototype.setMarca = function (marca) {
        if (marca != "") {
            this.marca = "No se introdujó el nombre de una marca";
        }
        else
            this.marca = marca;
    };
    Moto.prototype.setModelo = function (modelo) {
        if (modelo != "") {
            this.modelo = "No se introdujó el nombre de un modelo";
        }
        else
            this.modelo = modelo;
    };
    Moto.prototype.setAnio = function (anio) {
        this.anio = anio;
    };
    Moto.prototype.setPatente = function (patente) {
        this.patente = patente;
    };
    Moto.prototype.setTitular = function (titular) {
        this.titular = titular;
    };
    return Moto;
}());
exports.Moto = Moto;
