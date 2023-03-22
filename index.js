//Function for navbar dropdown
  function toggledisplay(elementId) {
    let dropdown = document.getElementById(elementId);
    // let items = document.getElementById(elementId).querySelectorAll("*");

    if (dropdown.style.height === "11rem") { //If elements are shown
      dropdown.style.height = "0rem";
      dropdown.style.opacity = "0";

    } else { //If are hidden
      dropdown.style.height = "11rem";
      dropdown.style.opacity = "1";
      // items.classList.add("dropdown-1-show");
    }
  }

// Function for Slideshow image change
  let slideIndex = 0;
  showSlides();

  function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "block";
    setTimeout(showSlides, 10000);
  }

  // console.log(document.getElementsByClassName("mySlides"));
