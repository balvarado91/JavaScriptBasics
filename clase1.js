var nombre = 'Brayan'  , apellido = 'Alvarado',  edad = 28;
var nombreMayusculas = nombre.toUpperCase(); // invocando funcion
var apellidoMinusculas = apellido.toUpperCase(); // invocando funcion
var primerLetraDelNombre = nombre.charAt(0); // invocando funcion
var cantidadLetasNombre = nombre.length;
var nombreCompleto = `${nombre} ${apellido}`; //interpolación de variables
var ultimaLetraNombre = nombre.charAt(5);

console.log('Hola ' + nombre + ' ' + apellido);
console.log("Tengo " + edad + ' años')