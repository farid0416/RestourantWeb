const hamburger = document.querySelector('#hamburger-menu');
const navbarNav = document.querySelector('.navbar-nav');

// Toggle menu
hamburger.addEventListener('click', function(e) {
  e.preventDefault();     // mencegah <a> membuka halaman
  e.stopPropagation();    // supaya klik tidak ditangkap document
  navbarNav.classList.toggle('active');
});

// Klik di luar menu
document.addEventListener('click', function(e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove('active');
  }
});


