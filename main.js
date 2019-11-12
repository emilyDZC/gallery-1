const current = document.querySelector("#current");
const imgs = document.querySelectorAll(".imgs img");
const opacity = 0.6;

// Set first image opacity
imgs[0].style.opacity = opacity;

imgs.forEach(img => img.addEventListener("click", imgClick));

function imgClick(e) {
  // Reset the opacity
  imgs.forEach(img => (img.style.opacity = 1));
  // Change current image to src of clicked image
  current.src = e.target.src;

  // Add fade in class
  current.classList.add("fade-in");

  // Remove fade-in class after .5 seconds
  setTimeout(() => current.classList.remove("fade-in"), 500);

  // Change the opacity to the variable amount
  e.target.style.opacity = opacity;
}

// Scroll arrow function
const arrow = document.getElementById("arrow");
// Add click event listener that will trigger scroll up
arrow.addEventListener("click", scrollUp);

// Make arrow hidden until user has scrolled down the page
// NB fade-in is in CSS
window.onscroll = function() {
  if (document.documentElement.scrollTop > 20) {
    arrow.style.display = 'block'
  } else {
    arrow.style.display = 'none'
  }
}

// Scroll to top when arrow clicked
function scrollUp(e) {
  document.documentElement.scrollTop = 0
}