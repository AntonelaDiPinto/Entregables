"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Mago_1 = require("./Mago");
var Luchador_1 = require("./Luchador");
var Arquero_1 = require("./Arquero");
//CREAR MAGOS
var MagoIlusionista = new Mago_1.Mago("El Ilusionista", 5, 50, " Se trata de un mago capaz de crear ilusiones, e incluso de clonarse. Puede engañar, distraer y confundir a sus enemigos.");
var MagoElementalist = new Mago_1.Mago("Elementalist", 8, 100, "Está especializado en el dominio de uno o más elementos naturales o supranaturales, capaz de controlarlos e invocar criaturas elementales.");
//CREAR LUCHADORES 
var LuchadorCaballero = new Luchador_1.Luchador("El Caballero", 9, 200, "Armadura");
var LuchadorGuerrero = new Luchador_1.Luchador("La Bestia", 10, 250, "Armas Largas");
//CREAR ARQUERO
var ArqueroAloy = new Arquero_1.Arquero("La Ungida", 7, 120, 50, "Arco, lanza, tirachinas, lanzacuerdas, arma congelante, lanzallamas");
console.log(MagoIlusionista);
MagoIlusionista.atacar();
