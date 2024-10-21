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
exports.LuchadorEvolucionado = exports.Luchador = void 0;
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
        this.nivelFuerza += 10;
        console.log("\uD83E\uDD77  ".concat(this.nombre, " est\u00E1 ATACANDO"));
        console.log("Tras el ataque ".concat(this.nombre, " obtuv\u00F3 20 puntos de vida por lo cual ahora tiene un total de ").concat(this.puntosDeVida, " puntos \uD83D\uDC99  .Su nivel de fuerza ha aumentado y es de ").concat(this.nivelFuerza, "."));
    };
    Luchador.prototype.defender = function (personaje) {
        if (this.puntosDeVida > 1) {
            personaje.setPuntosDeVida(personaje.getPuntosDeVida() - 20);
            this.nivelFuerza -= 10;
            console.log("\uD83E\uDD77  ".concat(this.nombre, " se est\u00E1 DEFENDIENDO"));
            console.log("Tras defenderse ".concat(this.nombre, " perdi\u00F3 20 puntos de vida por lo cual ahora tiene un total de ").concat(this.puntosDeVida, " puntos \uD83D\uDC99  .Su nivel de fuerza ha disminuido y es de ").concat(this.nivelFuerza, "."));
        }
        else {
            console.log("\uD83E\uDD77  ".concat(this.nombre, " ha MUERTO \uD83D\uDC80"));
        }
    };
    Luchador.prototype.obtenerInformacion = function () {
        return "\uD83E\uDD77  ".concat(this.nombre, " - Nivel: ").concat(this.nivel, ", Puntos De Vida: ").concat(this.puntosDeVida, ", Arma Disponible: ").concat(this.armaDisponible, ", Nivel de Fuerza: ").concat(this.nivelFuerza, ".");
    };
    return Luchador;
}(Personaje_1.Personaje));
exports.Luchador = Luchador;
var LuchadorEvolucionado = /** @class */ (function (_super) {
    __extends(LuchadorEvolucionado, _super);
    function LuchadorEvolucionado(nombre, nivel, puntosDeVida, armaDisponible, nivelFuerza, elementoDeDefensa) {
        var _this = _super.call(this, nombre, nivel, puntosDeVida, armaDisponible, nivelFuerza) || this;
        _this.elementoDeDefensa = elementoDeDefensa;
        return _this;
    }
    LuchadorEvolucionado.prototype.getElementoDeDefensa = function () {
        return this.elementoDeDefensa;
    };
    LuchadorEvolucionado.prototype.setElementoDeDefensa = function (elementoDeDefensa) {
        this.elementoDeDefensa = elementoDeDefensa;
    };
    LuchadorEvolucionado.prototype.atacar = function (luchadorEvolucionado) {
        luchadorEvolucionado.setPuntosDeVida(luchadorEvolucionado.getPuntosDeVida() + 50);
        this.nivelFuerza += 30;
        console.log("\uD83E\uDD77  ".concat(this.nombre, " es un Luchador Evolucionado y est\u00E1 ATACANDO con su nueva arma disponible ").concat(this.armaDisponible, "."));
        console.log("Tras el ataque ".concat(this.nombre, " obtuv\u00F3 50 puntos de vida por lo cual ahora tiene un total de ").concat(this.puntosDeVida, " puntos \uD83D\uDC99  .Su nivel de fuerza ha aumentado y es de ").concat(this.nivelFuerza, "."));
    };
    LuchadorEvolucionado.prototype.defender = function (luchadorEvolucionado) {
        if (this.puntosDeVida > 1) {
            luchadorEvolucionado.setPuntosDeVida(luchadorEvolucionado.getPuntosDeVida() - 10);
            this.nivelFuerza -= 5;
            console.log("\uD83E\uDD77  ".concat(this.nombre, " es un Luchador Evolucionado y se est\u00E1 DEFENDIENDO con su ").concat(this.armaDisponible, "."));
            console.log("Tras defenderse ".concat(this.nombre, " perdi\u00F3 10 puntos de vida por lo cual ahora tiene un total de ").concat(this.puntosDeVida, " puntos \uD83D\uDC99  .Su nivel de fuerza ha disminuido y es de ").concat(this.nivelFuerza, "."));
        }
        else {
            console.log("\uD83E\uDD77  ".concat(this.nombre, " ha MUERTO \uD83D\uDC80"));
        }
    };
    LuchadorEvolucionado.prototype.obtenerInformacion = function () {
        return "\uD83E\uDD77  ".concat(this.nombre, " - Nivel: ").concat(this.nivel, ", Puntos De Vida: ").concat(this.puntosDeVida, ", Arma Disponible: ").concat(this.armaDisponible, ", Elemento de Defensa: ").concat(this.elementoDeDefensa, "  , Nivel de Fuerza: ").concat(this.nivelFuerza, ". ");
    };
    return LuchadorEvolucionado;
}(Luchador));
exports.LuchadorEvolucionado = LuchadorEvolucionado;
