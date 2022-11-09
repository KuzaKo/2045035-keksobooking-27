const filterElement = document.querySelector('.map__filters');

const ternFilterOff = () => {
  filterElement.classList.add('.map__filters--disabled');
  [...filterElement.children].forEach((filter) => {
    filter.disabled = true;
  });
};

const ternFilterOn = () => {
  filterElement.classList.remove('.map__filters--disabled');
  [...filterElement.children].forEach((filter) => {
    filter.disabled = false;
  });
};

export { ternFilterOff, ternFilterOn };
