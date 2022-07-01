import {QUANTITY_OBJ, DESCRIPTION, MESSAGE, NAMES} from './constant.js';
import {getRandomPositiveInteger, getUniqueNumber} from './utils.js';

const shuffleArray = (array) => {
  // eslint-disable-next-line id-length
  for (let i = array.length - 1; i > 0; i--) {
    const temp = array[i];
    const randomIndex  = getRandomPositiveInteger(0, array.length - 1);
    array[i] = array[randomIndex];
    array[randomIndex] = temp;
  }

  return array;
};

const commentsGenerator = (quantityComments) => {
  const comments = [];
  // eslint-disable-next-line id-length
  for (let i = 0; i < quantityComments; i++) {
    comments[i] = {
      userId: getRandomPositiveInteger(1, 300),
      avatar: `img/avatar-${ getRandomPositiveInteger(1, 6)  }.svg`,
      message: shuffleArray(MESSAGE).slice(0, getRandomPositiveInteger(1, MESSAGE.length - 1)).join(' '),
      name: NAMES[getRandomPositiveInteger(0, NAMES.length - 1)],
    };
  }

  return comments;
};

const photoObj = () => {
  const descriptionId = getRandomPositiveInteger(1, 25);
  const url = `photos/${ getUniqueNumber() }.jpg`;
  const description = DESCRIPTION[getRandomPositiveInteger(0, DESCRIPTION.length - 1)];
  const likes = getRandomPositiveInteger(15, 200);

  return {
    url: url,
    id: descriptionId,
    description: description,
    likes: likes,
    comments: commentsGenerator(getRandomPositiveInteger(0, 10)),
  };
};

const photoObjects = () => new Array(QUANTITY_OBJ).fill(null).map(() => photoObj());

export {photoObjects, shuffleArray};
