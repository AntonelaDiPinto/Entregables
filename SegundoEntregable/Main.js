"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Autos_1 = require("./Autos");
var Motos_1 = require("./Motos");
var Camiones_1 = require("./Camiones");
var RegistroAutomotor_1 = require("./RegistroAutomotor");
// Crear Auto
var auto1 = new Autos_1.Auto("Renault", "Clio", 2005, "ETH 197", "Villeres Juan José");
var auto2 = new Autos_1.Auto("Peugeot", "206", 1996, "APC 256", "Benitéz Rosana");
var auto3 = new Autos_1.Auto("Chevrolet", "Corsa", 2016, "PMG 745", "Alvarez Julian");
var auto4 = new Autos_1.Auto("Fiat", "Cronos", 2018, "AA-132-AA", "Marino Carla");
// Crear Moto
var moto1 = new Motos_1.Moto("Ducati", "Streetfighter V2", 2022, "A050EKP", "Fernandéz Maria Clara");
var moto2 = new Motos_1.Moto("Suzuki", "Intruder 800", 1995, "364DRY", "Ciancio Alfredo");
var moto3 = new Motos_1.Moto("KTM", "990 Duke", 2024, "A063PFS", "Gallardo Marcelo");
var moto4 = new Motos_1.Moto("Gilera", "SMX", 2015, "960GAO", "Herrera Dario Esteban");
// Crear Camión 
var camion1 = new Camiones_1.Camion("Scania", "G340", 2008, "PGDS96", "Rodriguez Juan Carlos");
var camion2 = new Camiones_1.Camion("Iveco", "Cavallino 320", 2011, "SUTK40", "Areco Fermin");
var camion3 = new Camiones_1.Camion("Mercedes Benz", "1634", 2016, "AB2896M", "Etcheverria Nestor");
var camion4 = new Camiones_1.Camion("Ford", "Cargo 1517", 2006, "LETR18", "Gomez Roman David");
// Crear Registro del Automotor
var registroAutomotor = new RegistroAutomotor_1.RegistroAutomotor("Seccional Olavarría N° 3", "Olavarría");
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
console.log("La patente del auto consultado es: ".concat(camion1.getPatente())); // Modificar la manera de obtener la informacion de un vehiculo
console.log("El titular del veh\u00EDculo consultado es: ".concat(camion1.getTitular()));
camion1.setTitular("Di Pinto Carlos Alberto");
console.log(camion1);
