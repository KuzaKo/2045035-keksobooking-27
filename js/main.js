// alert(123);


// const titles = [
//   'Загаловок 1',
//   'Загаловок 2',
//   'Загаловок 3',
//   'Загаловок 4'
// ];

// const photos = [
//   'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
//   'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
//   'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'
// ];

// function getRandomPositiveInteger(a, b) {
//   if (a < 0 || b < 0) {
//     return NaN;
//   }
//   const lower = Math.ceil(Math.min(a, b));
//   const upper = Math.floor(Math.max(a, b));
//   const result = Math.random() * (upper - lower + 1) + lower;
//   return Math.floor(result);
// }

// getRandomPositiveInteger(1,3);

// function getRandomPositiveFloat(a, b, digits = 1) {
//   if (a < 0 || b < 0 || digits < 0) {
//     return NaN;
//   }
//   const lower = Math.min(a, b);
//   const upper = Math.max(a, b);
//   const result = Math.random() * (upper - lower) + lower;
//   return +result.toFixed(digits);
// }

// const getRandomArrayElement = (elements) => elements[getRandomPositiveInteger(0, elements.length - 1)];

// author, объект — описывает автора. Содержит одно поле:
// avatar, строка — адрес изображения вида img/avatars/user{{xx}}.png, где {{xx}} — это число от 1 до 10. Перед однозначными числами ставится 0. Например, 01, 02...10. Адреса изображений не повторяются.
// offer, объект — содержит информацию об объявлении. Состоит из полей:

// const createAuthor = (index) => ({
//   avatar: `img/avatars/user${index.toString().padStart(2, '0')}.png`,
// });

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


// const createOffer = () => ({
//   title: getRandomArrayElement(titles),
//   // address:
//   photos: getRandomArrayElement(photos)
// });

// // location, объект — местоположение в виде географических координат. Состоит из двух полей:
// // lat, число с плавающей точкой — широта, случайное значение от 35.65000 до 35.70000.
// // lng, число с плавающей точкой — долгота, случайное значение от 139.70000 до 139.80000.
// // eslint-disable-next-line no-return-assign
// const createLocation = () => ({
//   lat: getRandomPositiveFloat(35.65000, 35.70000),
//   lng: getRandomPositiveFloat(139.70000, 139.80000)
// });


// В файле main.js на основе написанных в прошлом задании вспомогательных функций напишите необходимые функции для создания массива из 10 сгенерированных JS-объектов. Каждый объект массива — описание похожего объявления неподалёку.
// Структура каждого объекта должна быть следующей:

// const createOblect = () => ({
//   author: createAuthor,
//   offer: createOffer,
//   location: createLocation,
// });

// createOblect();

// console.log(getRandomPositiveInteger(1,3));


// getRandomPositiveFloat();

