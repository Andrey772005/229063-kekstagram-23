/* eslint-disable no-unused-vars */
/* eslint-disable id-length */
function getRandomPositiveInteger (a, b) {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
}

function checkStringLength (string, length) {
  return string.length <= length;
}


const GENERATE_PHOTO = 25;

const NAMES = [
  'Иван',
  'Дмитрий',
  'Юля',
  'Андрей',
  'Алексей',
  'Анна',
  'Вячеслав',
  'Наталья',
  'Ростислав',
  'Женя',
];

const COMMENTS = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
  'Имена авторов также должны быть случайными. Набор имён для комментаторов составьте сами. Подставляйте случайное имя в поле name.',
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


const commentsGenerator = (commentObj) => {
  const comments = [];
  for (let i = 0; i < commentObj; i++) {
    comments[i] = {
      id: getRandomPositiveInteger(1, 200),
      avatar: `img/avatar-${ getRandomPositiveInteger(1, 6) }.svg`,
      message: COMMENTS.slice(0, getRandomPositiveInteger(0, COMMENTS.length - 1)).join(''),
      name: NAMES[getRandomPositiveInteger(0, NAMES.length - 1)],
    };
  }

  return comments;
};

const photoObj = () => ({
  id: getRandomPositiveInteger(1, 25),
  url: `photos/${ getRandomPositiveInteger(1, 25) }.jpg`,
  description: DESCRIPTION[getRandomPositiveInteger(0, DESCRIPTION.length - 1)],
  likes: getRandomPositiveInteger(15, 200),
  comments: commentsGenerator(getRandomPositiveInteger(0, 10)),
});


const generatePhotoObj = new Array(GENERATE_PHOTO).fill(null).map(() => photoObj());

