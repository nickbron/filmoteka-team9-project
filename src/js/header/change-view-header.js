// const galeryRating = document.querySelectorAll('.gallery__info-rating');
import Notiflix from 'notiflix';
import { refs } from '../refs';
import localStorageAPI from '../common/localStorageAPI';
import clearMarkup from '../library/clear-markup-library';
import renderLibraryMarkup from '../library/render-library-markup';
import galleryLibTpl from '../../handlebars/galleryLib.hbs';
import fPagination from '../gallery/pagination';
import { fetchTopMovies, getGenres, clearContainer } from '../gallery/popular-movies';

let page = 1;
const lSAPI = new localStorageAPI();
//____________________________LIBRARY________________________________
refs.myLib.addEventListener('click', onMylibraryClick);

function onMylibraryClick() {
  clearMarkup();
  // fPagination().reset();
  refs.tPagination.classList.add('hidden');
  if (lSAPI.getWatchedFilms().length === 0) {
    Notiflix.Notify.info('You have not watched movies');
  } else {
    renderLibraryMarkup(galleryLibTpl(lSAPI.getWatchedFilms()));
  }
  refs.header.classList.remove('header--home');
  refs.header.classList.add('header--library');
  refs.searchSectionEl.classList.add('hidden_markup');
  refs.wrapperBtnInHeader.classList.remove('hidden_markup');
  refs.homePageBtn.classList.remove('header__navlink--currentlink');
  refs.myLib.classList.add('header__navlink--currentlink');
}

refs.homePageBtn.addEventListener('click', changeHeaderInHome);
//refs.homePageLogo.addEventListener('click', changeHeaderInHome);

getGenres();
//_________________________________________HOME______________________________
function changeHeaderInHome(e) {
  Notiflix.Loading.dots('Processing...');
  clearContainer();
  refs.notifyEl.classList.remove('search__hint--blocked');
  refs.inputEl.value = '';
  refs.header.classList.remove('header--library');
  refs.header.classList.add('header--home');
  refs.wrapperBtnInHeader.classList.add('hidden_markup');
  refs.searchSectionEl.classList.remove('hidden_markup');
  refs.myLib.classList.remove('header__navlink--currentlink');
  refs.homePageBtn.classList.add('header__navlink--currentlink');
  fetchTopMovies(page);
  refs.tPagination.classList.remove('hidden');
  Notiflix.Loading.remove();
  
}

refs.headBtnWachedEl.addEventListener('click', displayWatchedMovies);

function displayWatchedMovies() {
  clearMarkup();
  if (lSAPI.getWatchedFilms().length === 0) {
    Notiflix.Notify.info('You have not watched movies');
  } else {
    renderLibraryMarkup(galleryLibTpl(lSAPI.getWatchedFilms()));
  }

  refs.headBtnWachedEl.classList.add('library__btn--active');
  refs.headBtnQueueEl.classList.remove('library__btn--active');
  refs.myLib.classList.add('header__navlink--currentlink');
}

refs.headBtnQueueEl.addEventListener('click', displayQuereMovies);

function displayQuereMovies() {
  clearMarkup();
  if (lSAPI.getQueueFilms().length === 0) {
    Notiflix.Notify.info('Select movies to watch');
  } else {
    renderLibraryMarkup(galleryLibTpl(lSAPI.getQueueFilms()));
  }

  refs.headBtnQueueEl.classList.add('library__btn--active');
  refs.headBtnWachedEl.classList.remove('library__btn--active');
  refs.myLib.classList.add('header__navlink--currentlink');
}
export { onMylibraryClick, changeHeaderInHome };