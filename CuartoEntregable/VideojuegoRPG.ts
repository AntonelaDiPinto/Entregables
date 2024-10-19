//CONSIGNA: 
//Crear un sistema de personajes de un videojuego RPG utilizando herencia y polimorfismo.
//Los personajes tendrán características y habilidades únicas, y algunos podrán evolucionar a versiones mejoradas con nuevas habilidades.

import { Mago } from "./Mago";
import { Luchador } from "./Luchador";
import { Arquero } from "./Arquero";
import { Personaje } from "./Personaje";

//CREAR MAGOS
let MagoIlusionista = new Mago("El Ilusionista", 5, 50, " Se trata de un mago capaz de crear ilusiones, e incluso de clonarse. Puede engañar, distraer y confundir a sus enemigos", 10);
let MagoElementalist = new Mago("Elementalist", 8, 100 , "Está especializado en el dominio de uno o más elementos naturales o supranaturales, capaz de controlarlos e invocar criaturas elementales.", 20);

//CREAR LUCHADORES 
let LuchadorCaballero = new Luchador("El Caballero", 9, 60, "Armadura", 85);
let LuchadorGuerrero = new Luchador("La Bestia", 10, 100, "Armas Largas", 100);

//CREAR ARQUERO
let ArqueroAloy = new Arquero("La Ungida", 7, 120, 50, "Arco, lanza, tirachinas, lanzacuerdas, lanzallamas", 75);

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


