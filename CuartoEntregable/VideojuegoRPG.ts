
import { Mago } from "./Mago";
import { Luchador } from "./Luchador";
import { Arquero } from "./Arquero";

//CREAR MAGOS
let MagoIlusionista = new Mago("El Ilusionista", 5, 50, " Se trata de un mago capaz de crear ilusiones, e incluso de clonarse. Puede engañar, distraer y confundir a sus enemigos.");
let MagoElementalist = new Mago("Elementalist", 8, 100, "Está especializado en el dominio de uno o más elementos naturales o supranaturales, capaz de controlarlos e invocar criaturas elementales." );

//CREAR LUCHADORES 
let LuchadorCaballero = new Luchador("El Caballero", 9, 200, "Armadura");
let LuchadorGuerrero = new Luchador("La Bestia", 10, 250, "Armas Largas");

//CREAR ARQUERO
let ArqueroAloy = new Arquero("La Ungida", 7, 120, 50, "Arco, lanza, tirachinas, lanzacuerdas, arma congelante, lanzallamas");

console.log(MagoIlusionista);
MagoIlusionista.atacar();
