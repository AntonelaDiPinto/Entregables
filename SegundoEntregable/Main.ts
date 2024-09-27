import { Auto } from "./Autos";
import { Moto } from "./Motos";
import { Camion } from "./Camiones";
import { RegistroAutomotor } from "./RegistroAutomotor";

// Crear Auto
const auto1 = new Auto ("Renault", "Clio", 2005, "ETH 197", "Villeres Juan José");
const auto2 = new Auto ("Peugeot", "206", 1996, "APC 256", "Benitéz Rosana");
const auto3 = new Auto ("Chevrolet", "Corsa", 2016, "PMG 745", "Alvarez Julian");
const auto4 = new Auto ("Fiat", "Cronos", 2018, "AA-132-AA", "Marino Carla");

// Crear Moto
const moto1 = new Moto ("Ducati", "Streetfighter V2", 2022, "A050EKP", "Fernandéz Maria Clara");
const moto2 = new Moto ("Suzuki", "Intruder 800", 1995, "364DRY", "Ciancio Alfredo");
const moto3 = new Moto ("KTM", "990 Duke", 2024, "A063PFS", "Gallardo Marcelo");
const moto4 = new Moto ("Gilera", "SMX", 2015, "960GAO", "Herrera Dario Esteban");

// Crear Camión 
const camion1 = new Camion ("Scania", "G340", 2008, "PGDS96", "Rodriguez Juan Carlos");
const camion2 = new Camion ("Iveco", "Cavallino 320", 2011, "SUTK40", "Areco Fermin");
const camion3 = new Camion ("Mercedes Benz", "1634", 2016, "AB2896M", "Etcheverria Nestor");
const camion4 = new Camion ("Ford", "Cargo 1517", 2006, "LETR18", "Gomez Roman David");

// Crear Registro del Automotor
const registroAutomotor = new RegistroAutomotor ("Seccional Olavarría N° 3", "Olavarría");

// Agregar un vehiculo al Registro del Automotor
registroAutomotor.agregarAuto(auto1);
registroAutomotor.agregarAuto(auto2);
registroAutomotor.agregarMoto(moto1);
registroAutomotor.agregarMoto(moto3);
registroAutomotor.agregarCamion(camion1);
registroAutomotor.agregarCamion(camion4);

// Dar de Baja un vehiculo del Registro del Automotor
registroAutomotor.bajaAuto("ETH 197");
registroAutomotor.bajaCamion("LETR18");

console.log(registroAutomotor);

// Obtener y modificar datos de los diferentes vehiculos 
console.log(`La patente del auto consultado es: ${camion1.getPatente()}`); // Modificar la manera de obtener la informacion de un vehiculo
console.log(`El titular del vehículo consultado es: ${camion1.getTitular()}`);
camion1.setTitular("Di Pinto Carlos Alberto");
console.log(camion1);

