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
exports.Auto = void 0;
var Vehiculo_1 = require("./Vehiculo");
var Auto = /** @class */ (function (_super) {
    __extends(Auto, _super);
    function Auto(marca, modelo, anio, patente, titular, numeroPuertas, color) {
        var _this = _super.call(this, marca, modelo, anio, patente, titular) || this;
        _this.numeroPuertas = numeroPuertas;
        _this.color = color;
        return _this;
    }
    Auto.prototype.getNumeroPuertas = function () {
        return this.numeroPuertas;
    };
    Auto.prototype.getColor = function () {
        return this.color;
    };
    return Auto;
}(Vehiculo_1.Vehiculo));
exports.Auto = Auto;
