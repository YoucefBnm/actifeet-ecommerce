
export const carouselProductsSettings =  {
    spaceBetween: 20,
    slidesPerView: 1,
    slidesPerGroup: 3,
    slidesPerGroupSkip: 3,
    navigation: {
        nextEl: '.carousel__btn--next',
        prevEl: '.carousel__btn--prev'
    },
    keyboard: {
        enabled: true,
    },
    scrollbar: {
        enabled: true
    },
    mousewheel: {
        enabled: true,
        invert: true
    },
    breakpoints: {
        1024: {
            slidesPerView: 3
        },
        900: {
            slidesPerView: 2
        },
        
        700: {
            slidesPerView: 1
        }
    }
}