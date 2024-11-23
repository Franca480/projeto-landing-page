const imagensPainel = document.querySelectorAll('.imagem-painel');
const setaAvancar = document.getElementById('btn-avançar');
const setaVoltar = document.getElementById('btn-voltar');
let imagemAtual = 0;

setaAvancar.addEventListener('click', function() {

    const totalDeImagens = imagensPainel.length - 1
    if(imagemAtual === totalDeImagens) {
        return;
    }

    imagemAtual++;

    console.log(imagemAtual)

    imagensPainel.forEach(imagem => {
        imagem.classList.remove('mostrar')
    });

    imagensPainel[imagemAtual].classList.add('mostrar');
});

setaVoltar.addEventListener('click', function() {
    
    if(imagemAtual === 0) {
        consolose.log('não tem mais como voltar')
        return
    }

    imagemAtual--;

    console.log(imagemAtual)

    imagensPainel.forEach(imagem => {
        imagem.classList.remove('mostrar')
    });
    
    imagensPainel[imagemAtual].classList.add('mostrar');
});

const a = -5;
const b = -70

console.log(a + b)
