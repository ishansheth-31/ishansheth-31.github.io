// Navbar Menu Interactions
const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');

// On Click
menu.addEventListener('click', function() {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
});

// Navbar Scroll
window.addEventListener("scroll", function() {
  var navbar = document.querySelector(".navbar");
  navbar.classList.toggle("sticky", window.scrollY > 0);
});

// Open Popup - Education
function openPopup(school) {
  document.getElementById(`popup-${school}`).style.display = "block";
}

// Close Popup - Education
function closePopup(school) {
  document.getElementById(`popup-${school}`).style.display = "none";
}
// Open Popup - Education
function openPopup(popupId) {
  var popup = document.getElementById("popup-" + popupId);
  popup.classList.add("open");
}

// Close Popup - Education
function closePopup(popupId) {
  var popup = document.getElementById("popup-" + popupId);
  popup.classList.remove("open");
}

// Social Bar
window.addEventListener('scroll', function() {
  var socialBar = document.querySelector('.social-bar');
  var scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollPosition > 500) { // Adjust the scroll position as desired
    socialBar.classList.add('show');
  } else {
    socialBar.classList.remove('show');
  }
});

// Smooth Scrolling
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

function handleScroll() {
  const elements = document.querySelectorAll('.services__card, .aboutme-container, .aboutme-details, .aboutme-picture, .skill-bars');

  elements.forEach(element => {
    const threshold = window.innerHeight - (element.offsetHeight / 2);

    if (element.getBoundingClientRect().top <= threshold && !element.classList.contains('fade-in')) {
      element.classList.add('fade-in');
      if (element.classList.contains('skill-progress')) {
        animateSkillBar(element);
      }
    } else if (element.getBoundingClientRect().top > threshold && element.classList.contains('fade-in')) {
      element.classList.remove('fade-in');
      if (element.classList.contains('skill-progress')) {
        resetSkillBar(element);
      }
    }
  });
}

function animateSkillBar(element) {
  const progressBar = element.querySelector('.progress-bar.filled');
  progressBar.style.opacity = 1;
}

function resetSkillBar(element) {
  const progressBar = element.querySelector('.progress-bar.filled');
  progressBar.style.opacity = 0;
}

window.addEventListener('scroll', handleScroll);
window.addEventListener('load', handleScroll);
window.addEventListener('resize', handleScroll);

handleScroll();

