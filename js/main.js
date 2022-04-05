let bg = document.querySelector('.bg_img');
window.addEventListener('mousemove', function(e) {
    let x = e.clientX / window.innerWidth;
    let y = e.clientY / window.innerHeight;  
    bg.style.transform = 'translate(-' + x * 20 + 'px, -' + y * 20 + 'px)';
});

$(document).ready(function(){
   $('.main-slider').slick({
      arrows: false,
      dots: true,
      slidesToShow: 1,
      easing: 'ease-in-out',
      autoplay: true,
      autoplaySpeed: 4000,
      pauseOnHover: false,
      fade: true,
   });
});

let search_btn = document.querySelector('.header_search');
let search_input = document.querySelector('.main-search');
search_btn.addEventListener('click', function(){
	search_input.classList.toggle('main-search_active');
})


let burger = document.querySelector('.burger');
let menu = document.querySelector('.header_nav-bar');
burger.addEventListener('click', function(){
	burger.classList.toggle('burger_active');
   menu.classList.toggle('header_nav-bar_active');
})