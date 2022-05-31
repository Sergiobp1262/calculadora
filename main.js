var buttonsCaluladora = document.getElementById("buttons");
var botones = buttonsCaluladora.querySelectorAll("button");
var cuadroResult = document.getElementById("txtResult");
botones.forEach((e)=>{
    e.addEventListener("click",(e)=>{
        var boton = e.target.innerHTML;

        switch(boton)
        {
            case "=":
                calcular();
                break;
            case "C":
                clearCuadroResut();
                break;
            default:
                cuadroResult.value+=boton;
                break;
        }
    })
});

function clearCuadroResut()
{
    cuadroResult.value="";
}

function calcular()
{
    cuadroResult.value=eval(cuadroResult.value);
}