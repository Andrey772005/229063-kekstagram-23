
function randomNumber (min, max) {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
}

// const MAX_STRING_LENGTH = 140;
// const isValidMaxStringLength = (someComment, maxLength = MAX_STRING_LENGTH) =>
//   someComment.length <= maxLength;

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

const shuffle = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const temp = array[i];
    const randomIndex  = randomNumber(0, array.length - 1);
    array[i] = array[randomIndex];
    array[randomIndex] = temp;
  }

  return array;
};


const uniqueRandomNumberGenerator = (min, max) => {
  const previousValues = [];

  return () => {
    let currentValue = randomNumber(min, max);

    if (previousValues.length >= (max - min + 1)) {
      throw new Error('Перебраны все числа из диапазона от ' + min + ' до ' + max);
    }
    while (previousValues.includes(currentValue)) {
      currentValue = randomNumber(min, max);
    }
    previousValues.push(currentValue);
    return currentValue;
  };
};

const commentsGenerator = (quantityComments) => {
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


const objectGenerator = (id) => {
  const photoDescription = {
    id,
    url: 'photos/' + randomNumber(1, 25) + 'jpg',
    description: DESCRIPTION[randomNumber(0, DESCRIPTION.length - 1)],
    likes: randomNumber(15, 200),
    comments: commentsGenerator(randomNumber(0, 10)),
  };

  return photoDescription;
};


const dataGenerator = (quantityObject) => {
  const data = [];
  const generateUniqUserId = uniqueRandomNumberGenerator(0, quantityObject - 1);

  for (let i = 0; i < quantityObject; i++) {
    const id = generateUniqUserId();
    data[i] = objectGenerator(id);
  }

  return data;
};

console.log(dataGenerator(25));
