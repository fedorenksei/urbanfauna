const slider = document.querySelector('.slider__row')
const slides = document.querySelectorAll('.slider__slide')

slider.addEventListener('click', nextSlide)

let currentSlide = 1
adjustHeight()

function nextSlide() {
    if (currentSlide >= slides.length) {
        currentSlide = 1
        slider.style.transform = `translate(0)`
    } else {
        currentSlide += 1
        slider.style.transform = `translate(-${currentSlide - 1}00%)`
    }
    adjustHeight()
}

function adjustHeight() {
    const image = slides[currentSlide - 1].querySelector('img')
    if (image.complete && image.clientHeight != 0 && image.clientHeight != image.naturalHeight) {
        console.log(image.clientHeight)
        slider.style.height = slides[currentSlide - 1].clientHeight + 'px'
    } else {
        setTimeout(adjustHeight, '100')
    }
}