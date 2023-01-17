import { galleryItems } from './gallery-items.js';
// Change code below this line


const boxGalleryEl = document.querySelector('.gallery');
const itemGalleryMarkup = createGalleryItemMarkup(galleryItems);

boxGalleryEl.insertAdjacentHTML('beforeend', itemGalleryMarkup);

// gallery.addEventListener('click', onGalleryClick);

//  function createGalleryItemMarkup(galleryItems) {
//      return galleryItems
//          .map(({ preview, original, description }) => {
//         return `
//    <div class="gallery__item">
//  <a class="gallery__item" href="${original}">
//   <img class="gallery__image" src="${preview}" alt="${description}" />
// </a>
// </div>
//  `;
//     })
//         .join('');
//  }

function createGalleryItemMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`;
    })
    .join('');
}

// gallery.addEventListener('click', onGalleryClick);


// function onGalleryClick(event) {
//     event.preventDefault();

// new SimpleLightbox('.gallery a', {
//   captionsData: 'alt',
//   captionDelay: 250,
// });
// }

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});