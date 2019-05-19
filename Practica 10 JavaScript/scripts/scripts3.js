//crear un arreglo y que lea los valores y te diga si son primos o pares 
// y crear otra funcion que lea los null y los Nan

const TAMANIO_VECTOR = 10;
var miArray=[TAMANIO_VECTOR];
/*
miArray[0] = parseInt(prompt("Primer  numero"));
miArray[1] = parseInt(prompt("Segundo numero"));
miArray[2] = parseInt(prompt("tercer numero"));
miArray[3] = parseInt(prompt("cuerto numero"));
miArray[4] = parseInt(prompt("quinto numero"));

*/ 
var i=0;
while(i < TAMANIO_VECTOR)
{
    miArray[i] = Math.floor(Math.random()*100);
    i++;
}
console.log(miArray);
console.log(isOdd(miArray));
console.log(isPair(miArray));
console.log(_isNaN(miArray));

function isOdd(miArray)
{
    var cont = 0;
        for(var i= 0 ; i < miArray.length ; i++)
    {
    
     if (miArray[i]%2 !== 0 && !isNaN(miArray[i]))
    {
            cont++;
     }
   
     }
        return cont;
}
function isPair(miArray)
{
    var cont = 0;
    for(var i= 0 ; i<miArray.length ; i++)
    {
    
        if (miArray[i]%2 == 0)
        {
         cont++;
        }
   
}
return cont;
}
function _isNaN(miArray)
{
    var cont = 0;
    for(var i= 0 ; i<miArray.length ; i++)
    {
    
        if (isNaN(miArray[i]))
        {
         cont++;
        }
   
}
return cont;
}


