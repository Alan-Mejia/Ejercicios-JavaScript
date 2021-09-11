let cantidades=[]; 
let numero1 = prompt("Introduce un numero 1: ");
cantidades.push(numero1);
let numero2 = prompt("Introduce un numero 2: ");
cantidades.push(numero2);
let numero3 = prompt("Introduce un numero 3: ");
cantidades.push(numero3);

cantidades.sort();
cantidades.reverse();//from highest to lowest
document.write(cantidades[0]);
/*document.write(cantidades[1]);
document.write(cantidades[2]);*/

//*NOTA prompt expects by default that  you enter a string 
//*NOTA sort is used to order strings from A-Z only strings if you work with numbers it probably won't work
//*NOTE https://www.freecodecamp.org/espanol/news/ordenar-arreglos-en-javascript-como-usar-el-metodo-sort/