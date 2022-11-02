import {
  getRandomArrayElement,
  getRandomPositiveInteger,
  getRandomPositiveFloat,
} from './util.js';

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

const CHECKIN_TIME = ['12:00', '13:00', '14:00'];

const CHECKOUT_TIME = ['12:00', '13:00', '14:00'];

const FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];

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

const PHOTOS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
];

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
  checkin: getRandomArrayElement(CHECKIN_TIME),
  checkout: getRandomArrayElement(CHECKOUT_TIME),
  features: FEATURES.slice(0, getRandomPositiveInteger(0, FEATURES.length)),
  description: descriptions.slice(0, getRandomPositiveInteger(0, descriptions.length)),
  photos: Array.from({length: getRandomPositiveInteger(0, 10)}, () => getRandomArrayElement(PHOTOS)),
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

export {getObjects};
