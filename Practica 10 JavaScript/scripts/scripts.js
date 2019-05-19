alert("Practica JavaScript");
var miVariable=10;
var miVariable2="hola";
var miVariable3=2.3;
var miVariable4=true;
var miVariable5='O';

var numero1=0;
var numero2=0;
var suma=0;

numero1 = prompt("Dame un numero");
numero2 = prompt("Dame  otro numero");
suma= parseInt(numero1) +parseInt(numero2);


if (isNaN(suma))
{
    alert("No estes mamando");
}
else
{
    alert("muy bien mi chavo");
}

for (var i=0;i<10;i++)
{
    alert("numero"+ i);
}


var dia;

dia = prompt("dame un numero del 1 al 7");

switch(parseInt(dia))
{
    case 1:
      alert("lunes");
        break;
    case 2:
        alert("martes");
        break;
    case 3:
        alert("miercoles");
        break;
    case 4:
        alert("jueves");
        break;
    case 5:
        alert("viernes");
        break;
    case 6:
        alert("sabado");
        break;
    case 7:
        alert("domingo");
        break;
    default:
        alert ("del 1 al 7 dije");
}

var arrayRapido = [12,45,"array inicializado en su declaracion"]

console.log(arrayRapido);

var miArray=[];
miArray[0]="Hola";
miArray[1]="a";
miArray[2]="Todos";

console.log(miArray);

var otroArray=[];

otroArray[0]="un texto";
otroArray[1]="un texto";
otroArray[1]="un texto";
otroArray[2]="un texto";

console.log(otroArray);