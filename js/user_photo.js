import {dataGenerator} from './data.js';
import {userPhotoClickHandler} from './user_photo_full_size.js';

const userPhotoContainer = document.querySelector('.pictures');
const userPhotoTemplate = document.querySelector('#picture').content.querySelector('.picture');
const userPhotoFragment = document.createDocumentFragment();

const userRandomPhotoCollection = dataGenerator();

userRandomPhotoCollection.forEach((photoObj) => {
  const userPhoto = userPhotoTemplate.cloneNode(true);
  const imgNode = userPhoto.querySelector('.picture__img');
  const commentsNode = userPhoto.querySelector('.picture__comments');
  const likesNode = userPhoto.querySelector('.picture__likes');

  const handler = userPhotoClickHandler(photoObj);
  userPhoto.addEventListener('click', handler);

  imgNode.src = photoObj.url;
  commentsNode.textContent = photoObj.likes;
  likesNode.textContent = photoObj.comments.length;

  userPhotoFragment.appendChild(userPhoto);

});

userPhotoContainer.appendChild(userPhotoFragment);

export {userPhotoContainer};
