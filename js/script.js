var swiper = new Swiper(".mySwiper", {
    slidesPerView: 'auto',
    spaceBetween: 250,  
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


$(document).ready(function () {
	new WOW().init();
});

// Multiple slides per carousel
const myCarouselTwo = document.querySelector('#recipeCarousel')
let items = document.querySelectorAll('#recipeCarousel.carousel .carousel-item')

items.forEach((el) => {
const minPerSlide = 4
let next = el.nextElementSibling
for (var i=1; i<minPerSlide; i++) {
    if (!next) {
        // wrap carousel by using first child
        next = items[0]
    }
    let cloneChild = next.cloneNode(true)
    el.appendChild(cloneChild.children[0])
    next = next.nextElementSibling
}
}) // end multiple slides per carousel

// Get either the existing Bootstrap Carousel instance or create a new one
const carouselTwo = bootstrap.Carousel.getOrCreateInstance(myCarouselTwo);

// Grab your radio indicators, the previous and next buttons/arrows
const indicatorsAll = document.querySelectorAll('.carousel-indicators');
const prevCarouselBtn = document.querySelector('.carousel-control-prev');
const nextCarouselBtn = document.querySelector('.carousel-control-next');

// Add event listeners to your indicators, previous and next buttons/arrows
indicatorsAll.forEach( IndicatorBtn => IndicatorBtn.addEventListener("click", goToIndicatorCarousels));
prevCarouselBtn.addEventListener('click', prevCarousels);
nextCarouselBtn.addEventListener('click', nextCarousels);

// Call the Bootstrap 'to' function for both Carousels to go to the indicator page that was clicked
function goToIndicatorCarousels (e){
let clickedIndicator = e.target.attributes[1].value;
carouselOne.to(clickedIndicator);
carouselTwo.to(clickedIndicator);
}

// Call the Bootstrap 'prev' function for both Carousels to go to the previous page
function prevCarousels(){
carouselOne.prev();
carouselTwo.prev();
}

// Call the Bootstrap 'next' function for both Carousels to go to the next page
function nextCarousels(){
carouselOne.next();
carouselTwo.next();
}