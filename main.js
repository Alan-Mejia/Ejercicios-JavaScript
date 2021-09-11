//alert("Hola Mundo");

//variable
var nombre = "Alan";
var apellido = "Mejia Martinez";
var edad = 19;
edad= 50;//podemos cambiar el valor de variables
let telefono;
let colorFavorito="Rojo";
let comidaFavorita="Tacos";
telefono= 5580924501;

//contantes
const gravedad=9.8;
//gravedad="No hay gravedad"; no se puede cambiar el valor de constan marca error
const estudiantes=20;

//diferencias let y var

//var es una variable global, es decir puede cambier en cualquier parte del codigo dentro de cualquier funcion 
//let es una variable de scope, es decir solo solo existen dentro de un bloque de codigo
var numero=50;
if(true){
    var numero=50;
    console.log(numero);
}

console.log(numero);

var numero2=100;
console.log(numero2);

if(true){
    let numero2 = '5';
    console.log(numero2);
    let numero3=27;// imprimira el valor 27, si cambiaramos let por var, entonces la linea 40 tendria valor asignado
}


console.log(numero2);
console.log(numero3);//dira que numero3 no esta definido
/*console.log(typeof(nombre));
console.log(typeof(edad));*/

//constantes

