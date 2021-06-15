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

// MONTHLY - YEARLY PRICES
const monthly = document.getElementById('monthly-price');
const yearly = document.getElementById('yearly-price');
const switchBtn = document.getElementById('switch');
const basic = document.getElementById('basic-price');
const pro = document.getElementById('pro-price');
const business = document.getElementById('business-price');
const period = document.querySelectorAll('.period');

// function to toggle the value of each price tag
const togglePrice = (basicPrice, proPrice, businessPrice) => {
  basic.innerHTML = `$${basicPrice}`;
  pro.innerHTML = `$${proPrice}`;
  business.innerHTML = `$${businessPrice}`;
};

switchBtn.addEventListener('click', () => {
  if (switchBtn.checked) {
    togglePrice('190.00', '390.00', '990.00');
    period.forEach((elem) => (elem.innerHTML = 'per year'));
    monthly.classList.add('soft');
    monthly.classList.remove('highlight');
    yearly.classList.add('highlight');
    yearly.classList.remove('soft');
  }

  if (!switchBtn.checked) {
    togglePrice('19.00', '39.00', '99.00');
    period.forEach((elem) => (elem.innerHTML = 'per month'));
    monthly.classList.add('highlight');
    monthly.classList.remove('soft');
    yearly.classList.add('soft');
    yearly.classList.remove('highlight');
  }
});
