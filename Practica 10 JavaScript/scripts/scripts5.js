window.onload = function()
{
    var miBotoncitoMatar = 0;
    miBotoncitoMatar = document.getElementById("btnMatar")
    console.log(miBotoncitoMatar);
    miBotoncitoMatar.onclick = mensajeMatar;

    document.getElementById("divParrafo").onmouseenter = mensajeConsola;

    document.getElementById("divParrafo").onmouseleave = function()
    {
        console.log("Saliste del div");
    } 
    document.getElementById("divparrafo").


}

function mensajeMatar()
{
    alert("la vas a matar PErroo!!")
}

document.getElementById("divParrafo").onmouseenter = mensajeConsola;

document.getElementById 
