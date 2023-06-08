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

let previousScrollPos = window.pageYOffset;
let skillBarsAnimated = false;

function handleScroll() {
  const elements = document.querySelectorAll('.services__card, .aboutme-container, .aboutme-details, .aboutme-picture, .skill-progress');

  elements.forEach(element => {
    const threshold = window.innerHeight - (element.offsetHeight / 2);

    if (element.getBoundingClientRect().top <= threshold && !element.classList.contains('fade-in')) {
      element.classList.add('fade-in');
      if (element.classList.contains('skill-progress') && !skillBarsAnimated) {
        const progressBar = element.querySelector('.progress-bar.filled');
        const progressPercent = parseInt(progressBar.style.width);
        animateProgressBar(progressBar, progressPercent);
        skillBarsAnimated = true;
      }
    } else if (element.getBoundingClientRect().top > threshold && element.classList.contains('fade-in')) {
      element.classList.remove('fade-in');
      if (element.classList.contains('skill-progress')) {
        const progressBar = element.querySelector('.progress-bar.filled');
        progressBar.style.width = '0';
      }
    }
  });

  // Check if scrolling direction is reversed (scrolling up)
  const currentScrollPos = window.pageYOffset;
  if (currentScrollPos < previousScrollPos) {
    skillBarsAnimated = false;
  }

  previousScrollPos = currentScrollPos;
}

function animateProgressBar(progressBar, targetWidth) {
  let width = 0;
  const animationDuration = 1000; // Adjust the duration as desired
  const frameDuration = 10;
  const frames = Math.ceil(animationDuration / frameDuration);
  const increment = targetWidth / frames;

  const animate = () => {
    width += increment;
    progressBar.style.width = `${width}%`;

    if (width < targetWidth) {
      requestAnimationFrame(animate);
    }
  };

  requestAnimationFrame(animate);
}

window.addEventListener('scroll', handleScroll);
window.addEventListener('load', handleScroll);
window.addEventListener('resize', handleScroll);

handleScroll();




