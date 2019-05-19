HolaMundo();
Saludar("Esto es un mensaito");
console.log(suma(10,20));
var num1 = parseInt(prompt("Introduce un numero"));
var num2 = parseInt(prompt("Introduce OTRO  numero"));
console.log(suma(num1, num2));
num1 = parseInt(prompt("Introduce un numero"));
console.log(isPrimo(num1));

function HolaMundo()
{
    console.log("Hola Mundo");
}

function Saludar(mensaje)
{
    console.log(mensaje)
}

function suma(num1, num2)
{
    return num1+num2;
}
function isPrimo(numero)
{
    var isPrimo = true;

    for(var i = numero-1 ; i>1; i--)
    {
        if(numero%i == 0)
        {
            isPrimo = false;
        }
    }
    return isPrimo;
}