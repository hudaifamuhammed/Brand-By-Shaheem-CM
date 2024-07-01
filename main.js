const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

const swiper = new Swiper('.js-testimonials-slider', {
    grabCursor: true,
    spaceBetween: 30,
    pagination:{
        el:'.js-testimonials-pagination',
        clickble:true
    },
    breakpoints:{
        767:{
            slidesPerView: 3
        }
    }
});