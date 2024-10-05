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
exports.Camion = void 0;
var Vehiculo_1 = require("./Vehiculo");
var Camion = /** @class */ (function (_super) {
    __extends(Camion, _super);
    function Camion(marca, modelo, anio, patente, titular, tipo, categoria, designacion) {
        var _this = _super.call(this, marca, modelo, anio, patente, titular) || this;
        _this.tipo = tipo;
        _this.categoria = categoria;
        _this.designacion = designacion;
        return _this;
    }
    Camion.prototype.getTipo = function () {
        return this.tipo;
    };
    Camion.prototype.getCategoria = function () {
        return this.categoria;
    };
    Camion.prototype.getDesignacion = function () {
        return this.designacion;
    };
    return Camion;
}(Vehiculo_1.Vehiculo));
exports.Camion = Camion;
