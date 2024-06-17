let swiper1 = new Swiper(".shop-slider", {

    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    loop: true,
});

// home-plants category slider
var swiper = new Swiper(".mySwiper", {
    
    slidesPerView: 1,
    centeredSlides: false,
    slidesPerGroupSkip: 1,
    grabCursor: true,
    keyboard: {
        enabled: true,
    },
    breakpoints: {
        769: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        },
    },
    scrollbar: {
        el: ".swiper-scrollbar",
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

// interrior slider 
const sliders = document.querySelectorAll('.cate-slider');

sliders.forEach((slider, index) => {
    const sliderContainer = slider.querySelector('.slider');
    let currentIndex = 0;

    function nextSlide() {
        currentIndex = (currentIndex + 1) % 6;
        updateSlider();
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + 6) % 6;
        updateSlider();
    }

    function updateSlider() {
        const translateValue = -currentIndex * 300 + 'px';
        sliderContainer.style.transform = 'translateX(' + translateValue + ')';
    }

    const prevButton = slider.querySelector('.slider-btn-left');
    const nextButton = slider.querySelector('.slider-btn-right');

    prevButton.addEventListener('click', prevSlide);
    nextButton.addEventListener('click', nextSlide);
});


