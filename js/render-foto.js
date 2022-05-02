import {photoObjects} from './data.js';

const pictures = document.querySelector('.pictures');

const userPhotoTemplate = document.querySelector('#picture').content.querySelector('.picture');

const renderUserPhoto = photoObjects;
const userPhotoFragment = document.createDocumentFragment();

renderUserPhoto.forEach(({url, likes, comments}) => {
  const photo = userPhotoTemplate.cloneNode(true);
  photo.querySelector('.picture__img').src = url;
  photo.querySelector('.picture__likes').textContent = likes;
  photo.querySelector('.picture__comments').textContent = comments.length;
  userPhotoFragment.appendChild(photo);
});

pictures.appendChild(userPhotoFragment);
