var slideshows = document.querySelectorAll('[data-component="slideshow"]');
slideshows.forEach(initSlideShow);

contarDias()

function initSlideShow(slideshow) {
const slides = slideshow.querySelectorAll('.slide');
const indicatorsContainer = slideshow.querySelector('.indicators');
const prevBtn = slideshow.querySelector('.prev');
const nextBtn = slideshow.querySelector('.next');
let index = 0;
let interval;
const time = 5000;

slides.forEach((_, i) => {
const btn = document.createElement('button');
if (i === 0) btn.classList.add('active');
btn.addEventListener('click', () => showSlide(i));
indicatorsContainer.appendChild(btn);
});

const indicators = indicatorsContainer.querySelectorAll('button');

function showSlide(i) {
slides[index].classList.remove('active');
indicators[index].classList.remove('active');

index = i;

slides[index].classList.add('active');
indicators[index].classList.add('active');
}

function nextSlide() {
showSlide((index + 1) % slides.length);
}

function prevSlide() {
showSlide((index - 1 + slides.length) % slides.length);
}

prevBtn.addEventListener('click', () => {
prevSlide();
resetInterval();
});

nextBtn.addEventListener('click', () => {
nextSlide();
resetInterval();
});

function startAutoSlide() {
interval = setInterval(nextSlide, time);
}

function resetInterval() {
clearInterval(interval);
startAutoSlide();
}

startAutoSlide();
}

function contarDias() {
    const dataDeInicio = new Date(2024, 9, 12);

    let textoContador;
    let tempoDecorridoEmMilissegundos;
    let diasDeNamoro;
    let mesesDeNamoro;
    let anosDeNamoro;
    let contadorDias;
    let contadorMeses;

    textoContador = document.querySelector("#textoContador");
    tempoDecorridoEmMilissegundos = Date.now() - dataDeInicio.getTime();
    diasDeNamoro = retornarParteInteira(tempoDecorridoEmMilissegundos / (1000 * 60 * 60 * 24));
    segundosTotaisDeNamoro = retornarParteInteira(tempoDecorridoEmMilissegundos / 1000);
    minutosTotaisDeNamoro = retornarParteInteira(segundosTotaisDeNamoro / 60);
    horasTotaisDeNamoro = retornarParteInteira(minutosTotaisDeNamoro / 60);
    mesesDeNamoro = retornarParteInteira(diasDeNamoro / 30);
    anosDeNamoro = retornarParteInteira(diasDeNamoro / 365);
    contadorDias = 0
    contadorMeses = 0;

    console.log(segundosTotaisDeNamoro - 60 * minutosTotaisDeNamoro);
    console.log(minutosTotaisDeNamoro - 60 * horasTotaisDeNamoro);
    
    
    
    if (diasDeNamoro < 30) {
        contadorDias = diasDeNamoro;
    } else if (diasDeNamoro % 30 == 0) {
        contadorDias = 0;
    } else {
        contadorDias = diasDeNamoro - (30 * mesesDeNamoro) - 5;
    }

    if (mesesDeNamoro < 12) {
        contadorMeses = mesesDeNamoro;
    } else if (mesesDeNamoro % 12 == 0) {
        contadorMeses = 0;
    } else {    
        contadorMeses = mesesDeNamoro - (12 * anosDeNamoro);
    }

    textoContador.textContent = `${anosDeNamoro} anos ${contadorMeses} meses ${contadorDias} dias
    horas ${segundosTotaisDeNamoro} segundos`;
}

function retornarParteInteira(numero) {
    return Math.trunc(numero);
}