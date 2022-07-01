/* eslint-disable no-use-before-define */
import {photoObjects} from './render-foto.js';
import {isEscEvent} from './utils.js';

const ALERT_TIME = 3000;
const body = document.querySelector('body');
const error = document.querySelector('#error').content.querySelector('.error');
const success = document.querySelector('#success').content.querySelector('.success');
const imageUploadForm = document.querySelector('.img-upload__form');
const imageFilters = document.querySelector('.img-filters');
const errorFragment = document.createDocumentFragment();
const successFragment = document.createDocumentFragment();


const onPopupEscKeyDown = (evt) => {
  if (isEscEvent(evt)) {
    evt.preventDefault();
    // eslint-disable-next-line no-use-before-define
    closeAlertMessage();
  }
};

// Получение данных

fetch('https://23.javascript.pages.academy/kekstagram/data')
  .then((response) => response.json())
  .then((photos) => {
    photoObjects(photos);
    imageFilters.classList.remove('img-filters--inactive');
  });


const closeAlertMessage = () => {
  errorMessage.remove;
  successMessage.remove;
  document.removeEventListener('keydown', onPopupEscKeyDown);
};

// Сообщение об ошибке

const errorMessage = (message, button) => {
  const errorElement = error.cloneNode(true);
  const errorButton = errorElement.querySelector('.error__button');

  errorElement.querySelector('.error__title').textContent = message;
  errorElement.querySelector('.error__button').textContent = button;

  document.addEventListener('click', (evt) => {
    const errorInner = document.querySelector('.error__inner');
    if (!errorInner.contains(evt.target)) {
      closeAlertMessage('.error');
    }
  });

  errorButton.addEventListener('click', () => {
    closeAlertMessage();
  });

  document.addEventListener('keydown', onPopupEscKeyDown);

  errorElement.appendChild(errorFragment);
  body.appendChild(errorFragment);

  setTimeout(() => {
    errorFragment.remove;
  }, ALERT_TIME);
};


// Сообщение об удачной загрузке

const successMessage = (message, button) => {
  const successElement = success.cloneNode(true);
  const successButton = successElement.querySelector('.success__button');

  successElement.querySelector('.success__title').textContent = message;
  successElement.querySelector('.success__button').textContent = button;

  document.addEventListener('click', (evt) => {
    const successInner = document.querySelector('.success__inner');
    if (!successInner.contains(evt.target)) {
      closeAlertMessage();
    }
  });

  document.addEventListener('keydown', onPopupEscKeyDown);

  successElement.appendChild(successFragment);
  body.appendChild(successFragment);

  successButton.addEventListener('click', () => {
    closeAlertMessage('.success');
  });

  setTimeout(() => {
    errorFragment.remove;
  }, ALERT_TIME);
};

// Отправка данных

const sendForm = () => {
  imageUploadForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const formData = new FormData(evt.target);

    fetch('https://23.javascript.pages.academy/kekstagram',
      {
        method: 'POST',
        body: formData,
      },
    )
      .then((response) => {
        if (response.ok) {
          successMessage();
        } else {
          errorMessage();
        }
      })
      .catch(() => {
        errorMessage();
      });
  });
};

export {sendForm, errorMessage};

// const URL = 'https://23.javascript.pages.academy/kekstagram';
// //
// const getData = async () => {
//   let response;
//   try {
//     response = await fetch(URL);
//     successMessage();
//   } catch (error) {
//     errorMessage();
//   }
//
// };
// const data = await getData();
//

