
function randomNumber (min, max) {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
}
console.log(randomNumber(0, 100));

const MAX_STRING_LENGTH = 140;
const isValidMaxStringLength = (someComment, maxLength = MAX_STRING_LENGTH) =>
  someComment.length <= maxLength;


// const DESCRIPTION_ID = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];

function DESCRIPTION_ID (min = 1, max = 25) {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
};

const PHOTO_URL = [
  url: 'photos/1.jpg',
  url: 'photos/2.jpg',
  url: 'photos/3.jpg',
  url: 'photos/4.jpg',
  url: 'photos/5.jpg',
  url: 'photos/6.jpg',
  url: 'photos/7.jpg',
  url: 'photos/8.jpg',
  url: 'photos/9.jpg',
  url: 'photos/10.jpg',
  url: 'photos/11.jpg',
  url: 'photos/12.jpg',
  url: 'photos/13.jpg',
  url: 'photos/14.jpg',
  url: 'photos/15.jpg',
  url: 'photos/16.jpg',
  url: 'photos/17.jpg',
  url: 'photos/18.jpg',
  url: 'photos/19.jpg',
  url: 'photos/20.jpg',
  url: 'photos/21.jpg',
  url: 'photos/22.jpg',
  url: 'photos/23.jpg',
  url: 'photos/24.jpg',
  url: 'photos/25.jpg',
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

function LIKES (min = 15, max = 200) {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
};

// Комментарии

const USER_ID = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// function USER_ID (min = 1, max = 10000) {
//   const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
//   const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
//   const result = Math.random() * (upper - lower + 1) + lower;

//   return Math.floor(result);
// }; 

const AVATAR = [
  url: 'img/avatar-1.svg',
  url: 'img/avatar-2.svg',
  url: 'img/avatar-3.svg',
  url: 'img/avatar-4.svg',
  url: 'img/avatar-5.svg',
  url: 'img/avatar-6.svg',
];

const MESSAGE = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const NAMES [
  'Иван',
  'Алексей',
  'Дмитрий',
  'Вячеслав',
  'Михаил',
  'Роман',
];

const createComment = () => {
  return {
    userId: USER_ID[_.random(0, USER_ID.length - 1)],
    avatar: AVATAR[_.random(0, AVATAR.length - 1)],
    message: MESSAGE[_.random(0, MESSAGE.length - 1)],
    name: NAMES[_.random(0, NAMES.length - 1)],
  };
};
console.log(createComment());


