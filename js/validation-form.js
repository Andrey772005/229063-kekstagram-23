import { isEscEvent } from './utils.js';

const textHashtags = document.querySelector('.text__hashtags');
const textDescription = document.querySelector('.text__description');
const uploadSubmit = document.querySelector('.img-upload__submit');

const borderError = '3px solid red';

textHashtags.addEventListener('input', () => {
  const hashtagsValue = textHashtags.value.toLowerCase().trim();
  const hashtagsArray = hashtagsValue.split(/\s+/);
  const uniqueArray = [];

  hashtagsArray.forEach((hashtag) => {
    if (!uniqueArray.includes(hashtag)) {
      uniqueArray.push(hashtag);
    }

    if (hashtag[0] !== '#') {
      textHashtags.setCustomValidity('Хэш-тег должен начинаться с символа #');
      textHashtags.style.border = borderError;
      uploadSubmit.disabled = true;
    } else if (
      !hashtag.slice(1).match(/^[0-9A-ZА-ЯЁ]+$/i) &&
      hashtag.length > 1
    ) {
      textHashtags.setCustomValidity(
        'Строка после решётки должна состоять из букв и чисел');
      textHashtags.style.border = borderError;
      uploadSubmit.disabled = true;
    } else if (hashtag[0] === '#' && hashtag.length === 1 && hashtagsArray.length <= 5) {
      textHashtags.setCustomValidity(
        'Хеш-тег не может состоять только из одной решётки');
      textHashtags.style.border = borderError;
      uploadSubmit.disabled = true;
    } else if (hashtag.length > 20) {
      textHashtags.setCustomValidity(
        'Максимальная длина одного хэш-тега 20 символов, включая решётку');
      textHashtags.style.border = borderError;
      uploadSubmit.disabled = true;
    } else if (hashtagsArray.length > 5) {
      textHashtags.setCustomValidity('Нельзя указывать больше пяти хэш-тегов');
      textHashtags.style.border = borderError;
      uploadSubmit.disabled = true;
    } else if (uniqueArray.length !== hashtagsArray.length) {
      textHashtags.setCustomValidity(
        'Один и тот же хэш-тег не может быть использован дважды');
      textHashtags.style.border = borderError;
      uploadSubmit.disabled = true;
    } else {
      textHashtags.setCustomValidity('');
      textHashtags.style.border = '';
      uploadSubmit.disabled = false;
    }
  });

  textHashtags.reportValidity();
});

const onPopupEscKeyDown = (evt) => {
  if (isEscEvent(evt)) {
    evt.stopPropagation();
  }
};

textHashtags.addEventListener('keydown', onPopupEscKeyDown);
textDescription.addEventListener('keydown', onPopupEscKeyDown);

