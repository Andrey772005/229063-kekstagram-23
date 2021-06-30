import {userPhotoContainer} from './user_photo.js'
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
const commentFragment = document.createDocumentFragment();


const photoListClick = ({url, likes, comments, description}) => {
  const photoClick = () => {

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
};

bigPicture.addEventListener('click', () => {
  bigPicture.classList.remove('hidden');
  socialCommentCount.classList.add('hidden');
  bigPictureCommentsLoader.classList.add('hidden');

  document.addEventListener('keydown', (evt) => {
    if (isEscEvent(evt)) {
    evt.preventDefault();
    bigPicture.classList.add('hidden');
    }
  });
});


