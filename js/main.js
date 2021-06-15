
function randomNumber (min, max) {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
};


const MAX_STRING_LENGTH = 140;
const isValidMaxStringLength = (someComment, maxLength = MAX_STRING_LENGTH) =>
  someComment.length <= maxLength;


const PHOTO_URL = [
  'photos/1.jpg',
  'photos/2.jpg',
  'photos/3.jpg',
  'photos/4.jpg',
  'photos/5.jpg',
  'photos/6.jpg',
  'photos/7.jpg',
  'photos/8.jpg',
  'photos/9.jpg',
  'photos/10.jpg',
  'photos/11.jpg',
  'photos/12.jpg',
  'photos/13.jpg',
  'photos/14.jpg',
  'photos/15.jpg',
  'photos/16.jpg',
  'photos/17.jpg',
  'photos/18.jpg',
  'photos/19.jpg',
  'photos/20.jpg',
  'photos/21.jpg',
  'photos/22.jpg',
  'photos/23.jpg',
  'photos/24.jpg',
  'photos/25.jpg',
];

const DESCRIPTION = [
  'Бухта у отеля',
  'Знак',
  'Пляж на тропическом острове',
  'Чика',
  'Довольный рис',
  'Клевая тачка',
  'Клубника',
  'Сок из смородины',
  'Чика и самолет',
  'Обувница',
  'Дорога к пляжу',
  'Ауди',
  'Вегетарианское блюдо',
  'Суши кот',
  'Дурное воспитание',
  'Вид из окна самолета',
  'Оркестр',
  'Раритет',
  'Тапки с фонариком',
  'Вид на отель',
  'Салат',
  'Закат на пляже',
  'Краб',
  'Нашествие',
  'Сафари',
];

const AVATAR = [
  'img/avatar-1.svg',
  'img/avatar-2.svg',
  'img/avatar-3.svg',
  'img/avatar-4.svg',
  'img/avatar-5.svg',
  'img/avatar-6.svg',
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
];

// Функция из демо

const uniqueRandomNumberGenerator = (min, max) => {
  const previousValues = [];

  return () => {
    let currentValue = randomNumber(min, max);
    // if (previousValues.length >= (max - min + 1)) {
    //   throw new Error('Перебраны все числа из диапазона от ' + min + ' до ' + max);
    // }
    while (previousValues.includes(currentValue)) {
      currentValue = randomNumber(min, max);
    }
    previousValues.push(currentValue);
    return currentValue();
  };
};

//////////////////////////

// Функция из интернета

function generateArrayRandomNumber (min, max) {
  let totalNumbers = max - min + 1,
    arrayTotalNumbers = [],
    arrayRandomNumbers = [],
    tempRandomNumber;

  while (totalNumbers--) {
    arrayTotalNumbers.push(totalNumbers + min);
  }

  while (arrayTotalNumbers.length) {
    tempRandomNumber = Math.round(Math.random() * (arrayTotalNumbers.length - 1));
    arrayRandomNumbers.push(arrayTotalNumbers[tempRandomNumber]);
    arrayTotalNumbers.splice(tempRandomNumber, 1);
  }

  return arrayRandomNumbers;
}

generateArrayRandomNumber();

//////////////////////////////

const objectGenerator = () => {
  const photoDescription = {
    id: randomNumber(1, 25),
    url: PHOTO_URL[randomNumber(0, PHOTO_URL.length - 1)],
    description: DESCRIPTION[randomNumber(0, DESCRIPTION.length - 1)],
    likes: randomNumber(15, 200),
    comments: commentsGenerator(randomNumber(0, 10)),
  };

  return photoDescription;
};

const commentsGenerator = (quantityComments) => {
  const comments = [];

  for (let i = 0; i < quantityComments; i++) {
    comments[i] = {
      userId: i,
      avatar: 'img/avatar-' + randomNumber(1, 6) + '.svg',
      message: MESSAGE.slice(0, randomNumber(0, MESSAGE.length - 1)).join(''),
      name: NAMES[randomNumber(0, NAMES.length - 1)],
    };
  }

  return comments;
};

const dataGenerator = (quantityObject = 25) => {
  const data = [];

  for (let i = 0; i < quantityObject; i++) {
    data[i] = objectGenerator();
  }

  return data;
};

console.log(dataGenerator());
