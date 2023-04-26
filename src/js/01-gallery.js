import "simplelightbox/dist/simple-lightbox.min.css";
import SimpleLightbox from "simplelightbox";
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

const gallery = document.querySelector(".gallery");

gallery.insertAdjacentHTML("beforeend", onGallery(galleryItems));


let currentInstance = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: "250",
});

function onGallery(item) {
  return item
    .map(({ preview, original, description }) => {
      return `
    <li class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
    </a>
    </li>`;
    })
    .join("");
}
