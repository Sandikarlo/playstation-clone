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

  function showSlides(selected) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let indicators = document.getElementsByClassName("indicator-img");
    for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    indicators[i].classList.remove("is-selected");
    }
    slideIndex++;

    if (slideIndex > slides.length) {slideIndex = 1}
    if (slideIndex < 1) {slideIndex = slides.length}
    slides[slideIndex-1].style.display = "block";
    indicators[slideIndex-1].classList.add("is-selected");

// set interval function timing breaking on indicator click
    // setInterval(showSlides, 10000);
  }

  function clickedDiv(n) {
    showSlides(slideIndex = n);
  }

// Need to add opacity change transition effect!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  function hoveredDiv(num) {
    let indicators = document.getElementsByClassName("indicator-img");

    for (let i = 0; i < indicators.length; i++) {
      indicators[i].style.opacity = "0.5";
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

  
