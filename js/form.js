const roomsToGuests = {
  1: ['1'],
  2: ['1', '2'],
  3: ['1', '2', '3'],
  100: ['2'],
};

const guestsToRooms = {
  0: ['100'],
  1: ['1',],
  2: ['2', '3'],
  3: ['3'],
};

const filterElement = document.querySelector('.map__filters');
const addFormElement = document.querySelector('.ad-form');

const turnFilterOff = () => {
  filterElement.classList.add('.map__filters--disabled');
  [...filterElement.children].forEach((filter) => {
    filter.disabled = true;
  });
};

const turnFilterOn = () => {
  filterElement.classList.remove('.map__filters--disabled');
  [...filterElement.children].forEach((filter) => {
    filter.disabled = false;
  });
};

export { turnFilterOff, turnFilterOn };

const pristine = new Pristine(addFormElement, {
  classTo: 'ad-form__element',
  errorTextParent: 'ad-form__element',
  errorTextClass: 'ad-form__element--invalid',
}, true);

const amountRoomNumber = addFormElement.querySelector('#room_number');
const amountCapacity = addFormElement.querySelector('#capacity');

function validateCapacity() {
  return roomsToGuests[amountRoomNumber.value].includes(amountCapacity.value);
}

function amountCapacityErrorMessage() {
  return `Указанное количество комнат вмещает ${roomsToGuests[amountRoomNumber.value].join (' или ')} гостей.`;
}

function validateCapacityErrorMessage() {
  return `Для указанного количества гостей требуется ${guestsToRooms[amountCapacity.value].join (' или ')} комнаты.`;
}

function onCapacityChange() {
  pristine.validate(amountCapacity);
  pristine.validate(amountRoomNumber);
}

function onRoomNumberChange() {
  pristine.validate(amountCapacity);
  pristine.validate(amountRoomNumber);
}

pristine.addValidator(amountRoomNumber, validateCapacity, validateCapacityErrorMessage);
pristine.addValidator(amountCapacity, validateCapacity, amountCapacityErrorMessage);

amountRoomNumber.addEventListener('change', onCapacityChange);
amountCapacity.addEventListener('change', onRoomNumberChange);

addFormElement.addEventListener('submit', (evt) => {
  evt.preventDefault();
  pristine.validate();
});
