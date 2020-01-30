//var nombre = 'Brayan'; //variable global que se puede acceder desde cualquier funcion

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
// function imprimirNombreEnMayusculas(persona)
// {
//     //var nombre = persona.nombre  -- es lo mismo que la siguiente linea
//     var { nombre } = persona;
//     console.log(nombre.toUpperCase());
// }

// imprimirNombreEnMayusculas(brayan);   
// imprimirNombreEnMayusculas(jose);  
// imprimirNombreEnMayusculas({ nombre: 'Dani'});    


function imprimirNombreEdad()
{
  var nombre = brayan.nombre , edad = brayan.edad;
  console.log("Hola me llamo " + nombre + " y tengo " + edad + " años!!");
}

imprimirNombreEdad();

//Imprimir hola me llamo brayan y tengo 28 años y si le paso dani tiene que imprimer lo mismo