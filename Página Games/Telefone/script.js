let botaoMenu = document.getElementById("imgMenu").style

function abrirOuFechar() {
    if(document.getElementById("menuOculto").style.width == "50%") {
        document.getElementById("menuOculto").style.width = "0%"
        botaoMenu.rotate = "0deg"
    } else{
        document.getElementById("menuOculto").style.width = "50%"
        botaoMenu.rotate = "90deg"
    }
}