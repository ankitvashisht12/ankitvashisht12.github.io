// const navSlide = () => {
//     const burger = document.querySelector('.burger');
//     const nav = document.querySelector('.nav-link');

//     burger.addEventListener('click', ()=>{
//         nav.classList.toggle('nav-active');
//     });
// }


// const app = ()=>{
//     navSlide();
// }

// app();  

/** code by webdevtrick ( https://webdevtrick.com ) **/
// (function($) { 
//     $(function() { 
//       $('nav ul li a:not(:only-child)').click(function(e) {
//         $(this).siblings('.nav-dropdown').toggle();
//         $('.dropdown').not($(this).siblings()).hide();
//         e.stopPropagation();
//       });
//       $('html').click(function() {
//         $('.nav-dropdown').hide();
//       });
//       $('#nav-toggle').click(function() {
//         $('nav ul').slideToggle();
//       });
//       $('#nav-toggle').on('click', function() {
//         this.classList.toggle('active');
//       });
//     }); 
//   })(jQuery);


const toggle = document.querySelector(".toggle");
const menu = document.querySelector(".menu");
 
/* Toggle mobile menu */
function toggleMenu() {
    if (menu.classList.contains("active")) {
        menu.classList.remove("active");
         
        // adds the menu (hamburger) icon
        toggle.querySelector("a").innerHTML = "<i class='fas fa-bars'></i>";
    } else {
        menu.classList.add("active");
         
        // adds the close (x) icon
        toggle.querySelector("a").innerHTML = "<i class='fas fa-times'></i>";
    }
}
 
/* Event Listener */
toggle.addEventListener("click", toggleMenu, false);