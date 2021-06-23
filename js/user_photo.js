import {dataGenerator} from './data.js';

const userPhotoCollection = document.querySelector('.pictures');
const userPhoto = userPhotoCollection.querySelector('.img-upload');
const userPhotoTemplate = document.querySelector('#picture').content.querySelector('.picture');

const userRandomPhotoCollection = dataGenerator();

const userPhotoFragment = document.createDocumentFragment();

userRandomPhotoCollection.forEach(({url, likes, comments}) => {
  const userRandomPhoto = userPhotoTemplate.cloneNode(true);
  userRandomPhoto.querySelector('.picture__img').fill = url;
  userRandomPhoto.querySelector('.picture__likes').fill = likes;
  userRandomPhoto.querySelector('.picture__comments').textContent = comments;
  userPhotoFragment.appendChild(userRandomPhoto);
});

userPhotoCollection.appendChild(userPhotoTemplate);

