const roomsToGuests = {
  1: ['1'],
  2: ['1', '2'],
  3: ['1', '2', '3'],
  100: ['0'],
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

//нашли нужные формы
const amountRoomNumber = addFormElement.querySelector('#room_number');
const amountCapacity = addFormElement.querySelector('#capacity');

//функция в массиве комнат проверяет есть ли в указанном ключе(кол-ве комнат) нужное число гостей
function validateCapacity() {
  return roomsToGuests[amountRoomNumber.value].includes(amountCapacity.value);
}

//сообжение об ошибке
function amountCapacityErrorMessage() {
  return `Указанное количество комнат вмещает ${roomsToGuests[amountRoomNumber.value].join (' или ')} гостей.`;
}

function validateCapacityErrorMessage() {
  return `Для указанного количества гостей требуется ${guestsToRooms[amountCapacity.value].join (' или ')} комнаты.`;
}

//фун-я изменения значений
function onCapacityChange() {
  pristine.validate(amountCapacity);
  pristine.validate(amountRoomNumber);
}

function onRoomNumberChange() {
  pristine.validate(amountCapacity);
  pristine.validate(amountRoomNumber);
}

//добавляет пристин(элемент,фунция валидации,сообщение об ошибке)
pristine.addValidator(amountRoomNumber, validateCapacity, validateCapacityErrorMessage);
pristine.addValidator(amountCapacity, validateCapacity, amountCapacityErrorMessage);

//обработчики событий на случай если значение поменяется
amountRoomNumber.addEventListener('change', onCapacityChange);
amountCapacity.addEventListener('change', onRoomNumberChange);

//подключаем пристин к форме
addFormElement.addEventListener('submit', (evt) => {
  evt.preventDefault();
  pristine.validate();
});
