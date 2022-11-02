const OFFERS_COUNT = 10;

const titles = [
  'Сдается 3-комнатная квартира',
  'Сдам квартиру в доме',
  'Недорогое жильё от 1 000 ₽ за сутки',
  'Люкс с сауной и джакузи',
  'Простая и светлая квартира',
  'Уникальное жильё в центре Москвы',
  'Дофт судия в центре',
  'Студия с высокими потолками',
];

const Location = {
  MIN_LATITUDE: 35.65,
  MAX_LATITUDE: 35.7,
  MIN_LONGITUDE: 139.7,
  MAX_LONGITUDE: 139.8,
};

const PRICE = {
  MIN: 1,
  MAX: 100000,
};

const TYPES = ['palace', 'flat', 'house', 'bungalow', 'hotel'];

const rooms = {
  MIN: 1,
  MAX: 4,
};

const guests = {
  MIN: 1,
  MAX: 4,
};

const CHECKINTIME = ['12:00', '13:00', '14:00'];

const CHECKOUTTIME = ['12:00', '13:00', '14:00'];

const FEATURESS = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];

const descriptions = [
  'Чудесная 3-комнатная квартира в новом современном доме',
  'Ремонт в уникальном авторском стиле.',
  'Квартира с мебелью, вывоз невозможен.',
  'Огороженная, охраняемая территория.',
  'Подземный паркинг, машиноместо оплачивается отдельно.',
  'Окна выходят на обе стороны.',
  'Есть гардеробная комната.',
  'В наличии: посудомоечная машина, холодильник',
  'Есть приточно-вытяжная система вентиляции и кондиционирования, кондиционер.',
  'душевая кабина, ванна, стиральная машина',
  'Телевизор, высокоскоростной интернет.',
  'Есть презентации в pdf на русском или английском для партнеров.',
  'Пол с подогревом, система приточной вентиляции, климат контроль.',
  'Красивый вид на центр Москвы.',
  'В квартире никто не жил!',
  'Комплекс с огороженной-охраняемой территорией, видеонаблюдением, консьержем и подземным паркингом',
];

const PHOTOSS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
];

function getRandomPositiveInteger(a, b) {
  if (a < 0 || b < 0) {
    return NaN;
  }
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
}

function getRandomPositiveFloat(a, b, digits = 1) {
  if (a < 0 || b < 0 || digits < 0) {
    return NaN;
  }
  const lower = Math.min(a, b);
  const upper = Math.max(a, b);
  const result = Math.random() * (upper - lower) + lower;
  return +result.toFixed(digits);
}

const getRandomArrayElement = (elements) => elements[getRandomPositiveInteger(0, elements.length - 1)];

const getRandomLatitude = () => getRandomPositiveFloat(Location.MIN_LATITUDE, Location.MAX_LATITUDE, 5);

const getRandomLongitude = () => getRandomPositiveFloat(Location.MIN_LONGITUDE, Location.MAX_LONGITUDE, 5);


const createAuthor = (index) => ({
  avatar: `img/avatars/user${index.toString().padStart(2, '0')}.png`,
});

const createOffer = () => ({
  title: getRandomArrayElement(titles),
  addres: `${getRandomLatitude()}, ${getRandomLongitude()}`,
  price: getRandomPositiveInteger(PRICE.MIN, PRICE.MAX),
  type: getRandomArrayElement(TYPES),
  rooms: getRandomPositiveInteger(rooms.MIN, rooms.MAX),
  guests: getRandomPositiveInteger(guests.MIN, guests.MAX),
  checkin: getRandomArrayElement(CHECKINTIME),
  checkout: getRandomArrayElement(CHECKOUTTIME),
  features: FEATURESS.slice(0, getRandomPositiveInteger(0, FEATURESS.length)),
  description: descriptions.slice(0, getRandomPositiveInteger(0, descriptions.length)),
  photos: Array.from({length: getRandomPositiveInteger(0, 10)}, () => getRandomArrayElement(PHOTOSS)),
});

const createLocation = () => ({
  lat: getRandomLatitude(),
  lng: getRandomLongitude(),
});

const createObject = (index) => ({
  author: createAuthor(index),
  offer: createOffer(),
  location: createLocation(),
});

const getObjects = () => Array.from({length: OFFERS_COUNT}, (_, offerindex) => createObject(offerindex + 1));


getObjects();


// В файле main.js на основе написанных в прошлом задании вспомогательных функций напишите необходимые функции для создания массива из 10 сгенерированных JS-объектов. Каждый объект массива — описание похожего объявления неподалёку.

// Структура каждого объекта должна быть следующей:

// author, объект — описывает автора. Содержит одно поле:

// avatar, строка — адрес изображения вида img/avatars/user{{xx}}.png, где {{xx}} — это число от 1 до 10. Перед однозначными числами ставится 0. Например, 01, 02...10. Адреса изображений не повторяются.
// offer, объект — содержит информацию об объявлении. Состоит из полей:

// title, строка — заголовок предложения. Придумайте самостоятельно.
// address, строка — адрес предложения. Для простоты пусть пока составляется из географических координат по маске {{location.lat}}, {{location.lng}}.
// price, число — стоимость. Случайное целое положительное число.
// type, строка — одно из пяти фиксированных значений: palace, flat, house, bungalow или hotel.
// rooms, число — количество комнат. Случайное целое положительное число.
// guests, число — количество гостей, которое можно разместить. Случайное целое положительное число.
// checkin, строка — одно из трёх фиксированных значений: 12:00, 13:00 или 14:00.
// checkout, строка — одно из трёх фиксированных значений: 12:00, 13:00 или 14:00.
// features, массив строк — массив случайной длины из значений: wifi, dishwasher, parking, washer, elevator, conditioner. Значения не должны повторяться.
// description, строка — описание помещения. Придумайте самостоятельно.
// photos, массив строк — массив случайной длины из значений: https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg, https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg, https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg.

// location, объект — местоположение в виде географических координат. Состоит из двух полей:
// lat, число с плавающей точкой — широта, случайное значение от 35.65000 до 35.70000.
// lng, число с плавающей точкой — долгота, случайное значение от 139.70000 до 139.80000.
