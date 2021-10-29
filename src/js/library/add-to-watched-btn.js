import localStorageAPI from "../common/localStorageAPI";
import { refs } from "../refs";
import renderLibraryMarkup from "../library/render-library-markup";
import galleryLibTpl from "../../handlebars/galleryLib.hbs";

const lSAPI = new localStorageAPI();

function onAddWatchedBtnClick(movie, evt) {
  const button = evt.target;
  const liEl = refs.galleryEl.querySelector('.gallery__item');
  
  if (button.textContent === 'ADD TO WATCHED') {
    lSAPI.saveFilmToWatchedArr(movie);
    lSAPI.saveToWatchedLocal();
    
    renameToDeleteWatchedBtn(button);
  } else {
    lSAPI.removeWatchedFilm(movie.id);
    renameToAddWatchedBtn(button);
  }
  
  const hederBtn = refs.headBtnWachedEl.classList.contains('library__btn--active');

  if (liEl.dataset.islib === 'true' && hederBtn && button.textContent !== 'DELETE FROM WATCHED') {
    renderLibraryMarkup(galleryLibTpl(lSAPI.getWatchedFilms()));
  }
}

function renameToDeleteWatchedBtn(button) {
  button.textContent = 'DELETE FROM WATCHED'
}

function renameToAddWatchedBtn(button) {
  button.textContent = 'ADD TO WATCHED'
}

export { onAddWatchedBtnClick, renameToDeleteWatchedBtn }