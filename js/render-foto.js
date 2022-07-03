import {shuffleArray} from './data.js';
import {userPhotoClick} from './full-size-foto.js';

const pictures = document.querySelector('.pictures');
const userPhotoTemplate = document.querySelector('#picture').content.querySelector('.picture');
const imageFilters = document.querySelector('.img-filters');
const filterDefault = imageFilters.querySelector('#filter-default');
const filterRandom = imageFilters.querySelector('#filter-random');
const filterDiscussed = imageFilters.querySelector('#filter-discussed');
// const renderUserPhoto = photoObjects();


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
