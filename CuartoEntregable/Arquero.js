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
    function Arquero(nombre, nivel, puntosDeVida, cantidadFlechas, equipamiento) {
        var _this = _super.call(this, nombre, nivel, puntosDeVida) || this;
        _this.cantidadFlechas = cantidadFlechas;
        _this.equipamiento = equipamiento;
        return _this;
    }
    Arquero.prototype.getCantidadFlechas = function () {
        return this.cantidadFlechas;
    };
    Arquero.prototype.getEquipamiento = function () {
        return this.equipamiento;
    };
    Arquero.prototype.setCantidadFlechas = function (cantidadFlechas) {
        this.cantidadFlechas = cantidadFlechas;
    };
    Arquero.prototype.setEquipamiento = function (equipamiento) {
        this.equipamiento = equipamiento;
    };
    return Arquero;
}(Personaje_1.Personaje));
exports.Arquero = Arquero;
