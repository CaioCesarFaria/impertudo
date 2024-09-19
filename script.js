const cardContents = document.querySelectorAll('.card-content');
const saibaMaisLink = document.querySelector('.saiba-mais');

saibaMaisLink.addEventListener('click', () => {
    cardContents.forEach(content => {
        content.classList.toggle('active');
    });
});

// Carrossel de Thumbnails
var swiperThumbs = new Swiper('.mySwiper', {
    spaceBetween: 10,
    slidesPerView: 5,  // Define quantas miniaturas aparecem por vez
    freeMode: true,
    watchSlidesProgress: true,  // Garante que o progresso dos slides seja observado
});

// Carrossel Principal
var swiperMain = new Swiper('.mySwiper2', {
    spaceBetween: 10,
    loop: true,
    effect: "slide",
    autoplay: {
      delay: 4500,
      disableOnInteraction: false,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    thumbs: {
        swiper: swiperThumbs,  // Ligando ao carrossel de miniaturas
    },
});
