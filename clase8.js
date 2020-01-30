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
    

function cumpleanios(persona)
{
    return{ ...persona, //copia y trae el objeto intacto
               edad: persona.edad + 1} //crea el nuevo paramentro de persona y le agrega 1
}