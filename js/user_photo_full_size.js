import {isEscEvent} from './utils.js';

const PHOTO_SIZE = 35;

const photos = userPhotoContainer.querySelectorAll('.picture');
const bigPicture = document.querySelector('.big-picture');
const bigPictureImage = bigPicture.querySelector('.img');
const bigPictureLikesCount = bigPicture.querySelector('.likes-count');
const bigPictureCommentsCount = bigPicture.querySelector('.comments-count');
const bigPictureCommentsLoader = bigPicture.querySelector('.comments-loader');
const bigPictureSocialCaption = bigPicture.querySelector('.social__caption');
const socialCommentCount = bigPicture.querySelector('.social__comment-count');
const socialComments = bigPicture.querySelector('.social__comments');
const commentsInput = bigPicture.querySelector('.social__footer-text');

const imageUpload = document.querySelector('.img-upload__overlay');
const textDescription = imageUpload.querySelector('.text__description');
const uploadFile = document.querySelector('#upload-file');

const commentFragment = document.createDocumentFragment();


const bigPhotoClick = ({url, likes, comments, description}) => {

  bigPicture.classList.remove('hidden');
    bigPictureImage.src = url;
    bigPictureLikesCount.textContent = likes;
    bigPictureCommentsCount.textContent = comments.length;
    bigPictureSocialCaption.textContent = description;

    socialComments.innerHTML = '';

    const addComments = (photoComments) => {
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

      socialComments.appendChild(photoComments);
    };

};

bigPicture.addEventListener('click', () => {

  socialCommentCount.classList.add('hidden');
  bigPictureCommentsLoader.classList.add('hidden');

  document.addEventListener('keydown', (evt) => {
    if (isEscEvent(evt)) {
    evt.preventDefault();
    bigPicture.classList.add('hidden');
    }
  });
});

export const closeModal = () => {
  bigPicture.classList.add('hidden');
  imageUpload.classList.add('hidden');
  socialCommentCount.classList.remove('hidden');
  bigPictureCommentsLoader.classList.remove('hidden');
  document.body.classList.remove('modal-open');
  commentsInput.value = '';
  uploadFile.value = '';
  textDescription.value = '';
  textHashtag.value = '';
};


