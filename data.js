const cats = [{
  'id': 'YdAqiUkUoWA',
  'url': 'img/cats-1.jpg',
  'description': '',
}, {
  'id': 'hX_hf2lPpUU',
  'url': 'img/cats-2.jpg',
  'description': '',
}, {
  'id': 'w1JE5duY62M',
  'url': 'img/cats-3.jpg',
  'description': '',
}, {
  'id': '3tYZjGSBwbk',
  'url': 'img/cats-4.jpg',
  'description': '',
}, {
  'id': 'NoXUQ54pDac',
  'url': 'img/cats-5.jpg',
  'description': '',
}, {
  'id': 'OZhYgZh0bAg',
  'url': 'img/cats-6.jpg',
  'description': '',
}];

const cars = [{
  'id': 'YdAqiUkUoWA',
  'url': 'img/cars-1.jpg',
  'description': '',
}, {
  'id': 'hX_hf2lPpUU',
  'url': 'img/cars-2.jpg',
  'description': '',
}, {
  'id': 'w1JE5duY62M',
  'url': 'img/cars-3.jpg',
  'description': '',
}, {
  'id': '3tYZjGSBwbk',
  'url': 'img/cars-4.jpg',
  'description': '',
}, {
  'id': 'NoXUQ54pDac',
  'url': 'img/cars-5.jpg',
  'description': '',
}, {
  'id': 'OZhYgZh0bAg',
  'url': 'img/cars-6.jpg',
  'description': '',
}];

const flowers = [{
  'id': 'YdAqiUkUoWA',
  'url': 'img/flowers-1.jpg',
  'description': '',
}, {
  'id': 'hX_hf2lPpUU',
  'url': 'img/flowers-2.jpg',
  'description': '',
}, {
  'id': 'w1JE5duY62M',
  'url': 'img/flowers-3.jpg',
  'description': '',
}, {
  'id': '3tYZjGSBwbk',
  'url': 'img/flowers-4.jpg',
  'description': '',
}, {
  'id': 'NoXUQ54pDac',
  'url': 'img/flowers-5.jpg',
  'description': '',
}, {
  'id': 'OZhYgZh0bAg',
  'url': 'img/flowers-6.jpg',
  'description': '',
}];

const imageCollection = {
  flowers, cats, cars,
};

const results = [
  { name: 'Аня', steps: 16 },
  { name: 'Вася', steps: 12 },
  { name: 'Петя', steps: 19 }
];

// В функции getImages мы проходим по перемешанному набору карточек (shuffledSet дважды) с помощью цикла for.
//  Для каждой карточки внутри цикла мы добавляем новый объект в imageSet, используя ...item, и изменяем значение id, добавляя к оригинальному id один знак и индекс (i + 1). Таким образом, у парных картинок будет уникальный id.
const getImages = (id) => {
  const selectedSet = imageCollection[id];
  const shuffledSet = RANDOMIZED ? selectedSet.sort(() => 0.5 - Math.random()) : selectedSet;

  const imageSet = [];

  for (let i = 0; i < 2; i++) {
    shuffledSet.forEach((item) => {
      imageSet.push({ ...item, id: `${item.id}-${i + 1}` });
    });
  }

  return imageSet;
};


// списки выделенных и отгаданных карточек для отладки
const visibleItems = ['hX_hf2lPpUU', '3tYZjGSBwbk'];
const finishedItems = ['YdAqiUkUoWA', 'YdAqiUkUoWA1', 'w1JE5duY62M', 'w1JE5duY62M1'];

window.getImages = getImages;
window.visibleItems = visibleItems;
window.finishedItems = finishedItems;
window.results = results;