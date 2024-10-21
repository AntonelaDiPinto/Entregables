//CONSIGNA: 
//Crear un sistema de personajes de un videojuego RPG utilizando herencia y polimorfismo.
//Los personajes tendrán características y habilidades únicas, y algunos podrán evolucionar a versiones mejoradas con nuevas habilidades.

import { Mago, MagoEvolucionado } from "./Mago";
import { Luchador, LuchadorEvolucionado } from "./Luchador";
import { Arquero, ArqueroEvolucionado } from "./Arquero";
import { Personaje } from "./Personaje";

//CREAR MAGOS
let MagoIlusionista: Mago = new Mago("El Ilusionista", 5, 50, "Se trata de un mago capaz de crear ilusiones, e incluso de clonarse. Puede engañar, distraer y confundir a sus enemigos", 10);
let MagoElementalist: Mago = new Mago("Elementalist", 8, 100 , "Está especializado en el dominio de uno o más elementos naturales o supranaturales, capaz de controlarlos e invocar criaturas elementales.", 10);
let MagoSanador: MagoEvolucionado = new MagoEvolucionado("El Curandero", 10, 200, "Se trata de un mago capaz de sanar heridas de leves a graves", 20, 15);
//CREAR LUCHADORES 
let LuchadorCaballero: Luchador = new Luchador("El Caballero", 6, 60, "Armadura", 85);
let LuchadorGuerrero: Luchador = new Luchador("La Bestia", 8, 80, "Armas Largas", 90);
let LuchadorLegendario: LuchadorEvolucionado = new LuchadorEvolucionado("El Legendario", 10, 100, "Espada de Diamante ⚔️", 500, "Escudo de Hierro 🛡️");

//CREAR ARQUERO
let ArqueroAloy: Arquero = new Arquero("La Ungida", 7, 120, 50, "Arco, lanza, tirachinas, lanzacuerdas, lanzallamas", 75);
let ArqueroCazador: ArqueroEvolucionado = new ArqueroEvolucionado("El Cazador", 10, 100, 80, "Boomerang 🪃", 90, 100);

/*console.log(MagoIlusionista.obtenerInformacion());
MagoIlusionista.atacar(MagoIlusionista);
MagoIlusionista.hechizar(MagoIlusionista);
MagoElementalist.encontrarCajaMagica("Hipnotizar al rival 🌀🌀.");*/

MagoSanador.curar(LuchadorCaballero);
console.log(MagoSanador.obtenerInformacion());


/*console.log(LuchadorGuerrero);
LuchadorGuerrero.atacar(LuchadorGuerrero);

console.log(LuchadorLegendario.obtenerInformacion());

console.log(ArqueroAloy);
ArqueroAloy.atacar(ArqueroAloy);
ArqueroAloy.lanzarFlechas(ArqueroAloy);

console.log(ArqueroCazador.obtenerInformacion());
ArqueroCazador.atacar(ArqueroCazador);
console.log(ArqueroCazador.getExperiencia());
ArqueroCazador.atacar(ArqueroCazador);
console.log(ArqueroCazador.getExperiencia());
console.log(ArqueroCazador.obtenerInformacion());*/






