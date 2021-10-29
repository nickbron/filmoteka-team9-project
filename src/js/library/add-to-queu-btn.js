import localStorageAPI from "../common/localStorageAPI";
import { refs } from "../refs";
import renderLibraryMarkup from "../library/render-library-markup";
import galleryLibTpl from "../../handlebars/galleryLib.hbs";

const lSAPI = new localStorageAPI();

function onAddQueueBtnClick(movie, evt) {
  const button = evt.target;
  const liEl = refs.galleryEl.querySelector('.gallery__item');

  if (button.textContent === 'ADD TO QUEUE') {
    lSAPI.saveFilmToQueueArr(movie);
    lSAPI.saveToQueueLocal();
    
    renameToDeleteQueueBtn(button);
  } else {
    lSAPI.removeQueueFilm(movie.id);
    renameToAddQueueBtn(button)
  }

  const hederBtn = refs.headBtnQueueEl.classList.contains('library__btn--active');

  if (liEl.dataset.islib === 'true' && hederBtn && button.textContent !== 'DELETE FROM QUEUE') {
    renderLibraryMarkup(galleryLibTpl(lSAPI.getQueueFilms()));
  }

}

function renameToDeleteQueueBtn(button) {
  button.textContent = 'DELETE FROM QUEUE'
}

function renameToAddQueueBtn(button) {
  button.textContent = 'ADD TO QUEUE'
}

export { onAddQueueBtnClick,  renameToDeleteQueueBtn}