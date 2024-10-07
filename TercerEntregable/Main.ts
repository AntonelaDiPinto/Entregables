import { Vehiculo } from "./Vehiculo";
import { Auto } from "./Auto";
import { Moto } from "./Moto";
import { Camion } from "./Camion";
import { RegistroAutomotor } from "./RegistroAutomotor";

// Crear Auto
const auto1 = new Auto ("Renault", "Clio", 2005, "ETH 197", "Villeres Juan José", 5, "Gris Perla");
const auto2 = new Auto ("Peugeot", "206", 1996, "APC 256", "Benitéz Rosana", 3, "Negro");
const auto3 = new Auto ("Chevrolet", "Corsa", 2016, "PMG 745", "Alvarez Julian", 5, "Rojo");
const auto4 = new Auto ("Fiat", "Cronos", 2018, "AA-132-AA", "Marino Carla", 5, "Blanco");

// Crear Moto
const moto1 = new Moto ("Ducati", "Streetfighter V2", 2022, "A050EKP", "Fernandéz Maria Clara", 110);
const moto2 = new Moto ("Suzuki", "Intruder 800", 1995, "364DRY", "Ciancio Alfredo", 150);
const moto3 = new Moto ("KTM", "990 Duke", 2024, "A063PFS", "Gallardo Marcelo",  250);
const moto4 = new Moto ("Gilera", "SMX", 2015, "960GAO", "Herrera Dario Esteban", 110);

// Crear Camión 
const camion1 = new Camion ("Scania", "G340", 2008, "PGDS96", "Rodriguez Juan Carlos", "Rigido de Tres Ejes", 3, "C3" );
const camion2 = new Camion ("Iveco", "Cavallino 320", 2011, "SUTK40", "Areco Fermin", "Rigido de Dos Ejes", 2, "C2");
const camion3 = new Camion ("Mercedes Benz", "1634", 2016, "AB2896M", "Etcheverria Nestor", "Articulado conformado por un rígido de dos ejes y semiremolque de un eje", 3, "2S1");
const camion4 = new Camion ("Ford", "Cargo 1517", 2006, "LETR18", "Gomez Roman David", "Articulado conformado por un rígido de tres ejes y semiremolque de dos ejes", 3, "3S2");

// Crear Registro del Automotor
const registroAutomotor = new RegistroAutomotor ([], "Seccional Olavarría N° 3", "Olavarría");

// Agregar Vehículos al Registro Automotor
registroAutomotor.agregarVehiculo(auto1);
registroAutomotor.agregarVehiculo(auto2);
registroAutomotor.agregarVehiculo(auto3);
registroAutomotor.agregarVehiculo(auto4);
registroAutomotor.agregarVehiculo(moto1);
registroAutomotor.agregarVehiculo(moto2);
registroAutomotor.agregarVehiculo(moto3);
registroAutomotor.agregarVehiculo(moto4);
registroAutomotor.agregarVehiculo(camion1);
registroAutomotor.agregarVehiculo(camion2);
registroAutomotor.agregarVehiculo(camion3);
registroAutomotor.agregarVehiculo(camion4);

console.log(registroAutomotor);

// Dar de baja un Vehículo del Registro Automotor
registroAutomotor.darDeBajaVehiculo("APC 256");
registroAutomotor.darDeBajaVehiculo("A063PFS");
registroAutomotor.darDeBajaVehiculo("PGDS96");

console.log(registroAutomotor);

// Modificar datos de un Vehículo
console.log("\nModificando el vehículo con patente '364DRY':");
registroAutomotor.modificarVehiculo( "364DRY", "Alvarez Juan Manuel");
console.log(registroAutomotor.obtenerVehiculoPorPatente("364DRY")?.obtenerInfo());

// Obtener los datos de los vehículos incluidos en el Registro Automotor
console.log("Datos de uno de los vehículos de nuestro Registro Automotor:");
console.log(registroAutomotor.obtenerTodosLosVehiculos());

