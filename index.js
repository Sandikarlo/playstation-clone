//Function for navbar dropdown
const body = document.querySelector("body");
const dropdown = document.querySelectorAll(".dropdown");
const arrow = document.querySelectorAll(".nav-links img");
const links = document.querySelectorAll(".nav-links li");
const logo = document.querySelector(".logo");
const search = document.querySelector(".search");
const searchBox = document.querySelector(".search-box");

function dropit(linkIndex) {
  if (!(dropdown[linkIndex].classList.contains("dropdown-active"))) {
    for (let i = 0; i < dropdown.length; i++) {
      dropdown[i].classList.remove("dropdown-active");
      arrow[i].classList.remove("arrow-active");
    }
    dropdown[linkIndex].classList.add("dropdown-active");
    links.forEach(link => link.classList.add("nav-links-active"));
    logo.classList.add("logo-active");
    search.classList.add("search-active");
    arrow[linkIndex].classList.toggle("arrow-active");
  } else {
    dropdown[linkIndex].classList.remove("dropdown-active");
    links.forEach(link => link.classList.remove("nav-links-active"));
    logo.classList.remove("logo-active");
    search.classList.remove("search-active");
    arrow[linkIndex].classList.toggle("arrow-active");
  }
}
search.addEventListener('click', (ev) => {
  searchBox.style.display = "flex";
  ev.stopPropagation();
});
body.addEventListener('click', () => {
  searchBox.style.display = "none";
  body.style.opacity = 1;
});
searchBox.addEventListener('click', (ev) => {
  searchBox.style.display = "flex";
  ev.stopPropagation();
});


// Function for Slideshow image change
let slideIndex = 0;

function showSlides(selected) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let indicators = document.getElementsByClassName("indicator-img");
  // Hide all slides
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    indicators[i].classList.remove("is-selected");
  }
  slideIndex++;

  if (slideIndex > slides.length) {
    slideIndex = 1
  }
  if (slideIndex < 1) {
    slideIndex = slides.length
  }
  slides[slideIndex - 1].style.display = "block";
  indicators[slideIndex - 1].classList.add("is-selected");
}

// Automatically change Slide
let slideInterval = setInterval(showSlides, 6000);

// Change slide on Indicator Click
function clickedDiv(n) {
  clearInterval(slideInterval);
  showSlides(slideIndex = n);
  slideInterval = setInterval(showSlides, 6000);
}

// SlideShow indicator Function
function hoveredDiv(num) {
  let indicators = document.getElementsByClassName("indicator-img");

  for (let i = 0; i < indicators.length; i++) {
    indicators[i].style.opacity = "0.5";
    indicators[i].style.transition = "all 0.15s";
  }

  switch (num) {
    case 0:
      indicators[0].style.opacity = "1";
      break;
    case 1:
      indicators[1].style.opacity = "1";
      break;
    case 2:
      indicators[2].style.opacity = "1";
      break;
  }
}

function dehoveredDiv() {
  let indicators = document.getElementsByClassName("indicator-img");

  for (let i = 0; i < indicators.length; i++) {
    indicators[i].style.opacity = "0.7";

    if (indicators[0].classList.contains("is-selected")) {
      indicators[0].style.opacity = "1";
    }
    if (indicators[1].classList.contains("is-selected")) {
      indicators[1].style.opacity = "1";
    }
    if (indicators[2].classList.contains("is-selected")) {
      indicators[2].style.opacity = "1";
    }
  }

  // console.log(selected);
}
let carouselIndex = 0;

function carouselShuffle(num) {
  let slides = document.getElementsByClassName("carousel-container");
  let indicators = document.getElementById("carousel-indicator").children;
  let images = document.getElementsByClassName("carousel-img");
  let carouselIndicator = document.getElementsByClassName("#carousel-indicator div *");

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    indicators[i].classList.remove("is-selected");
    images[i].classList.remove("carousel-img-active");
  }
  carouselIndex++;
  if (carouselIndex > slides.length) {
    carouselIndex = 1
  }
  if (carouselIndex < 1) {
    carouselIndex = slides.lenght
  }
  slides[carouselIndex - 1].style.display = "grid";
  indicators[carouselIndex - 1].classList.add("is-selected");
  images[carouselIndex - 1].classList.add("carousel-img-active")
}

function fadeIn(num) {
  let indicators = document.getElementById("carousel-indicator").children;
  indicators[num].style.opacity = "1";
}

function clickedCarousel(num) {
  carouselShuffle(carouselIndex = num);
}

// Function for Game Grid
const carouselSlide = document.querySelector(".game-grid_slide");
const carouselImages = document.querySelectorAll(".game-grid_slide .game-grid_box");


// Buttons
const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");

// counter
let counter = 1;
const size = carouselImages[1].clientWidth;

carouselSlide.style.transform = "translateX(" + (-size * counter) + "px)";
// Slide Highlighting function

function carouselLoad() {
  for (let i = 0; i < carouselImages.length; i++) {
    carouselImages[i].style.opacity = "0.5";
  }
  carouselImages[1].style.opacity = 1;
}

// Button Listeners
nextBtn.addEventListener("click", () => {
  // Last Box loads weirdly!!!
  if (counter >= carouselImages.length - 1) return;
  carouselSlide.style.transition = "transform 0.5s cubic-bezier(.15,.5,0,1)";
  counter++;
  carouselSlide.style.transform = "translateX(" + (-size * counter) + "px)";

  for (let i = 0; i < carouselImages.length; i++) {
    carouselImages[i].style.opacity = "0.5";
  }
  if (carouselImages[counter].id === "last") {
    carouselImages[2].style.opacity = 1;
  }
  if (carouselImages[counter - 2].id === "first") {
    carouselImages[3].style.opacity = 1;
    carouselSlide.addEventListener("transitionend", () => {
      carouselImages[1].style.opacity = 1;
    });
  }
});

prevBtn.addEventListener("click", () => {
  if (counter <= 0) return;
  carouselSlide.style.transition = "transform 0.5s cubic-bezier(.15,.5,0,1)";
  counter--;
  carouselSlide.style.transform = "translateX(" + (-size * counter) + "px)";
  console.log(counter);

  for (let i = 0; i < carouselImages.length; i++) {
    carouselImages[i].style.opacity = "0.5";
  }
  if (carouselImages[counter].id === "first") {
    carouselImages[1].style.opacity = 1;
  }
  if (carouselImages[counter].id === "lastClone") {
    carouselImages[0].style.opacity = 1;
    setTimeout(() => {
      carouselImages[2].style.opacity = 1;
    }, 100)
  }
});

carouselSlide.addEventListener("transitionend", () => {
  if (carouselImages[counter].id === "lastClone") {
    carouselSlide.style.transition = "none";
    counter = carouselImages.length - 2;
    carouselSlide.style.transform = "translateX(" + (-size * counter) + "px)";
  }
  if (carouselImages[counter].id === "firstClone") {
    carouselSlide.style.transition = "none";
    counter = carouselImages.length - counter;
    carouselSlide.style.transform = "translateX(" + (-size * counter) + "px)";
  }
});
