

const menuBtn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");

menuBtn.addEventListener("click", () => {
  menu.classList.toggle("hidden");
});


const slider = document.getElementById("slider");
const slides = slider.children.length;
let index = 0;


document.getElementById("next").addEventListener("click", () => {
  index = (index + 1) % slides;
  slider.style.transform = `translateX(-${index * 100}%)`;
});

document.getElementById("prev").addEventListener("click", () => {
  index = (index - 1 + slides) % slides;
  slider.style.transform = `translateX(-${index * 100}%)`;
});


const up = document.querySelector('.up');


up.addEventListener('click', () => {
  up.style.display = "none";
  window.scrollTo({ top: 0, behavior: "smooth" }); // scrolls back to top
});


document.addEventListener("scroll", () => {
  if (window.scrollY > 100) {   // show only after scrolling 100px
    up.style.display = "block";
  } else {
    up.style.display = "none";
  }
});


const nav = document.querySelector('.nav');  


document.addEventListener('scroll', () => {
  if (window.scrollY > 100) {
    nav.style.display = "none";   
  } else {
    nav.style.display = "block";  
  }
});

document.addEventListener('click', () => {
  nav.style.display = "block";
});



