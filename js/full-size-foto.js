import {isEscEvent} from './utils.js';
import {FOTO_SIZE} from './constant.js';

const COMMENT_STEP = 5;

const body = document.querySelector('body');
// eslint-disable-next-line no-unused-vars
const pictures = document.querySelector('.pictures');

const bigPicture = document.querySelector('.big-picture');
const bigPictureCancel = document.querySelector('.big-picture__cancel');

const bigPictureImage = bigPicture.querySelector('.big-picture__img img');
const bigPictureLikes = bigPicture.querySelector('.likes-count');
const socialCommentCount = bigPicture.querySelector('.social__comment-count');
const commentsLoader = bigPicture.querySelector('.comments-loader');
const socialComments = bigPicture.querySelector('.social__comments');
const socialCaption = bigPicture.querySelector('.social__caption');

const onPopupEscKeyDown = (evt) => {
  if (isEscEvent(evt)) {
    evt.preventDefault();
    // eslint-disable-next-line no-use-before-define
    bigPictureClose();
  }
};

let commentLoad = [];
let commentsCount = COMMENT_STEP;

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

const renderComments = (comments) => {
  const commentsLoaderClick = () => {
    photoComments(comments);
  };

  commentsCount = (comments.length < COMMENT_STEP) ? comments.length : commentsCount;
  commentLoad = comments.slice(0, commentsCount);
  socialComments.innerHTML = '';

  socialCommentCount.textContent = `${commentLoad.length} из ${comments.length} комментариев`;
  const commentsListFragment = document.createDocumentFragment();

  commentLoad.forEach((comment) => {
    commentsListFragment.appendChild(photoComments(comment));
  });

  socialComments.appendChild(commentsListFragment);

  if (comments.length > COMMENT_STEP && commentLoad.length < comments.length) {
    commentsLoader.classList.remove('hidden');
    commentsLoader.addEventListener('click', commentsLoaderClick);
  } else {
    commentsLoader.classList.add('hidden');
  }

  commentsCount += COMMENT_STEP;
};

const bigPictureOpen = () => {
  bigPicture.classList.remove('hidden');
  body.classList.add('modal-open');
  socialCommentCount.classList.add('hidden');
  commentsLoader.classList.add('hidden');
  document.addEventListener('keydown', onPopupEscKeyDown);
};

const bigPictureClose = () => {
  bigPicture.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onPopupEscKeyDown);
  bigPictureCancel.removeEventListener('click', bigPictureClose);
  socialComments.innerHTML = '';
  commentsCount = COMMENT_STEP;
  commentLoad = [];
};

bigPictureCancel.addEventListener('click', bigPictureClose);


const bigPictureShow = (url, likes, comments, description) => {
  commentsCount = COMMENT_STEP;
  commentLoad = [];
  body.classList.add('modal-open');
  bigPictureImage.src = url;
  bigPictureLikes.textContent = likes;
  socialCommentCount.textContent = comments;
  socialCaption.textContent = description;

  bigPictureCancel.addEventListener('click', bigPictureClose);
  bigPicture.classList.remove('hidden');

  document.addEventListener('keydown', onPopupEscKeyDown);

  // socialComments.innerHTML = '';
  photoComments(comments);
};

const userPhotoClick = (url, likes, comments, description) => (evt) => {
  evt.preventDefault();
  bigPictureOpen();
  bigPictureShow(url, likes, comments, description);
  // renderComments();
};

export {bigPictureShow, userPhotoClick};


