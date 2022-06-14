import {photoObjects} from './render-foto.js';

const uploadData = (onSuccess) => {
  fetch('https://23.javascript.pages.academy/kekstagram/data')
    .then((response) => response.json())
    .then((photos) => {
      photoObjects(photos);
    });
};

export {uploadData};
