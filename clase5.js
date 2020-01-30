var nombre = 'Brayan'; //variable global que se puede acceder desde cualquier funcion

function imprimirNombreEnMayusculas(n)
{
    n = n.toUpperCase();
    console.log(n)
}

imprimirNombreEnMayusculas(nombre);   