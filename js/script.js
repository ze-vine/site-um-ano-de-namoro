var slideshows = document.querySelectorAll('[data-component="slideshow"]');
slideshows.forEach(initSlideShow);

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