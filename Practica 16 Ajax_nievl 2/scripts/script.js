var xhr = new XMLHttpRequest();

window.onload = function()
{
    document.getElementById("btnPresioname").addEventListener("click", procesaAjaxNivel2);
    
   
}
function procesaAjaxNivel2()
{
    xhr.open("get", "resultado.html");
    xhr.onload = funcionCallBack;
    xhr.send(null);
}


function funcionCallBack()
{
    if (xhr.status == 200)
    {
        console.log("peticion procesada con exito");
        document.getElementById("divResultado").innerHTML=xhr.responseText;
    }
}

