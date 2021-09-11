alert("Vinculo");

/*Crear un programa que solicite 2 números por prompt. Mandar esos dos valores a una función por 
parámetros para realizar las operaciones aritméticas básicas( suma, resta, multiplicación y división), y mostrar el resultado.
Nota: El resultado puede ser mostrado por consola o por html.
*/

let number1 = parseInt(prompt("Enter the 1st number"));
let number2 = parseInt(prompt("Enter the 2nd number"));

function operations(a,b){
    document.writeln(a+b,"<br>");
    document.writeln(a-b,"<br>");
    document.writeln(a*b,"<br>");
    document.writeln(a/b,"<br>");
};

operations(number1, number2);


/*class Alan{
    private;
        
    public;
        Alan(){
            document.write("This is the constructor");
        };
};
notdeclared(){



};*/