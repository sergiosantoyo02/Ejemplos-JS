

//Triangulo de Pascal
//Dar un numero y hacer los niveles que indica
window.onload = function ()
{
    document.getElementById("btnPascal").addEventListener("click", pascal);
}

var miArray=[];
var miArrayTemp=[]; 


function pascal()
{
    var arraynum = parseInt(prompt("dame un numero"));
    
}



 function forArray(miArray, miArrayTemp)
{

for (var num = 1 ; num<miArrayTemp.length;num++)
{  
      
       var num2= num-1;
       miArray[num]= miArrayTemp[num]+ miArrayTemp[num2];
       
} 
    return miArray;
 }           