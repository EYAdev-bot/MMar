const slides = document.querySelectorAll('.slide');
let index = 0;
function updateSlider() {
    slides.forEach((slide, i) => {
        slide.classList.remove("active", "left", "right")
        
        if (i==index) {
            slide.classList.add("active")
        } else if (i === (index - 1 + slides.length) % slides.length) {
            slide.classList.add("left")
        }else if (i === (index + 1) % slides.length) {
            slide.classList.add("right")
        }
    });
}

function nextSlide() {
    index = (index + 1) % slides.length
    updateSlider();
}

setInterval(nextSlide, 3000)

updateSlider()
