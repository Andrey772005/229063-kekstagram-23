import {isEscEvent, isValidMaxStringLength} from './utils.js';


const HASHTAG_SYMBOLS = /^#[A-za-zА-Яа-я0-9]{1,19}$/;
const MAXIMUM_HASHTAGS = 5;
const MAX_COMMENTS_SYMBOL = 140;
const VALID_INPUT = 'green';
const INVALID_INPUT = 'red';
const TEXT_VALIDATE = `Хэш-тег начинается с символа # и должен состоять из букв и чисел и не может
содержать пробелы.
Максимальная длина одного хэш-тега 20 символов, включая решётку.
Хэш-теги должны разделяться пробелами`;
const ERROR_NO_REPEAT = 'Хэштег не может быть использован дважды';

const body = document.querySelector('body');
const imageUploadForm = document.querySelector('.img-upload__form');
const imageEditingForm = imageUploadForm.querySelector('.img-upload__overlay');
const imageUploadScale = imageUploadForm.querySelector('.img-upload__scale');
const scaleControlSmaller = imageUploadScale.querySelector('.scale__control--smaller');
const scaleControlBigger = imageUploadScale.querySelector('.scale__control--bigger');
const imageUploadPreview = imageUploadForm.querySelector('.img-upload__preview img');
const imageUploadInput = imageUploadForm.querySelector('.img-upload__input');
const uploadFile = imageUploadForm.querySelector('#upload-file');
const closeUploadFile = imageUploadForm.querySelector('#upload-cancel');
const textHashtags = imageUploadForm.querySelector('.text__hashtags');
const textComments = imageUploadForm.querySelector('.text__description');


const validationForm = (evt) => {

  if (textHashtags.value !== '') {
    const hashtag = textHashtags.value.toLowerCase().trim().split(' ').filter((hashtags) => hashtags);
    const hashtagsSet = new Set(hashtag);

    hashtag.forEach((hashtags) => {
      if (!HASHTAG_SYMBOLS.test(hashtags)) {
        evt.preventDefault();
        textHashtags.setCustomValidity(TEXT_VALIDATE);
        textHashtags.style.outlineColor = INVALID_INPUT;
      } else if (hashtag.length !== hashtagsSet.size) {
        evt.preventDefault();
        textHashtags.setCustomValidity(ERROR_NO_REPEAT);
        textHashtags.style.outlineColor = INVALID_INPUT;
      } else {
        textHashtags.setCustomValidity('');
        textHashtags.style.outlineColor = VALID_INPUT;
      }
      textHashtags.reportValidity();
    });
    if (hashtag.length > MAXIMUM_HASHTAGS) {
      textHashtags.setCustomValidity(`Количество хэштегов должно быть не более ${MAXIMUM_HASHTAGS}`);
    }
  } else {
    textHashtags.setCustomValidity('');
    textHashtags.style.outlineColor = VALID_INPUT;
  }
};

textHashtags.addEventListener('input', validationForm);

const validationFormComments = (evt) => {
  const textCommentsLength = isValidMaxStringLength(textComments.value, MAX_COMMENTS_SYMBOL);
  if (!textCommentsLength) {
    textComments.setCustomValidity(`Удалите лишние ${textComments.value.length - MAX_COMMENTS_SYMBOL} симв.`);
    textComments.style.outlineColor = INVALID_INPUT;
    evt.preventDefault();
  } else {
    textComments.setCustomValidity('');
    textComments.style.outlineColor = VALID_INPUT;
  }
  textComments.reportValidity();
};

textComments.addEventListener('input', validationFormComments);

const fileReader = () => {
  const file = imageUploadInput.files[0];
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = function() {
    image.src = reader.result;
  };
};

const showModal = () => {
  imageEditingForm.classList.remove('hidden');
  body.classList.add('.modal-open');
};

const closeModal = () => {
  imageEditingForm.classList.add('hidden');
  body.classList.remove('.modal-open');
};

const photoFormClickHandler = (evt) => {
  evt.preventDefault();

  if (evt.target.classList.contains('cancel')) {
    closeModal();
  }
};

const photoFormKeydownHandler = (evt) => {
  evt.preventDefault();
  if (isEscEvent(evt)) {
    closeModal();
  }
};

imageUploadForm.addEventListener('click', photoFormClickHandler);
document.addEventListener('keydown', photoFormKeydownHandler);

const showPhotoFormHandler = (evt) => {
  evt.preventDefault();
  showModal();
  fileReader();
  document.addEventListener('keydown', isEscEvent);
  textHashtags.addEventListener('input', validationForm);
  textComments.addEventListener('input', validationFormComments);
};

imageUploadForm.addEventListener('change', showPhotoFormHandler);

export {showPhotoFormHandler};
