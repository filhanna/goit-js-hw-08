// Add imports above this line

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';

const galleryContainer = document.querySelector('.gallery');
const cardsMarkup = createGalleryIconsMarcup(galleryItems);
galleryContainer.insertAdjacentHTML('beforeend', cardsMarkup);
console.log(createGalleryIconsMarcup(galleryItems));

function createGalleryIconsMarcup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`;
    })
    .join('');
}
let lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

// Change code below this line
