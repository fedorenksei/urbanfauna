const slider = document.querySelector('.slider__row')
const images = document.querySelectorAll('.slider__slide')

slider.addEventListener('click', nextSlide)

let currentSlide = 1
slider.style.height = images[0].clientHeight + 'px'

function nextSlide() {
    if (currentSlide >= images.length) {
        currentSlide = 1
        slider.style.transform = `translate(0)`
    } else {
        currentSlide += 1
        slider.style.transform = `translate(-${currentSlide - 1}00%)`
    }

    slider.style.height = images[currentSlide - 1].clientHeight + 'px'
}