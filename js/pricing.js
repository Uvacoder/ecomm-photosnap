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
