import {isEscEvent} from './utils.js';

const PHOTO_SIZE = 35;
const commentCount = 5;
let index = 0;

const bigPicture = document.querySelector('.big-picture');
const bigPictureImage = bigPicture.querySelector('.big-picture__img img');
const bigPictureSocial = bigPicture.querySelector('.big-picture__social');
const bigPictureSocialHeader = bigPictureSocial.querySelector('.social__header');
const bigPictureSocialCaption = bigPictureSocialHeader.querySelector('.social__caption');
const bigPictureSocialLikes = bigPictureSocialHeader.querySelector('.social__likes');
const bigPictureLikesCount = bigPictureSocialLikes.querySelector('.likes-count');

const socialCommentCount = bigPicture.querySelector('.social__comment-count');
const bigPictureCommentsCount = socialCommentCount.querySelector('.comments-count');
const commentLoader = bigPicture.querySelector('.comments-loader');
const socialComments = bigPicture.querySelector('.social__comments');
const userComment = socialComments.querySelector('.social__comment');
const userPicture = userComment.querySelector('.social__picture');
const userText = userComment.querySelector('.social__text');
const body = document.querySelector('body');

const addComments = (photoComments) => {
  const commentFragment = document.createDocumentFragment();

  photoComments.forEach(({avatar, name, message}) => {
    const commentBlock = document.createElement('li');
    const commentPicture = document.createElement('img');
    const commentText = document.createElement('p');

    commentBlock.classList.add('social__comment');
    commentPicture.classList.add('social__picture');
    commentText.classList.add('social__text');
    commentPicture.src = avatar;
    commentPicture.alt = name;
    commentPicture.width = PHOTO_SIZE;
    commentPicture.height = PHOTO_SIZE;
    commentText.textContent = message;

    commentBlock.appendChild(commentPicture);
    commentBlock.appendChild(commentText);
    commentFragment.appendChild(commentBlock);
  });

  socialComments.appendChild(commentFragment);

};

const showCommentsClick = () => {
  const showComments = socialComments.children;
  const showCommentsCount = socialComments.children.length;
  const numberComment = (showCommentsCount > index + commentCount) ? index + commentCount : showCommentsCount;
  for (let i = index; i <= numberComment - 1; i++) {
    showComments[index].classList.remove('hidden');
  }
  commentLoader.classList.toggle('hidden', showCommentsCount === numberComment);
  socialCommentCount.firstChild.textContent = `${numberComment} из `;
  index = numberComment;
};

commentLoader.addEventListener('click', showCommentsClick);

const changeDataBigPicture = (photoData) => {
  bigPictureImage.src = photoData.url;
  bigPictureLikesCount.textContent = photoData.likes;
  bigPictureCommentsCount.textContent = photoData.comments.length;
  bigPictureSocialCaption.textContent = photoData.description;

  socialComments.innerHTML = '';
  addComments(photoData.comments); // Не забывать вызывать функцию!!!!
};

const showModal = () => {
  bigPicture.classList.remove('hidden');
  body.classList.add('.modal-open');
};

const closeModal = () => {
  bigPicture.classList.add('hidden');
  body.classList.remove('.modal-open');
};

export const userPhotoClickHandler = (photoObj) => (evt) => {
  evt.preventDefault();
  showModal();
  changeDataBigPicture(photoObj);
};

const bigPictureClickHandler = (evt) => {
  evt.preventDefault();

  if (evt.target.classList.contains('cancel')) {
    closeModal();
  }
};

const bigPictureKeydownHandler = (evt) => {
  if (isEscEvent(evt)) {
    closeModal();
  }
};

bigPicture.addEventListener('click', bigPictureClickHandler);
document.addEventListener('keydown', bigPictureKeydownHandler);
