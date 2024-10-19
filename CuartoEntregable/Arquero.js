"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Arquero = void 0;
var Personaje_1 = require("./Personaje");
var Arquero = /** @class */ (function (_super) {
    __extends(Arquero, _super);
    function Arquero(nombre, nivel, puntosDeVida, cantidadFlechas, equipamiento, precision) {
        var _this = _super.call(this, nombre, nivel, puntosDeVida) || this;
        _this.cantidadFlechas = cantidadFlechas;
        _this.equipamiento = equipamiento;
        _this.precision = precision;
        return _this;
    }
    Arquero.prototype.getCantidadFlechas = function () {
        return this.cantidadFlechas;
    };
    Arquero.prototype.getEquipamiento = function () {
        return this.equipamiento;
    };
    Arquero.prototype.getPrecision = function () {
        return this.precision;
    };
    Arquero.prototype.setCantidadFlechas = function (cantidadFlechas) {
        this.cantidadFlechas = cantidadFlechas;
    };
    Arquero.prototype.setEquipamiento = function (equipamiento) {
        this.equipamiento = equipamiento;
    };
    Arquero.prototype.atacar = function (personaje) {
        personaje.setPuntosDeVida(personaje.getPuntosDeVida() + 10);
        console.log("".concat(this.getNombre(), " est\u00E1 ATACANDO"));
        console.log("Tras el ataque ".concat(this.getNombre(), " obtuv\u00F3 10 puntos de vida por lo cual ahora tiene un total de ").concat(this.getPuntosDeVida(), " puntos \u2764\uFE0F"));
    };
    Arquero.prototype.defender = function (personaje) {
        if (this.puntosDeVida > 1) {
            personaje.setPuntosDeVida(personaje.getPuntosDeVida() - 10);
            console.log("".concat(this.getNombre(), " se est\u00E1 DEFENDIENDO"));
            console.log("Tras defenderse ".concat(this.getNombre(), " perdi\u00F3 20 puntos de vida por lo cual ahora tiene un total de ").concat(this.getPuntosDeVida(), " puntos \u2764\uFE0F"));
        }
        else {
            console.log("".concat(this.getNombre(), " ha MUERTO \uD83D\uDC80"));
        }
    };
    Arquero.prototype.lanzarFlechas = function (arquero) {
        if (this.cantidadFlechas > 0) {
            arquero.setCantidadFlechas(this.cantidadFlechas -= 1);
            console.log("".concat(this.getNombre(), " ha lanzado una \uD83C\uDFF9 le restan un total de ").concat(this.getCantidadFlechas(), " flechas."));
        }
        else {
            console.log("".concat(this.getNombre(), " ha lanzado todas sus flechas ya no puede lanzar m\u00E1s \uD83C\uDFF9."));
        }
    };
    return Arquero;
}(Personaje_1.Personaje));
exports.Arquero = Arquero;
