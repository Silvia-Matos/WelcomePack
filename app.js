const hamburger = document.querySelector(".hamb-btn");
const scrollstop = document.querySelector(".allbody");
const section_all = document.querySelector(".all-sections");
const navMenu = document.querySelector(".nav-menu");
const navLink = document.querySelectorAll(".nav-link");

hamburger.addEventListener("click", mobileMenu);
navLink.forEach(n => n.addEventListener("click", closeMenu));
window.addEventListener("load",function() {
    showSlides(slideIndex);
    myTimer = setInterval(function(){currentSlide(1)}, 4000);
    slideshowContainer = document.getElementsByClassName('slideshow-inner')[0];
    slideshowContainer.addEventListener('mouseenter', pause)
    slideshowContainer.addEventListener('mouseleave', resume)
})


function mobileMenu() {
    window.scrollTo(0, 0);
    scrollstop.classList.toggle("active");
    section_all.classList.toggle("active");
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");  
}
function closeMenu() {
    scrollstop.classList.remove("active");
    section_all.classList.remove("active");
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}


var slideIndex = 1;
var myTimer;
var slideshowContainer;

function currentSlide(n){
  clearInterval(myTimer);
  myTimer = setInterval(function(){currentSlide(n + 1)}, 6000);
  showSlides(slideIndex = n);
}
function showSlides(n){
  var i;
  var slides = document.getElementsByClassName("myslides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" act", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " act";
}

pause = () =>{
  clearInterval(myTimer);
}
resume = () =>{
  clearInterval(myTimer);
  myTimer = setInterval(function(){currentSlide(slideIndex)}, 6000);
}