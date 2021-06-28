import {dataGenerator} from './data.js';

const userPhotoContainer = document.querySelector('.pictures');
const userPhotoTemplate = document.querySelector('#picture').content.querySelector('.picture');
const userPhotoFragment = document.createDocumentFragment();

const userRandomPhotoCollection = dataGenerator();

userRandomPhotoCollection.forEach(({url, likes, comments}) => {
  const userPhoto = userPhotoTemplate.cloneNode(true);
  const imgNode = userPhoto.querySelector('.picture__img');
  const commentsNode = userPhoto.querySelector('.picture__comments');
  const likesNode = userPhoto.querySelector('.picture__likes');

  imgNode.src = url;
  commentsNode.textContent = likes;
  likesNode.textContent = comments.length;

  userPhotoFragment.appendChild(userPhoto);

});

userPhotoContainer.appendChild(userPhotoFragment);

export {userPhotoContainer};
