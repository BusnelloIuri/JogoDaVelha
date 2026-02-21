const celulas = document.querySelectorAll('.celula');

let vezDoX = true;

function iniciarJogo() {
    celulas.forEach(celula => {   
        celula.addEventListener('click', jogar);
    });
}

function jogar(event) {
    const celula = event.target; 
    if (celula.textContent === '') {
        celula.textContent = vezDoX ? 'X' : 'O';
        vezDoX = !vezDoX; 
    }
}



function reiniciarJogo() {
    celulas.forEach(celula => {
        celula.textContent = '';
    });
    vezDoX = true;
}

const botaoReiniciar = document.getElementById('reiniciar');
botaoReiniciar.addEventListener('click', reiniciarJogo); 

iniciarJogo();