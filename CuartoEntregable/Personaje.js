"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Personaje = void 0;
var Personaje = /** @class */ (function () {
    function Personaje() {
    }
    Personaje.prototype.atacar = function () {
        console.log("El personaje está ATACANDO");
    };
    Personaje.prototype.defender = function () {
        console.log("El personaje se está DEFENDIENDO");
    };
    return Personaje;
}());
exports.Personaje = Personaje;
