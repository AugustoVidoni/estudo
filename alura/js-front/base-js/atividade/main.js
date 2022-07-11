const listaTel = document.querySelectorAll('input[type=button]');
const tel = document.querySelector('input[type=tel]');

for (let cont=0; cont <= listaTel.length; cont ++){
    const tecla = listaTel[cont];
    // listaTel[cont].onclick = function () {
    //     tel.value += tecla.value;
    // }

    tecla.onkeydown = function () {
        tecla.classList.add('ativa');
    }

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }
}
