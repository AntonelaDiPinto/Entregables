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
exports.MagoEvolucionado = exports.Mago = void 0;
var Personaje_1 = require("./Personaje");
var Mago = /** @class */ (function (_super) {
    __extends(Mago, _super);
    function Mago(nombre, nivel, puntosDeVida, trucosDeMagia, mana) {
        var _this = _super.call(this, nombre, nivel, puntosDeVida) || this;
        _this.trucosDeMagia = trucosDeMagia;
        _this.mana = mana;
        _this.cajaMagica = [];
        return _this;
    }
    Mago.prototype.getTrucosDeMagia = function () {
        return this.trucosDeMagia;
    };
    Mago.prototype.setTrucosDeMagia = function (trucosDeMagia) {
        this.trucosDeMagia = trucosDeMagia;
    };
    Mago.prototype.getMana = function () {
        return this.mana;
    };
    Mago.prototype.setMana = function (mana) {
        this.mana = mana;
    };
    Mago.prototype.atacar = function (personaje) {
        personaje.setPuntosDeVida(personaje.getPuntosDeVida() + 5);
        console.log("\uD83E\uDDD9 ".concat(this.nombre, " est\u00E1 ATACANDO"));
        console.log("Tras el ataque ".concat(this.nombre, " obtuv\u00F3 5 puntos de vida por lo cual ahora tiene un total de ").concat(this.puntosDeVida, " puntos \u2764\uFE0F"));
    };
    Mago.prototype.defender = function (personaje) {
        if (this.puntosDeVida > 1) {
            personaje.setPuntosDeVida(personaje.getPuntosDeVida() - 5);
            console.log("\uD83E\uDDD9 ".concat(this.nombre, " se est\u00E1 DEFENDIENDO"));
            console.log("Tras defenderse ".concat(this.nombre, " perdi\u00F3 5 puntos de vida por lo cual ahora tiene un total de ").concat(this.puntosDeVida, " puntos \u2764\uFE0F"));
        }
        else {
            console.log("".concat(this.nombre, " ha MUERTO \uD83D\uDC80"));
        }
    };
    Mago.prototype.encontrarCajaMagica = function (nuevoAtaque) {
        this.cajaMagica.push(nuevoAtaque);
        console.log("\uD83E\uDDD9 ".concat(this.nombre, " ha encontrado la Caja M\u00E1gica \uD83C\uDF81 y ha aprendido un nuevo ataque: ").concat(nuevoAtaque));
    };
    Mago.prototype.hechizar = function (mago) {
        if (this.mana > 0) {
            mago.setMana(this.mana -= 1);
            console.log("\uD83E\uDDD9 ".concat(mago.nombre, " ha Hechizado \uD83D\uDE42 y ahora su man\u00E1 es de ").concat(mago.mana, "."));
        }
        else {
            console.log("\uD83E\uDDD9 ".concat(mago.nombre, " ya no tiene man\u00E1 por lo cual no puede realizar m\u00E1s Hechizos \uD83D\uDE1E"));
        }
    };
    Mago.prototype.obtenerInformacion = function () {
        return "\uD83E\uDDD9 ".concat(this.nombre, " - Nivel: ").concat(this.nivel, ", Puntos De Vida: ").concat(this.puntosDeVida, ", Trucos de Magia: ").concat(this.trucosDeMagia, ", Man\u00E1: ").concat(this.mana, ".");
    };
    return Mago;
}(Personaje_1.Personaje));
exports.Mago = Mago;
var MagoEvolucionado = /** @class */ (function (_super) {
    __extends(MagoEvolucionado, _super);
    function MagoEvolucionado(nombre, nivel, puntosDeVida, trucosDeMagia, mana, pociones, cajaMagica) {
        var _this = _super.call(this, nombre, nivel, puntosDeVida, trucosDeMagia, mana) || this;
        _this.pociones = pociones;
        return _this;
    }
    MagoEvolucionado.prototype.getPociones = function () {
        return this.pociones;
    };
    MagoEvolucionado.prototype.setPociones = function (pociones) {
        this.pociones = pociones;
    };
    MagoEvolucionado.prototype.curar = function (personaje) {
        if (this.puntosDeVida > 0) {
            this.puntosDeVida += 10;
            this.pociones -= 1;
            console.log("\uD83E\uDDD9 ".concat(this.nombre, " cur\u00F3 a ").concat(personaje.getNombre(), " utilizando una de sus pociones \u2697\uFE0F  y obtuv\u00F3 10 puntos de vida \uD83D\uDC9C."));
        }
        else {
            console.log("\uD83E\uDDD9 ".concat(this.nombre, " no puede curar porque no tiene suficiente vida o no le quedan m\u00E1s pociones."));
        }
    };
    MagoEvolucionado.prototype.recibirDanio = function () {
        if (this.puntosDeVida > 1) {
            this.puntosDeVida -= 10;
            this.mana -= 1;
            console.log("\uD83E\uDDD9 ".concat(this.nombre, " est\u00E1 Siendo Atacado."));
            console.log("Tras el ataque ".concat(this.nombre, " perdi\u00F3 10 puntos de vida por lo cual ahora tiene un total de ").concat(this.puntosDeVida, " puntos \uD83D\uDC9C y se le resto 1 punto de Man\u00E1."));
        }
        else {
            console.log("\uD83E\uDDD9 ".concat(this.nombre, " ha MUERTO \uD83D\uDC80"));
        }
    };
    MagoEvolucionado.prototype.obtenerInformacion = function () {
        return "\uD83E\uDDD9 ".concat(this.nombre, " - Nivel: ").concat(this.nivel, ", Puntos De Vida: ").concat(this.puntosDeVida, ", Trucos de Magia: ").concat(this.trucosDeMagia, ", Man\u00E1: ").concat(this.mana, ", Pociones: ").concat(this.pociones, ".");
    };
    return MagoEvolucionado;
}(Mago));
exports.MagoEvolucionado = MagoEvolucionado;
