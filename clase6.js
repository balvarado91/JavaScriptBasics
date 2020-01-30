var nombre = 'Brayan'; //variable global que se puede acceder desde cualquier funcion

//Objeto 1
var brayan = 
{
    nombre: 'Brayan',
    apellido: 'Alvarado',
    edad: 28
}

//Objeto 2
var jose = 
{
    nombre: 'Jose',
    apellido: 'Araya',
    edad: 29
}
function imprimirNombreEnMayusculas({ nombre })
{
    console.log(nombre.toUpperCase())
}

imprimirNombreEnMayusculas(brayan);   
imprimirNombreEnMayusculas(jose);  
imprimirNombreEnMayusculas({ nombre: 'Dani'});    