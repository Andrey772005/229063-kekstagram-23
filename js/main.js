
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


const hotelBeach = {
  id: 1,
  url: 'photos/1.jpg',
  description: 'Бухта у отеля',
  likes: 148,
  comments: [
    {
      id: 385,
      avatar: 'img/avatar-1.svg',
      message: 'Всё отлично!',
      name: 'Алексей',
    },
    {
      id: 926,
      avatar: 'img/avatar-2.svg',
      message: 'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
      name: 'Гриша',
    },
    {
      id: 829,
      avatar: 'img/avatar-3.svg',
      message: 'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
      name: 'Иван',
    },
    {
      id: 105,
      avatar: 'img/avatar-4.svg',
      message: 'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
      name: 'Андрей',
    },
  ],
};

const theSign = {
  id: 2,
  url: 'photos/2.jpg',
  description: 'Знак',
  likes: 66,
  comments: [
    {
      id: 836,
      avatar: 'img/avatar-1.svg',
      message: 'Всё отлично!',
      name: 'Алексей',
    },
    {
      id: 268,
      avatar: 'img/avatar-2.svg',
      message: 'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
      name: 'Гриша',
    },
    {
      id: 93,
      avatar: 'img/avatar-4.svg',
      message: 'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
      name: 'Андрей',
    },
    {
      id: 48,
      avatar: 'img/avatar-5.svg',
      message: 'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
      name: 'Пётр',
    },
    {
      id: 501,
      avatar: 'img/avatar-6.svg',
      message: 'В целом всё неплохо. Но не всё.',
      name: 'Дима',
    },
  ],
};

const tropicBeach = {
  id: 3,
  url: 'photos/3.jpg',
  description: 'Пляж на тропическом острове',
  likes: 474,
  comments: [
    {
      id: 35,
      avatar: 'img/avatar-4.svg',
      message: 'Всё отлично!',
      name: 'Иван',
    },
    {
      id: 571,
      avatar: 'img/avatar-3.svg',
      message: 'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
      name: 'Гриша',
    },
    {
      id: 53,
      avatar: 'img/avatar-1.svg',
      message: 'В целом всё неплохо. Но не всё.',
      name: 'Артём',
    },

  ],
};

const niceGirl = {
  id: 4,
  url: 'photos/4.jpg',
  description: 'Чика',
  likes: 472423782,
  comments: [
    {
      id: 305,
      avatar: 'img/avatar-4.svg',
      message: 'Всё отлично!',
      name: 'Валентин',
    },
    {
      id: 439,
      avatar: 'img/avatar-5.svg',
      message: 'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
      name: 'Пётр',
    },
    {
      id: 720,
      avatar: 'img/avatar-2.svg',
      message: 'В целом всё неплохо. Но не всё.',
      name: 'Дима',
    },
  ],
};

const happyRice = {
  id: 5,
  url: 'photos/5.jpg',
  description: 'Довольный рис',
  likes: 294,
  comments: [
    {
      id: 395,
      avatar: 'img/avatar-1.svg',
      message: 'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
      name: 'Андрей',
    },    {
      id: 4956,
      avatar: 'img/avatar-4.svg',
      message: 'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
      name: 'Пётр',
    },
  ],
};

const theCar = {
  id: 6,
  url: 'photos/6.jpg',
  description: 'Клёвая тачка',
  likes: 348,
  comments: [
    {
      id: 38,
      avatar: 'img/avatar-2.svg',
      message: 'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
      name: 'Олег',
    },
    {
      id: 905,
      avatar: 'img/avatar-3.svg',
      message: 'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
      name: 'Иван',
    },
    {
      id: 50,
      avatar: 'img/avatar-6.svg',
      message: 'В целом всё неплохо. Но не всё.',
      name: 'Виталий',
    },
  ],
};

const strawberry = {
  id: 7,
  url: 'photos/7.jpg',
  description: 'Клубника',
  likes: 255,
  comments: [
    {
      id: 173,
      avatar: 'img/avatar-6.svg',
      message: 'Всё отлично!',
      name: 'Алексей',
    },
    {
      id: 8485,
      avatar: 'img/avatar-3.svg',
      message: 'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
      name: 'Вася',
    },
  ],
};

const currantJuice = {
  id: 8,
  url: 'photos/8.jpg',
  description: 'Сок из смородины',
  likes: 662,
  comments: [
    {
      id: 58322,
      avatar: 'img/avatar-3.svg',
      message: 'Всё отлично!',
      name: 'Алексей',
    },
    {
      id: 324,
      avatar: 'img/avatar-4.svg',
      message: 'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
      name: 'Гриша',
    },
    {
      id: 4,
      avatar: 'img/avatar-1.svg',
      message: 'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
      name: 'Пётр',
    },
    {
      id: 384,
      avatar: 'img/avatar-6.svg',
      message: 'В целом всё неплохо. Но не всё.',
      name: 'Дима',
    },
  ],
};

const thePlain = {
  id: 9,
  url: 'photos/9.jpg',
  description: 'Чика и самолет',
  likes: 5838,
  comments: [
    {
      id: 554,
      avatar: 'img/avatar-6.svg',
      message: 'Всё отлично!',
      name: 'Алексей',
    },
    {
      id: 2484,
      avatar: 'img/avatar-3.svg',
      message: 'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
      name: 'Гриша',
    },
    {
      id: 545,
      avatar: 'img/avatar-1.svg',
      message: 'В целом всё неплохо. Но не всё.',
      name: 'Дима',
    },
  ],
};

const theShoes = {
  id: 10,
  url: 'photos/10.jpg',
  description: 'Обувница',
  likes: 35,
  comments: [
    {
      id: 3345,
      avatar: 'img/avatar-3.svg',
      message: 'В целом всё неплохо. Но не всё.',
      name: 'Артемий',
    },
  ],
};

const roadToTheBeach = {
  id: 11,
  url: 'photos/11.jpg',
  description: 'Дорога к пляжу',
  likes: 3824,
  comments: [
    {
      id: 2485,
      avatar: 'img/avatar-5.svg',
      message: 'Всё отлично!',
      name: 'Алексей',
    },
    {
      id: 3945,
      avatar: 'img/avatar-2.svg',
      message: 'В целом всё неплохо. Но не всё.',
      name: 'Стас',
    },
  ],
};

const audiR = {
  id: 12,
  url: 'photos/12.jpg',
  description: 'Бухта у отеля',
  likes: 3958,
  comments: [
    {
      id: 20593,
      avatar: 'img/avatar-2.svg',
      message: 'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
      name: 'Гриша',
    },
    {
      id: 29655,
      avatar: 'img/avatar-6.svg',
      message: 'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
      name: 'Иван',
    },
    {
      id: 204,
      avatar: 'img/avatar-1.svg',
      message: 'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
      name: 'Пётр',
    },
    {
      id: 193,
      avatar: 'img/avatar-4.svg',
      message: 'В целом всё неплохо. Но не всё.',
      name: 'Андрей',
    },
  ],
};

const veganDish = {
  id: 13,
  url: 'photos/13.jpg',
  description: 'Вегетарианское блюдо',
  likes: 1,
  comments: [
    {
      id: 692,
      avatar: 'img/avatar-5.svg',
      message: 'Всё отлично!',
      name: 'Валера',
    },
  ],
};

const susiCat = {
  id: 14,
  url: 'photos/14.jpg',
  description: 'Суши кот',
  likes: 1381952603,
  comments: [
    {
      id: 4945,
      avatar: 'img/avatar-5.svg',
      message: 'Всё отлично!',
      name: 'Михаил',
    },
    {
      id: 9245,
      avatar: 'img/avatar-2.svg',
      message: 'В целом всё неплохо. Но не всё.',
      name: 'Илья',
    },
  ],
};

const shoesOnTheBed = {
  id: 15,
  url: 'photos/15.jpg',
  description: 'Дурное воспитание',
  likes: 18,
  comments: [
    {
      id: 9417,
      avatar: 'img/avatar-2.svg',
      message: 'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
      name: 'Гриша',
    },
    {
      id: 6995,
      avatar: 'img/avatar-3.svg',
      message: 'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
      name: 'Иван',
    },
    {
      id: 198,
      avatar: 'img/avatar-5.svg',
      message: 'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
      name: 'Пётр',
    },
  ],
};

const stratosphere = {
  id: 16,
  url: 'photos/16.jpg',
  description: 'Вид из окна самолета',
  likes: 8432,
  comments: [
    {
      id: 385,
      avatar: 'img/avatar-5.svg',
      message: 'Всё отлично!',
      name: 'Григорий',
    },
    {
      id: 5,
      avatar: 'img/avatar-3.svg',
      message: 'В целом всё неплохо. Но не всё.',
      name: 'Антон',
    },
  ],
};

const theOrchestra = {
  id: 17,
  url: 'photos/17.jpg',
  description: 'Оркестр',
  likes: 492,
  comments: [
    {
      id: 1942,
      avatar: 'img/avatar-2.svg',
      message: 'Всё отлично!',
      name: 'Алексей',
    },
    {
      id: 9593,
      avatar: 'img/avatar-4.svg',
      message: 'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
      name: 'Гриша',
    },
    {
      id: 5902,
      avatar: 'img/avatar-6.svg',
      message: 'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
      name: 'Иван',
    },
    {
      id: 4017,
      avatar: 'img/avatar-1.svg',
      message: 'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
      name: 'Андрей',
    },    {
      id: 37,
      avatar: 'img/avatar-1.svg',
      message: 'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
      name: 'Пётр',
    },
  ],
};

const oldCar = {
  id: 18,
  url: 'photos/18.jpg',
  description: 'Раритет',
  likes: 3920,
  comments: [
    {
      id: 32,
      avatar: 'img/avatar-5.svg',
      message: 'Всё отлично!',
      name: 'Жорик',
    },
  ],
};

const gadget = {
  id: 19,
  url: 'photos/19.jpg',
  description: 'Тапки с фонариком',
  likes: 493,
  comments: [
    {
      id: 17,
      avatar: 'img/avatar-2.svg',
      message: 'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
      name: 'Гриша',
    },
    {
      id: 683,
      avatar: 'img/avatar-1.svg',
      message: 'В целом всё неплохо. Но не всё.',
      name: 'Лёлик',
    },
  ],
};

const hotelView = {
  id: 20,
  url: 'photos/20.jpg',
  description: 'Вид на отель',
  likes: 396,
  comments: [
    {
      id: 305,
      avatar: 'img/avatar-4.svg',
      message: 'Всё отлично!',
      name: 'Алексей',
    },
    {
      id: 140,
      avatar: 'img/avatar-5.svg',
      message: 'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
      name: 'Гриша',
    },
  ],
};

const theSalad = {
  id: 21,
  url: 'photos/21.jpg',
  description: 'Салат',
  likes: 38,
  comments: [
    {
      id: 4204,
      avatar: 'img/avatar-2.svg',
      message: 'В целом всё неплохо. Но не всё.',
      name: 'Иван',
    },
  ],
};

const sunsetOnTheBeach = {
  id: 22,
  url: 'photos/22.jpg',
  description: 'Закат на пляже',
  likes: 3916,
  comments: [
    {
      id: 602,
      avatar: 'img/avatar-2.svg',
      message: 'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
      name: 'Гриша',
    },
    {
      id: 4056,
      avatar: 'img/avatar-6.svg',
      message: 'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
      name: 'Иван',
    },
    {
      id: 402,
      avatar: 'img/avatar-1.svg',
      message: 'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
      name: 'Пётр',
    },
    {
      id: 3498,
      avatar: 'img/avatar-4.svg',
      message: 'В целом всё неплохо. Но не всё.',
      name: 'Дима',
    },
  ],
};

const theCrab = {
  id: 23,
  url: 'photos/23.jpg',
  description: 'Краб',
  likes: 74,
  comments: [
    {
      id: 5403,
      avatar: 'img/avatar-4.svg',
      message: 'Всё отлично!',
      name: 'Тимур',
    },
    {
      id: 947,
      avatar: 'img/avatar-4.svg',
      message: 'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
      name: 'Гриша',
    },
    {
      id: 85,
      avatar: 'img/avatar-1.svg',
      message: 'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
      name: 'Иван',
    },
    {
      id: 2043,
      avatar: 'img/avatar-5.svg',
      message: 'В целом всё неплохо. Но не всё.',
      name: 'Дима',
    },
  ],
};

const festival = {
  id: 24,
  url: 'photos/24.jpg',
  description: 'Нашествие',
  likes: 9327,
  comments: [
    {
      id: 483,
      avatar: 'img/avatar-1.svg',
      message: 'Всё отлично!',
      name: 'Алексей',
    },
    {
      id: 4032,
      avatar: 'img/avatar-6.svg',
      message: 'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
      name: 'Гриша',
    },
    {
      id: 8219,
      avatar: 'img/avatar-3.svg',
      message: 'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
      name: 'Иван',
    },
    {
      id: 5372,
      avatar: 'img/avatar-4.svg',
      message: 'В целом всё неплохо. Но не всё.',
      name: 'Дима',
    },
  ],
};

const safari = {
  id: 25,
  url: 'photos/25.jpg',
  description: 'Сафари',
  likes: 492,
  comments: [
    {
      id: 3291,
      avatar: 'img/avatar-2.svg',
      message: 'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
      name: 'Гриша',
    },
    {
      id: 4024,
      avatar: 'img/avatar-3.svg',
      message: 'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
      name: 'Иван',
    },
    {
      id: 819,
      avatar: 'img/avatar-6.svg',
      message: 'В целом всё неплохо. Но не всё.',
      name: 'Дима',
    },
  ],
};

console.log(safari);

