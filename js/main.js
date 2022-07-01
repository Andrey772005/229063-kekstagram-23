import './full-size-foto.js';
import './upload-foto.js';
import './validation-form.js';
import './data.js';
import './render-foto.js';
import {photoObjects} from './render-foto.js';
import {shuffleArray} from './data.js';
import {debounce} from './utils.js';
import {dataRequest} from './fetch.js';
import {errorMessage} from './server-data.js';


const DEFAULT_PREVIEW = 25;
const RANDOM_PREVIEW = 10;

const filter = document.querySelector('.img-filters');
let photos = [];

const removeClass = () => {
  const activeFilter = document.querySelector('.img-filters__button--active');
  activeFilter.classList.remove('img-filters__button--active');
};

const removePhotos = () => {
  const images = document.querySelectorAll('.picture');
  if (images) {
    images.forEach(element => {
      element.remove();
    });
  }
};

const filters = {
  'filter-default': () => {
    photoObjects(photos.slice(0, DEFAULT_PREVIEW));
  },
  'filter-random': () => {
    photoObjects(shuffleArray(photos.slice()).slice(0, RANDOM_PREVIEW));
  },
  'filter-discussed': () => {
    photoObjects(photos.slice().sort((a, b) => b.comments.length - a.comments.length));
  },
};

const onSuccess = (data) => {
  filter.classList.remove('img-filters--inactive');
  photos = data.slice();
  photoObjects(photos.slice(0, DEFAULT_PREVIEW));
};

const onError = () => {
  errorMessage();
};

dataRequest(onSuccess, onError, 'GET');

const onFilterClick = debounce((evt) => {
  if (evt.target.classList.contains('img-filters__button')) {
    removePhotos();
    removeClass();
    evt.target.classList.add('img-filters__button--active');
    filters[evt.target.id]();
  }
});

filter.addEventListener('click', onFilterClick);
