const anotherForm = document.querySelector('.ad-form');
const priceRoom = anotherForm.querySelector('#price');

const minPrice = {
  'bungalow': 0,
  'flat': 1000,
  'hotel': 3000,
  'house': 5000,
  'palace': 10000,
};

const pristine = new Pristine(anotherForm, {
  classTo: 'ad-form__element',
  errorTextParent: 'ad-form__element',
  errorTextClass: 'ad-form__element--invalid'
}, true);

function validatePrice (value) {
  const unit = anotherForm.querySelector('[name="type"]:checked');
  return value.length && parseInt(value) >= minPrice[unit.value];
}

function getPriceErrorMessage () {
  const unit = anotherForm.querySelector('[name="unit"]:checked');
  return `Не меньше ${minPrice[unit.value]} штук в одни руки`;
}

pristine.addValidator(priceRoom, validatePrice, getPriceErrorMessage);

function onUnitChange () {
  priceRoom.placeholder = minPrice[this.value];
  pristine.validate(priceRoom);
}

anotherForm
  .querySelectorAll('[name="type"]')
  .forEach((item) => item.addEventListener('change', onUnitChange));

anotherForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  pristine.validate();
});
