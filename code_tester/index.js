slideIndex = 1;
showSlides(slideIndex);

let slides = document.getElementsByClassName("slide");
let back = document.getElementById("back");
let forward = document.getElementById("forward");

function plusSlides() {
  showSlides(slideIndex);
}
function showSlides() {
  let slides = document.getElementsByClassName('slide');
  let forward = document.getElementById('forward');
  let back = document.getElementById('back');

  for (i = 0; i < slides.length; i++) {
    slides[i].classList.add('carousel__item--hidden');
    slides[i].classList.remove('carousel__item--visible');
  }
  slides[slideIndex - 1].classList.remove('carousel__item--hidden');
  slides[slideIndex - 1].classList.add('carousel__item--visible');

  slides[slideIndex].addEventListener('animationend', () => {
    console.log("Fired!");
  });
}

forward.addEventListener('click', () => {
  if (slideIndex > slides.length - 1) {slideIndex = 0}
  if (slideIndex < slides.length) {slideIndex++}
  // console.log(slideIndex);
  // console.log(slides.length);
  plusSlides();
});
