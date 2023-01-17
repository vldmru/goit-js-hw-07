import { galleryItems } from './gallery-items.js';
// Change code below this line

const boxGalleryEl = document.querySelector('.gallery');
const itemGalleryMarkup = createGalleryItem(galleryItems);

boxGalleryEl.insertAdjacentHTML('beforeend', itemGalleryMarkup);

boxGalleryEl.addEventListener('click', onGalleryClick);

function createGalleryItem(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
    <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
    </a>
    </div>`;
    })
    .join('');
}

// function onGalleryClick(event) {
//     event.preventDefault();

//     const instance = basicLightbox.create(`<img src= "${event.target.dataset.source}" width="800",height="600">`);
//     instance.show();

//     document.addEventListener('keydown', event => {
       
//         if (event.key === "Escape") {
//             instance.close();
//         }
// });
// }

function onGalleryClick(event) {
  event.preventDefault();

  if (event.target === event.currentTarget) {
    return;
  }
  const instance = basicLightbox.create(
    `<img src="${event.target.dataset.source}">`,
    {
      onShow: instance => {
        window.addEventListener('keydown', onEscKeyPress);
      },
      onClose: instance => {
        window.removeEventListener('keydown', onEscKeyPress);
      },
    }
  );

  instance.show();

  function onEscKeyPress(event) {
    if (event.code === 'Escape') {
      instance.close();
    }
  }
}