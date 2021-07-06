import {isValidMaxStringLength} from './utils.js';

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

const textHashtags = document.querySelector('.text__hashtags');
const textComments = document.querySelector('.text__description');


const validationForm = (evt) => {
  if (textHashtags.value !== '') {
    const hashtag = textHashtags.value.toLowerCase().trim().split(' ').filter((hashtags) => hashtags);
    const hashtagsSet = new Set(hashtag);

    hashtag.forEach((hashtags) => {
      if (!HASHTAG_SYMBOLS.test(hashtags)) {
        textHashtags.setCustomValidity(TEXT_VALIDATE);
        textHashtags.style.outlineColor = INVALID_INPUT;
        evt.preventDefault();
      } else if (hashtag.length !== hashtagsSet.size) {
        textHashtags.setCustomValidity(ERROR_NO_REPEAT);
        textHashtags.style.outlineColor = INVALID_INPUT;
        evt.preventDefault();
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

export {validationForm, validationFormComments};
