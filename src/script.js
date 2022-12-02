const slider = document.querySelectorAll('.container_project');
const btnPrev = document.getElementById('prev-button');
const btnNext = document.getElementById('next-button');

let currentSlide = 1;

function hideSlider() {
    slider.forEach(item => item.classList.remove('on'))
}

function showSlider() {
    slider[currentSlide].classList.add('on')
}

function nextSlider () {
    hideSlider()
    if(currentSlide === slider.length -1) {
        currentSlide = 0
    } else {
        currentSlide++
    }
    showSlider()
}

function prevSlider () {
    hideSlider()
    if(currentSlide === 0) {
        currentSlide = slider.length -1
    } else {
        currentSlide--
    }    
    showSlider()
}

btnNext.addEventListener('click', console.log(currentSlide))

btnNext.addEventListener('click', nextSlider)
btnPrev.addEventListener('click', prevSlider)

