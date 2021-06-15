const hamburger = document.querySelector('#hamburger');
const body = document.querySelector('body');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');
const fadeElems = document.querySelectorAll('.has-fade');

const dropdown = document.getElementById('mobile-dropdown');

hamburger.addEventListener('click', () => {
  // hamburger.classList.toggle('open');

  if (header.classList.contains('open')) {
    // Close hamburger menu
    header.classList.remove('open');
    body.classList.remove('noscroll');
    fadeElems.forEach((element) => {
      element.classList.remove('fade-in');
      element.classList.add('fade-out');
    });
  } else {
    // Open hamburger menu
    header.classList.add('open');
    body.classList.add('noscroll');
    fadeElems.forEach((element) => {
      element.classList.remove('fade-out');
      element.classList.add('fade-in');
    });
    // dropdown.classList.add('slide-down');
  }
});
