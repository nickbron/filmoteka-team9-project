import * as APIs from '../common/movies-API-service';
import cards from '../../handlebars/gallery.hbs';
import { refs } from '../refs';
import { getYear } from 'date-fns';
import Notiflix from 'notiflix';
import fPagination from './pagination';
let page = 1;
// Функция записи жанров в локалсторедж
async function getGenres() {
  try {
    const result = await APIs.fetchGenres();
    const genres = result.genres;
    for (const genre of genres) {
      localStorage.setItem(`${genre.id}`, `${genre.name}`);
    }
  } catch (error) {
    console.log(error);
  }
}

getGenres();

// Функция отрисовки страници

async function fetchTopMovies(page) {
  try {
    const res = await APIs.fetchTopMovies(page);
    Notiflix.Loading.dots('Processing...');
    const movies = res.results;
    //___________ПАГИНАЦИЯ_______________________
    const totalResult = res.total_results;
    const totalHits = res.total_pages;
    let currentPage = res.page;

    const instance = fPagination();
    instance.setItemsPerPage(20);
    instance.setTotalItems(totalResult);
    instance.movePageTo(currentPage);

    instance.on('afterMove', event => {
      currentPage = event.page;
      clearContainer();
      fetchTopMovies(currentPage);
    });
    //_________________________________________

    renderTopMovies(movies);
    renderGenres(movies);
    Notiflix.Loading.remove();
  } catch (error) {
    console.log(error);
  }
}

fetchTopMovies(page);

// Функция отрисовки популярных фильмов
function renderTopMovies(movies) {
  const markup = movies
    .map(el => {
      el.release_date = getYear(new Date(el.release_date));
      let { id, poster_path, original_title, title, vote_average, release_date } = el;
      return cards({ id, poster_path, original_title, title, vote_average, release_date });
    })
    .join('');

  //console.log(markup);
  refs.galleryEl.insertAdjacentHTML('beforeend', markup);
}

// Функция отрисовки жанров
function renderGenres(movies) {
  const galleryItem = document.querySelectorAll('.gallery__info-genre');
  const galleryItems = [...galleryItem];

  galleryItems.map((div, i) => {
    const result = movies.map(movie => {
      const movieGenres = movie.genre_ids;
      let array = [];
      let genreString;
      movieGenres.map(gener => {
        if (movieGenres.length < 3) {
          const moviegener = localStorage.getItem(gener);
          array.push(moviegener);
          genreString = array.join(', ');
        }

        if (movieGenres.length >= 3) {
          const moviegener = localStorage.getItem(gener);
          array.push(moviegener);
          let genreArray = array.slice(0, 2);
          genreArray.push('другие');
          genreString = genreArray.join(', ');
        }
      });

      return genreString;
    });

    const li = `<li class="gallery__info-item">${result[i]}</li>`;
    div.insertAdjacentHTML('afterbegin', li);
  });
}

//чистим галерею при обновлении результатов поиска
function clearContainer() {
  if (refs.galleryEl.hasChildNodes() === true) {
    refs.galleryEl.innerHTML = '';
  }
  return;
}

export { renderTopMovies, fetchTopMovies, getGenres, renderGenres, clearContainer };
