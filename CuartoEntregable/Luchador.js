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
exports.Luchador = void 0;
var Personaje_1 = require("./Personaje");
var Luchador = /** @class */ (function (_super) {
    __extends(Luchador, _super);
    function Luchador(nombre, nivel, puntosDeVida, armaDisponible, nivelFuerza) {
        var _this = _super.call(this, nombre, nivel, puntosDeVida) || this;
        _this.armaDisponible = armaDisponible;
        _this.nivelFuerza = nivelFuerza;
        return _this;
    }
    Luchador.prototype.getArmaDisponible = function () {
        return this.armaDisponible;
    };
    Luchador.prototype.getNivelFuerza = function () {
        return this.nivelFuerza;
    };
    Luchador.prototype.serArmaDisponible = function (armaDisponible) {
        this.armaDisponible = armaDisponible;
    };
    Luchador.prototype.setNivelFuerza = function (nivelFuerza) {
        this.nivelFuerza = nivelFuerza;
    };
    Luchador.prototype.atacar = function (personaje) {
        personaje.setPuntosDeVida(personaje.getPuntosDeVida() + 20);
        console.log("".concat(this.getNombre(), " est\u00E1 ATACANDO"));
        console.log("Tras el ataque ".concat(this.getNombre(), " obtuv\u00F3 20 puntos de vida por lo cual ahora tiene un total de ").concat(this.getPuntosDeVida(), " puntos \u2764\uFE0F"));
    };
    Luchador.prototype.defender = function (personaje) {
        if (this.puntosDeVida > 1) {
            personaje.setPuntosDeVida(personaje.getPuntosDeVida() - 20);
            console.log("".concat(this.getNombre(), " se est\u00E1 DEFENDIENDO"));
            console.log("Tras defenderse ".concat(this.getNombre(), " perdi\u00F3 20 puntos de vida por lo cual ahora tiene un total de ").concat(this.getPuntosDeVida(), " puntos \u2764\uFE0F"));
        }
        else {
            console.log("".concat(this.getNombre(), " ha MUERTO \uD83D\uDC80"));
        }
    };
    Luchador.prototype.evolucionar = function (luchador) {
        if (this.puntosDeVida >= 100) {
            _super.prototype.setNivel.call(this, 10);
            luchador.setNivelFuerza(this.nivelFuerza = 500);
            luchador.serArmaDisponible(this.armaDisponible = "Espada de Diamante ⚔️");
            console.log("".concat(this.getNombre(), " ha EVOLICIONADO, ha alcanzado el nivel 10, ahora su nivel de fuerza es de ").concat(this.nivelFuerza, " y tiene disponilbe un arma nueva: ").concat(this.armaDisponible, "."));
        }
        else {
            console.log("".concat(this.getNombre(), " a\u00FAn no ha evolucionado."));
        }
    };
    return Luchador;
}(Personaje_1.Personaje));
exports.Luchador = Luchador;
