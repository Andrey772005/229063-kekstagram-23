import {randomNumber, MAX_STRING_LENGTH, shuffle, uniqueRandomNumberGenerator} from './utils.js';
import {DESCRIPTION, MESSAGE, NAMES} from './massive.js';

export const commentsGenerator = (quantityComments) => {
  const comments = [];

  const generateUniqUserId = uniqueRandomNumberGenerator(0, quantityComments - 1);

  for (let i = 0; i < quantityComments; i++) {
    const userId = generateUniqUserId();
    comments[i] = {
      userId: userId,
      avatar: `img/avatar-${  randomNumber(1, 6)  }.svg`,
      message: shuffle(MESSAGE).slice(0, randomNumber(1, MESSAGE.length - 1)).join(' '),
      name: NAMES[randomNumber(0, NAMES.length - 1)],
    };
  }

  return comments;
};


export const objectGenerator = (id) => {
  const photoDescription = {
    id,
    url: 'photos/' + randomNumber(1, 25) + 'jpg',
    description: DESCRIPTION[randomNumber(0, DESCRIPTION.length - 1)],
    likes: randomNumber(15, 200),
    comments: commentsGenerator(randomNumber(0, 10)),
  };

  return photoDescription;
};


export const dataGenerator = (quantityObject) => {
  const data = [];
  const generateUniqUserId = uniqueRandomNumberGenerator(0, quantityObject - 1);

  for (let i = 0; i < quantityObject; i++) {
    const id = generateUniqUserId();
    data[i] = objectGenerator(id);
  }

  return data;
};


