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
exports.Mago = void 0;
var Personaje_1 = require("./Personaje");
var Mago = /** @class */ (function (_super) {
    __extends(Mago, _super);
    function Mago(nombre, nivel, puntosDeVida, trucosDeMagia, mana) {
        var _this = _super.call(this, nombre, nivel, puntosDeVida) || this;
        _this.trucosDeMagia = trucosDeMagia;
        _this.mana = mana;
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
        console.log("".concat(this.getNombre(), " est\u00E1 ATACANDO"));
        console.log("Tras el ataque ".concat(this.getNombre(), " obtuv\u00F3 5 puntos de vida por lo cual ahora tiene un total de ").concat(this.getPuntosDeVida(), " puntos \u2764\uFE0F"));
    };
    Mago.prototype.defender = function (personaje) {
        if (this.puntosDeVida > 1) {
            personaje.setPuntosDeVida(personaje.getPuntosDeVida() - 5);
            console.log("".concat(this.getNombre(), " se est\u00E1 DEFENDIENDO"));
            console.log("Tras defenderse ".concat(this.getNombre(), " perdi\u00F3 20 puntos de vida por lo cual ahora tiene un total de ").concat(this.getPuntosDeVida(), " puntos \u2764\uFE0F"));
        }
        else {
            console.log("".concat(this.getNombre(), " ha MUERTO \uD83D\uDC80"));
        }
    };
    Mago.prototype.hechizar = function (mago) {
        if (this.mana > 0) {
            mago.setMana(this.mana -= 1);
            console.log("".concat(mago.getNombre(), " ha Hechizado \uD83D\uDE42 y ahora su mana es de ").concat(mago.getMana(), "."));
        }
        else {
            console.log("".concat(mago.getNombre(), " ya no tiene mana por lo cual no puede realizar m\u00E1s Hechizos \uD83D\uDE1E"));
        }
    };
    return Mago;
}(Personaje_1.Personaje));
exports.Mago = Mago;
