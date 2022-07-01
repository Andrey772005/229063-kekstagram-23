import {shuffleArray} from './data.js';
import {userPhotoClick} from './full-size-foto.js';

const pictures = document.querySelector('.pictures');
const userPhotoTemplate = document.querySelector('#picture').content.querySelector('.picture');
const imageFilters = document.querySelector('.img-filters');
const filterDefault = imageFilters.querySelector('#filter-default');
const filterRandom = imageFilters.querySelector('#filter-random');
const filterDiscussed = imageFilters.querySelector('#filter-discussed');
// const renderUserPhoto = photoObjects();

// const imgSort = (image) => {
//   const filterDefault = imageFilters.querySelector('#filter-default');
//   const filterRandom = imageFilters.querySelector('#filter-random');
//   const filterDiscussed = imageFilters.querySelector('#filter-discussed');
//
//   filterRandom.addEventListener('click', (evt) => {
//     evt.preventDefault();
//     filterRandom.classList.add('image-filters__button--active');
//     filterDefault.classList.remove('image-filters__button--active');
//   });
// };

filterDefault.addEventListener('click', (evt) => {
  evt.preventDefault();
  filterDefault.classList.add('img-filters__button--active');
  filterRandom.classList.remove('img-filters__button--active');
  filterDiscussed.classList.remove('img-filters__button--active');
});

filterRandom.addEventListener('click', (evt) => {
  evt.preventDefault();
  filterRandom.classList.add('img-filters__button--active');
  filterDefault.classList.remove('img-filters__button--active');
  filterDiscussed.classList.remove('img-filters__button--active');
});

filterDiscussed.addEventListener('click', (evt) => {
  evt.preventDefault();
  filterDiscussed.classList.add('img-filters__button--active');
  filterDefault.classList.remove('img-filters__button--active');
  filterRandom.classList.remove('img-filters__button--active');
});


const photoObjects = (renderImg) => {
  const userPhotoFragment = document.createDocumentFragment();
  renderImg.forEach(({url, likes, comments, description}) => {
    const photo = userPhotoTemplate.cloneNode(true);
    photo.querySelector('.picture__img').src = url;
    photo.querySelector('.picture__likes').textContent = likes;
    photo.querySelector('.picture__comments').textContent = comments.length;

    const handler = userPhotoClick(url, likes, comments, description);
    photo.addEventListener('click', handler);

    userPhotoFragment.appendChild(photo);
  });
  pictures.appendChild(userPhotoFragment);
};

// eslint-disable-next-line no-unused-vars
// const renderPhoto = photoObjects();

export {photoObjects};
