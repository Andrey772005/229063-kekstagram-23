// eslint-disable-next-line no-unused-vars
function getRandomPositiveInteger (min, max) {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
}

const uniqueRandomNumberGenerator = (min, max) => {
  const previousValues = [];

  return () => {
    let currentValue = getRandomPositiveInteger(min, max);

    if (previousValues.length >= (max - min + 1)) {
      throw new Error(`Перебраны все числа из диапазона от ${  min  } до ${  max }`);
    }
    while (previousValues.includes(currentValue)) {
      currentValue = getRandomPositiveInteger(min, max);
    }
    previousValues.push(currentValue);
    return currentValue;
  };
};

// eslint-disable-next-line no-unused-vars
function checkStringLength (string, length) {
  return string.length <= length;
}

const QUANTITYOBJ = 26;

const DESCRIPTION = [
  'Лучшее фото',
  'Фотография года',
  'На новый фотик',
  'В прошлом году',
  'Из недавнего',
  'Как то так!)',
];

const MESSAGE = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const NAMES = [
  'Иван',
  'Алексей',
  'Дмитрий',
  'Вячеслав',
  'Михаил',
  'Роман',
  'Виталий',
  'Андрей',
  'Антон',
  'Станислав',
  'Богдан',
  'Руслан',
  'Юрий',
];

const shuffleArray = (array) => {
  // eslint-disable-next-line id-length
  for (let i = array.length - 1; i > 0; i--) {
    const temp = array[i];
    const randomIndex  = uniqueRandomNumberGenerator(0, array.length - 1);
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
  const descriptionId = getRandomPositiveInteger(0, 25);
  const url = `photos/${ getRandomPositiveInteger (0, 25) }.jpg`;
  const description = DESCRIPTION[getRandomPositiveInteger(0, DESCRIPTION.length - 1)];
  const likes = uniqueRandomNumberGenerator(15, 200);

  return {
    id: descriptionId,
    url: url,
    description: description,
    likes: likes(),
    comments: commentsGenerator(getRandomPositiveInteger(0, 10)),
  };
};

// eslint-disable-next-line no-unused-vars
const photoObjects = new Array(QUANTITYOBJ).fill(null).map(() => photoObj());

