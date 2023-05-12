const dropdown = document.querySelectorAll(".dropdown");
const arrow = document.querySelectorAll(".nav-links img");
const links = document.querySelectorAll(".nav-links li");
const logo = document.querySelector(".logo");

console.log(arrow)


function dropit (linkIndex) {
  // Check if is open

  // Ar if funkciju parbaudit vai dropdown ir vaļā un attiecīgi atvērt/aizvērt to
  if (! (dropdown[linkIndex].classList.contains("dropdown-active"))) {
    for (let i = 0; i<dropdown.length; i++) {
      dropdown[i].classList.remove("dropdown-active");
      arrow[i].classList.remove("arrow-active");
    }
    dropdown[linkIndex].classList.add("dropdown-active");
    links.forEach(link => link.classList.add("nav-links-active"));
    logo.classList.add("logo-active");
    arrow[linkIndex].classList.toggle("arrow-active");
  }
  else {
    dropdown[linkIndex].classList.remove("dropdown-active");
    links.forEach(link => link.classList.remove("nav-links-active"));
    logo.classList.remove("logo-active");
    arrow[linkIndex].classList.toggle("arrow-active");
  }
}
