const images = [
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg',
    description: 'Hokkaido Flower',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
    description: 'Container Haulage Freight',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
    description: 'Aerial Beach View',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
    description: 'Flower Blooms',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
    description: 'Alpine Mountains',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
    description: 'Mountain Lake Sailing',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
    description: 'Alpine Spring Meadows',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
    description: 'Nature Landscape',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
    description: 'Lighthouse Coast Sea',
  },
];

const container = document.querySelector('.gallery');

// створюємо ф-цію, яка створює розмітку для одного зображення
// ф-ція приймає одне зображення (item), і повертає розмітку для цього зображення
function imageTemplate(item) {
  return `<li class="gallery-item">
      <a class="gallery-link" href="${item.original}">
        <img
          class="gallery-image"
          src="${item.preview}"
          data-source="${item.original}"
          alt="${item.description}"          
        />
      </a>
</li>`;
}

// створюємо ф-цію, яка створює розмітку для всього масиву images
// ф-ція приймає масив images
// у цього масиву викликав метод map, який виклакає ф-цію imageTemplate
//                         метод join, щоб перетворити елементи масиву в один суцільний рядок розмітки
function imagesListTemplate(images) {
  const markup = images.map(imageTemplate).join('');
  return markup;
}

// створюємо ф-цію яка буде вкладувати в html файл в <ul> створену суцільну розмітку
function render() {
  const markup = imagesListTemplate(images);
  container.innerHTML = markup;
}

render(); // викликаємо цю ф-цію, щоб побачити зображення на сторінці

// створюємо прослуховування події click на container, щоб клікати на кожне зображення (делегування)

container.addEventListener('click', e => {
  e.preventDefault(); // вимикаємо ф-ції браузера за замовчуванням, щоб зображення при кліку не завантажувалось
  console.log(e.target, e.currentTarget);

  if (e.target === e.currentTarget) return;
  // console.log(e.target.dataset.source);
  // console.log(e.target);
  // подія click відбувається по всьому зображенню, тому що e.target === e.currentTarget

  //призначаємо змінну із значенням атрибуту data-source (шлях до зображення)
  const imageSource = e.target.dataset.source;
  const instance = basicLightbox.create(
    `
    <img src="${imageSource}" width="1112" height="640">
  `,
    {
      onShow: instance => {
        window.addEventListener('keydown', closeModal); //додаємо слухача на кнопку Esc при відкритому модальному вікні
      },

      onClose: instance => {
        window.removeEventListener('keydown', closeModal); //видаляємо слухача Esc при закритті модалного вікна
      },
    },
  );

  function closeModal(e) {
    if (e.code === 'Escape') instance.close(); //перевірка чи натискається саме Esc
  }

  instance.show(); //запуск модального вікна, без виклику ф-ції модальне вікно не буде відображатися в браузері
});
