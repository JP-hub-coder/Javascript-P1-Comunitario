//Nuestro primer comentario
console.log("Hello world");

//Datos Primitivos
numero1 = 1; //Tipo number --> "la mayoría de números"
numero2 = 2;
console.log(typeof numero1);
texto1 = "Textico"; //Tipo string
texto2= " Mas texto";
console.log(typeof texto1);

operacionesBasicas= ((((5*8)+5)-2)); //PEMDAS
console.log(operacionesBasicas);

uniontextos=texto1+texto2; //Concatenación
console.log(uniontextos);


//Funciones con parametros y con retorno
function sumar(a,b) {
    return a+b;
}

console.log(sumar(1,3));//forma de llamarla


//Funciones con parametros y sin retorno
function sumarSR(a,b) {
    console.log(a+b);
}

sumarSR(2,8);//forma de llamarla


//Funciones sin parametros y con retorno
function sumaSP() {
    x = 10+10;
    return x;
}

console.log(sumaSP());//forma de llamarla


//Funciones sin parametros y sin retorno
function sumaSN() {
    console.log(10);
}

sumaSN();

//Ingresar datos externos
//NombrePersona = prompt("Ingrese el nombre de la persona:");
//alert("Su nombre es: " + NombrePersona);