import {isEscEvent} from './utils.js';
import {FOTO_SIZE} from './constant.js';

const body = document.querySelector('body');
const pictures = document.querySelector('.pictures');
const bigPicture = document.querySelector('.big-picture');
const bigPictureCancel = document.querySelector('.big-picture__cancel');

const bigPictureImage = bigPicture.querySelector('.big-picture__img img');
const bigPictureLikes = bigPicture.querySelector('.likes-count');
const socialCommentCount = bigPicture.querySelector('.social__comment-count');
const socialComments = bigPicture.querySelector('.social__comments');
const socialCaption = bigPicture.querySelector('.social__caption');
const commentsLoader = document.querySelector('.social__comments-loader ');

const onPopupEscKeyDown = (evt) => {
  if (isEscEvent(evt)) {
    evt.preventDefault();
    // eslint-disable-next-line no-use-before-define
    bigPictureClose();
  }
};

const photoComments = (comments) => {
  const commentFragment = document.createDocumentFragment();

  comments.forEach(({avatar, name, message}) => {
    const socialComment = document.createElement('li');
    const socialCommentImg = document.createElement('img');
    const socialCommentText = document.createElement('p');

    socialComment.classList.add('social__comment');
    socialCommentImg.classList.add('social__picture');
    socialCommentText.classList.add('social__text');
    socialCommentImg.src = avatar;
    socialCommentImg.alt = name;
    socialCommentImg.width = FOTO_SIZE;
    socialCommentImg.height = FOTO_SIZE;
    socialCommentText.textContent = message;

    socialComment.appendChild(socialCommentImg);
    socialComment.appendChild(socialCommentText);
    commentFragment.appendChild(socialComment);
  });
  socialComments.appendChild(commentFragment);
};

const bigPictureOpen = () => {
  bigPicture.classList.remove('hidden');
  body.classList.add('modal-open');
  socialCommentCount.classList.add('hidden');
  commentsLoader.classList.add('hidden');
  pictures.addEventListener('click', bigPictureOpen);
  document.addEventListener('keydown', onPopupEscKeyDown);
};

pictures.addEventListener('click', () => {
  bigPictureOpen();
});

const bigPictureClose = () => {
  bigPicture.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onPopupEscKeyDown);
  socialComments.innerHTML = '';
};

bigPictureCancel.addEventListener('click', bigPictureClose);

const bigPictureShow = (url, likes, comments, description) => {
  bigPictureImage.src = url;
  bigPictureLikes.textContent = likes;
  socialCommentCount.textContent = comments.length;
  socialCaption.textContent = description;

  socialComments.innerHTML = '';
  photoComments(comments);
};

const userPhotoClick = (url, likes,comments, description) => (evt) => {
  evt.preventDefault();
  bigPictureOpen();
  bigPictureShow(url, likes, comments, description);
};

export {userPhotoClick};


