let checkbox = document.getElementById('checkbox');
let menuSecundario = document.getElementById('menuSecundario')


function ativar() {
    if (checkbox.checked) {
        menuSecundario.style.top = 70 + 'px'
    }
    else {
        menuSecundario.style.top = -100 + 'px'
    }
}