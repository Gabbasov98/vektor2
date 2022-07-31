function featureSlider() {
    var swiper = new Swiper('.feature .swiper-container', {
        slidesPerView: 2,
        spaceBetween: 20,
        speed: 300,
        autoplay: {
            delay: 3000
        },
        pagination: {
            el: '.feature .swiper-pagination',
            type: 'bullets',
            clickable: true,
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 2,
            },
            992: {
                slidesPerView: 1,
            },
        }
    })
}

function gallerySlider() {
    var swiper = new Swiper('.gallery .swiper-container', {
        slidesPerView: "auto",
        spaceBetween: 0,
        centeredSlides: true,
        loop: true,
        navigation: {
            nextEl: '.gallery .swiper-button-next',
            prevEl: '.gallery .swiper-button-prev',
        },
        pagination: {
            el: '.gallery .swiper-pagination',
            type: 'bullets',
            clickable: true,
        },
    })
}

featureSlider()
gallerySlider()


let mainButtons = document.querySelectorAll(".main__btn ")

mainButtons.forEach(el => {
    el.onclick = function () {
        console.log(this)
        mainButtons.forEach(el => {
            el.classList.remove("main__btn--active")
        })
        this.classList.toggle("main__btn--active")
    }
})
