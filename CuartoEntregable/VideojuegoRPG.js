"use strict";
//CONSIGNA: 
//Crear un sistema de personajes de un videojuego RPG utilizando herencia y polimorfismo.
//Los personajes tendrán características y habilidades únicas, y algunos podrán evolucionar a versiones mejoradas con nuevas habilidades.
Object.defineProperty(exports, "__esModule", { value: true });
var Mago_1 = require("./Mago");
var Luchador_1 = require("./Luchador");
var Arquero_1 = require("./Arquero");
//CREAR MAGOS
var MagoIlusionista = new Mago_1.Mago("El Ilusionista", 5, 50, " Se trata de un mago capaz de crear ilusiones, e incluso de clonarse. Puede engañar, distraer y confundir a sus enemigos", 10);
var MagoElementalist = new Mago_1.Mago("Elementalist", 8, 100, "Está especializado en el dominio de uno o más elementos naturales o supranaturales, capaz de controlarlos e invocar criaturas elementales.", 20);
//CREAR LUCHADORES 
var LuchadorCaballero = new Luchador_1.Luchador("El Caballero", 9, 60, "Armadura", 85);
var LuchadorGuerrero = new Luchador_1.Luchador("La Bestia", 10, 60, "Armas Largas", 100);
//CREAR ARQUERO
var ArqueroAloy = new Arquero_1.Arquero("La Ungida", 7, 120, 50, "Arco, lanza, tirachinas, lanzacuerdas, arma congelante, lanzallamas", 75);
/*console.log(MagoIlusionista);
MagoIlusionista.atacar(MagoIlusionista);
console.log(`Tras el ataque ${MagoIlusionista.getNombre()} obtuvó 5 puntos de vida por lo cual ahora tiene un total de:`, MagoIlusionista.getPuntosDeVida(), "puntos de vida.");
MagoIlusionista.hechizar(MagoIlusionista);
console.log(MagoIlusionista.getMana());*/
console.log(LuchadorGuerrero);
LuchadorGuerrero.atacar(LuchadorGuerrero);
LuchadorGuerrero.evolucionar(LuchadorGuerrero);
/*console.log(ArqueroAloy);
ArqueroAloy.atacar(ArqueroAloy);
ArqueroAloy.lanzarFlechas(ArqueroAloy);
console.log(ArqueroAloy);*/
