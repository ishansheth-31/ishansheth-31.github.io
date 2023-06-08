const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');

menu.addEventListener('click', function() {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
});

window.addEventListener("scroll", function() {
  var navbar = document.querySelector(".navbar");
  navbar.classList.toggle("sticky", window.scrollY > 0);
});

function openPopup(school) {
  document.getElementById(`popup-${school}`).style.display = "block";
}

function closePopup(school) {
  document.getElementById(`popup-${school}`).style.display = "none";
}

function openPopup(popupId) {
  var popup = document.getElementById("popup-" + popupId);
  popup.classList.add("open");
}

function closePopup(popupId) {
  var popup = document.getElementById("popup-" + popupId);
  popup.classList.remove("open");
}

window.addEventListener('scroll', function() {
  var socialBar = document.querySelector('.social-bar');
  var scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollPosition > 500) { // Adjust the scroll position as desired
    socialBar.classList.add('show');
  } else {
    socialBar.classList.remove('show');
  }
});

// Smooth scrolling
document.querySelectorAll('.navbar__links').forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();

    const targetId = link.getAttribute('href');
    const targetSection = document.querySelector(targetId);
    const navbarHeight = document.querySelector('.navbar').offsetHeight;
    const scrollToPosition = targetSection.offsetTop - navbarHeight;

    window.scrollTo({
      top: scrollToPosition,
      behavior: 'smooth',
    });
  });
});

window.addEventListener('scroll', function() {
  var navbar = document.getElementById('navbar');
  var scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
  var scrollThreshold = 200; // Adjust the scroll threshold as desired

  if (scrollPosition >= scrollThreshold) {
    navbar.classList.add('navbar-scrolled');
  } else {
    navbar.classList.remove('navbar-scrolled');
  }
});






