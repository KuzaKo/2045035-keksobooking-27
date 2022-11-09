import {createObject } from './data.js';

const typesHome = {
  flat: 'Квартира',
  bungalow: 'Бунгало',
  house: 'Дом',
  palace: 'Дворец',
  hotel: 'Отель',
};

const renderFeatures = (cardElement, features) => {
  const featuresList = cardElement.querySelector('.popup__features');
  const featuresItem = featuresList.querySelectorAll('.popup__feature');
  if (features && features.length) {
    const modifiers = features.map((feature) => `popup__feature--${feature}`);
    featuresItem.forEach((featuresListItem) => {
      const modifier = featuresListItem.classList[1];
      if (!modifiers.includes(modifier)) {
        featuresListItem.remove();
      }
    });
  } else {
    featuresList.remove();
  }
};

const renderDescription = (cardElement, description) => {
  const descriptionElement = cardElement.querySelector('.popup__description');
  if (description && description.length) {
    descriptionElement.textContent = description;
  } else {
    descriptionElement.remove();
  }
};

const createPhoto = (cardElement, photos) => {
  const photoContainer = cardElement.querySelector('.popup__photos');
  const fragment = document.createDocumentFragment();
  for (let i = 0; i < photos.length; i++) {
    const newElement = cardElement.querySelector('.popup__photo');
    const cloneElement = newElement.cloneNode(true);
    cloneElement.src = photos[i];
    fragment.appendChild(cloneElement);
  }
  photoContainer.innerHTML = '';
  photoContainer.appendChild(fragment);
};

const cardTemplate = document.querySelector('#card')
  .content
  .querySelector('.popup');

const createCardElement = ({author, offer }) => {
  const cardElement = cardTemplate.cloneNode(true);
  cardElement.querySelector('.popup__title').textContent = offer.title;
  cardElement.querySelector('.popup__text--address').textContent = offer.addres;
  cardElement.querySelector('.popup__text--price').textContent = `${offer.price} ₽/ночь`;
  cardElement.querySelector('.popup__type').textContent = typesHome[offer.type];
  cardElement.querySelector('.popup__text--capacity').textContent = `${offer.rooms} комнаты для ${offer.guests} гостей»`;
  cardElement.querySelector('.popup__text--time').textContent = `Заезд после ${offer.checkin}, выезд до ${offer.checkout}`;

  cardElement.querySelector('.popup__avatar').src = author.avatar;

  createPhoto(cardElement, offer.photos);
  renderDescription(cardElement, offer.description);
  renderFeatures(cardElement, offer.features);

  const mapContainer = document.querySelector('#map-canvas');
  mapContainer.appendChild(cardElement);
};

createCardElement(
  createObject(1)
);

export {createCardElement};
