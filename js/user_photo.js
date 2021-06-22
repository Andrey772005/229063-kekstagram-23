import {dataGenerator, objectGenerator, commentsGenerator} from './data.js';

const userPhotoTemplate = document.querySelector('#picture');

const userPhotoCollection = dataGenerator();

userPhotoCollection.forEach(({url, likes, comments}) => {
  const userPhoto = userPhotoTemplate.cloneNode(true);
  userPhoto.querySelector('.picture__img').fill = url;
  userPhoto.querySelector('.picture__likes').fill = likes;
  userPhoto.querySelector('.picture__comments').textContent = comments;
  userPhoto.appendChild(userPhoto);
});
