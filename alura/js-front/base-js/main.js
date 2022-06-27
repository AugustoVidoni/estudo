

function tocaSom (selectorAudio) {    
    const elemento = document.querySelector(selectorAudio);
    if (elemento === null) {
        console.log('elemento não encontrado ou seletor invalido');
    }
    else {
        if (elemento.play() === 'audio') {
            elemento.play()
        }
    }
}

const listaDeTeclas = document.querySelectorAll('.tecla');  

for (let contador = 0; contador < listaDeTeclas.length; contador++){
    const tecla = listaDeTeclas[contador];
    let som = `#som_${listaDeTeclas[contador].classList[1]}`
    tecla.onclick = function () {
        tocaSom(som);
    }
    tecla.onkeydown = function (evento) {
        if (evento.code === "Space" || evento.code === "Enter"){
            tecla.classList.add('ativa');            
        }
    }
    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }
}
