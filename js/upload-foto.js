/* eslint-disable no-use-before-define */
/* eslint-disable no-unused-vars */
import {isEscEvent} from './utils.js';

const scalePercent = {
  min: 25,
  max: 100,
  step: 25,
};

const body = document.querySelector('body');
const pictures = document.querySelector('.pictures');
const imageUpload = pictures.querySelector('.img-upload');
const imageUploadOverlay = imageUpload.querySelector('.img-upload__overlay');
const uploadFile = imageUpload.querySelector('.img-upload__label');
const imageUploadInput = imageUpload.querySelector('.img-upload__input');
const imageUploadCansel = imageUploadOverlay.querySelector('.img-upload__cancel');
const effectLevel = imageUploadOverlay.querySelector('.effect-level');

const onPopupEscKeyDown = (evt) => {
  if (isEscEvent(evt)) {
    evt.preventDefault();
    // eslint-disable-next-line no-use-before-define
    cancelUpload();
  }
};

const upload = () => {
  imageUploadOverlay.classList.remove('hidden');
  body.classList.add('modal-open');
  imageUploadOverlay.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscKeyDown);
  imageUploadEffectLevel.classList.add('hidden');
  imageUploadPreview.classList = '';
  imageUploadPreview.style = '';
};

uploadFile.addEventListener('click', upload);

const cancelUpload = () => {
  imageUploadOverlay.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onPopupEscKeyDown);
  imageUploadInput.value = '';
};

imageUploadCansel.addEventListener('click', cancelUpload);

// Увеличение картинки //

const imageUploadPreview = imageUpload.querySelector('.img-upload__preview > img');
const imageUploadScale = document.querySelector('.img-upload__scale');
const scaleControlValue = imageUploadScale.querySelector('.scale__control--value');
const scaleSmaller = imageUploadScale.querySelector('.scale__control--smaller');
const scaleBigger = imageUploadScale.querySelector('.scale__control--bigger');

const clearScale = () => {
  imageUploadPreview.style = 'transform: scale(1.00)';
  imageUploadPreview.style.filter = '';
  scaleControlValue.value = '50%';
  // eslint-disable-next-line no-use-before-define
  imageUploadPreview.classList.remove(lastClass);
  imageUploadPreview.classList.add('effects__preview--none');
};

scaleSmaller.addEventListener('click', () => {
  let scale = parseInt(scaleControlValue.value, 10) - scalePercent.step;

  if (scale <= scalePercent.min) {
    scale = scalePercent.min;
  }
  scaleControlValue.value = `${ scale }%`;
  scale = scale / 100;
  imageUploadPreview.style.transform = `scale(${ scale })`;
});

scaleBigger.addEventListener('click', () => {
  let scale = parseInt(scaleControlValue.value, 10) + scalePercent.step;

  if (scale >= scalePercent.max) {
    scale = scalePercent.max;
  }
  scaleControlValue.value = `${ scale }%`;
  scale = scale / 100;
  imageUploadPreview.style.transform = `scale(${ scale })`;
});

// Фильтры //

const SLIDER_DEFAULT = 100;
let lastClass = '';

const imageUploadEffects = imageUploadOverlay.querySelector('.img-upload__effects');
const imageUploadEffectLevel = imageUploadOverlay.querySelector('.img-upload__effect-level');
const imageEffectValue = imageUploadEffectLevel.querySelector('.effect-level__value');
const slider = imageUploadOverlay.querySelector('.effect-level__slider');
const previewNone = imageUploadEffects.querySelector('.effects__preview--none');
const previewChrome = imageUploadEffects.querySelector('.effects__preview--chrome');
const previewSepia = imageUploadEffects.querySelector('.effects__preview--sepia');
const previewMarvin = imageUploadEffects.querySelector('.effects__preview--marvin');
const previewPhobos = imageUploadEffects.querySelector('.effects__preview--phobos');
const previewHeat = imageUploadEffects.querySelector('.effects__preview--heat');

const onEffectChange = (evt) => {
  if (evt.target.classList.contains('effects__preview')) {
    if (lastClass !== '') {
      imageUploadPreview.classList.remove(lastClass);
    }
    const defaultClass = evt.target.classList[1];
    if (defaultClass === 'effects__preview--none') {
      imageUploadEffectLevel.classList.add('hidden');
    } else {
      imageUploadEffectLevel.classList.remove('hidden');
    }
    lastClass = defaultClass;
    imageUploadPreview.classList.add(defaultClass);
  }
  slider.noUiSlider.reset();

};

imageUploadEffects.addEventListener('click', onEffectChange);

// Слайдер //

noUiSlider.create(slider, {
  range: {
    min: 0,
    max: 100,
  },
  start: 100,
  step: 1,
  connect: 'lower',
});

const filters = {
  chrome: (value) => `grayscale(${value * 0.01})`,
  sepia: (value) => `sepia(${value * 0.01})`,
  marvin: (value) => `invert(${value}%)`,
  phobos: (value) => `blur(${value * 0.03}px)`,
  heat: (value) => `brightness(${value * 0.03})`,
};

// eslint-disable-next-line id-length
slider.noUiSlider.on('update', (_, handle, unencoded) => {
  slider.value = unencoded[handle];
  imageEffectValue.value = slider.value;

  const currentFilter = imageUploadPreview.className.replace(
    'effects__preview--', '');

  if (currentFilter === '' || currentFilter === 'none') {
    imageUploadPreview.style.filter = '';
  } else {
    imageUploadPreview.style.filter = filters[currentFilter](
      imageEffectValue.value);
  }
});
