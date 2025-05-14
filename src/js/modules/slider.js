import Swiper, {Autoplay, Navigation, Pagination} from 'swiper';
Swiper.use([Autoplay, Navigation, Pagination]);

$(document).ready(function() {

    // Находим оригинальный слайдер
    var $originalSlider = $('.js-mobile-slider');
    
    // Если слайдер существует
    if ($originalSlider.length) {

        $originalSlider.each(function(i, slider) {
            // Создаем копию слайдера
            var $clonedSlider = $(slider).clone()
                .removeClass()
                .addClass('mobile-slider').addClass('swiper');
            
            // Вставляем копию рядом с оригиналом
            $(slider).after($clonedSlider);
            
            // Инициализируем слайдер
            initializeSwiper($clonedSlider);
        })
    }
    
    // Функция для инициализации Swiper
    function initializeSwiper($sliderElement) {

        let id = $sliderElement.attr("id")
        
        // Создаем обертку для слайдов
        $sliderElement.wrapInner('<div class="swiper-wrapper"></div>');
        
        // Добавляем класс swiper-slide к каждому элементу
        $sliderElement.find('> .swiper-wrapper > *').wrap('<div class="swiper-slide"></div>');
        
        // Добавляем пагинацию и навигацию
        $sliderElement.after('<div class="slider-pagination swiper-pagination-' + id + '"></div>');
        
        // Инициализируем Swiper
        new Swiper('#' + id, {
            slidesPerView: 1,
            
            spaceBetween: 8,
            pagination: {
                el: '.swiper-pagination-' + id,
                clickable: true,
            },
            // breakpoints: {
            //     768: {
            //         allowTouchMove: false,
            //         slidesPerView: 'auto',
            //         centeredSlides: false,
            //         spaceBetween: 0,
            //     }
            // }
        });
    }
});


function initializeDefaultSwiper(id) {
    new Swiper('#' + id, {
        slidesPerView: 1,
        spaceBetween: 8,
        pagination: {
            el: '#' + id + 'Pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '#' + id + 'Next',
            prevEl: '#' + id + 'Prev',
        },
        breakpoints: {
            992: {
                slidesPerView: 3,
                spaceBetween: 24,
            },
            576: {
                slidesPerView: 2,
                spaceBetween: 16,
            }
        }
    })
}

initializeDefaultSwiper("casesSlider")
initializeDefaultSwiper("tariffsSlider")
