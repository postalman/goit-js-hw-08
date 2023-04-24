import "simplelightbox/dist/simple-lightbox.min.css";
import SimpleLightbox from "simplelightbox";
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

const gallery = document.querySelector(".gallery");
const galleryArray = Array.from(gallery);
const currentInstance = new SimpleLightbox(".gallery a", {
    captionsData: "alt",
    captionDelay: "250",
  });




console.log(galleryItems);
