"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vehiculo = void 0;
var Vehiculo = /** @class */ (function () {
    function Vehiculo(marca, modelo, anio, patente, titular) {
        this.marca = marca;
        this.modelo = modelo;
        this.anio = anio;
        this.patente = patente;
        this.titular = titular;
    }
    Vehiculo.prototype.getMarca = function () {
        return this.marca;
    };
    Vehiculo.prototype.getModelo = function () {
        return this.modelo;
    };
    Vehiculo.prototype.getAnio = function () {
        return this.anio;
    };
    Vehiculo.prototype.getPatente = function () {
        return this.patente;
    };
    Vehiculo.prototype.getTitular = function () {
        return this.titular;
    };
    Vehiculo.prototype.setModelo = function (modelo) {
        this.modelo = modelo;
    };
    Vehiculo.prototype.setMarca = function (marca) {
        this.marca = marca;
    };
    Vehiculo.prototype.setAnio = function (anio) {
        this.anio = anio;
    };
    Vehiculo.prototype.setPatente = function (patente) {
        this.patente = patente;
    };
    Vehiculo.prototype.setTitular = function (titular) {
        this.titular = titular;
    };
    Vehiculo.prototype.obtenerInfo = function () {
        return "El veh\u00EDculo consultado es: Marca: ".concat(this.marca, ", Modelo: ").concat(this.modelo, ", Patente: ").concat(this.patente, ", Titular: ").concat(this.titular);
    };
    return Vehiculo;
}());
exports.Vehiculo = Vehiculo;
