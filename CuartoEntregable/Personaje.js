"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Personaje = void 0;
var Personaje = /** @class */ (function () {
    function Personaje(nombre, nivel, puntosDeVida) {
        this.nombre = nombre;
        this.nivel = 1;
        this.puntosDeVida = puntosDeVida;
    }
    Personaje.prototype.getNombre = function () {
        return this.nombre;
    };
    Personaje.prototype.getNivel = function () {
        return this.nivel;
    };
    Personaje.prototype.getPuntosDeVida = function () {
        return this.puntosDeVida;
    };
    Personaje.prototype.setNivel = function (nivel) {
        this.nivel = nivel;
    };
    Personaje.prototype.setPuntosDeVida = function (puntosDeVida) {
        if (puntosDeVida < 0) {
            this.puntosDeVida = 0;
        }
        else {
            this.puntosDeVida = puntosDeVida;
        }
    };
    return Personaje;
}());
exports.Personaje = Personaje;
