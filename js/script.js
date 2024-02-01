var swiper = new Swiper(".mySwiper", {
    slidesPerView: 'auto',
    spaceBetween: 250,
    breakpoints: {
        1440: {
            spaceBetween: 230,
        },
        992: {
            spaceBetween: 200,
        },
        768: {
            spaceBetween: 120,
        },
        480: {
            spaceBetween: 110,
        },
        375: {
            spaceBetween: 80,
        },
    },   
    centeredSlides: true,
    grabCursor: true,
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

function scrollNav() {
$('.dots a').click(function(){
    $(".active").removeClass("active");     
    $(this).addClass("active");
    
    $('html, body').stop().animate({
    scrollTop: $($(this).attr('href')).offset().top - 160
    }, 500);
    return false;
});
}
scrollNav();