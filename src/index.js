import './sass/main.scss';
import * as APIs from './js/common/movies-API-service';
import localStorageAPI from './js/common/localStorageAPI';
import * as modalOpenClose from './js/common/open&close-modal';
import {
  onDeveloperLinkClick,
  themeColorChek,
  footModalClose,
  onFootBackdropClick,
  changeTheme,
} from './js/footer-modal/footer_modal';
import { currentSlide, showSlides, plusSlide, minusSlide } from './js/footer-modal/slider';
import {
  showUpperModal,
  onKeyEscLeftRightPress,
  onUpperBackdropClick,
  onUpperBackdropClose,
} from './js/footer-modal/rend-cards-of-members';
import './js/common/conditionOfCrossButton';
import './js/common/conditionOfScrollBtn';
import {
  renderTopMovies,
  fetchTopMovies,
  getGenres,
  renderGenres,
} from './js/gallery/popular-movies';
import './js/swipe';
import renderArticle from './js/gallery/render-modal-one-card';
import * as renderFilms from './js/gallery/renderFilmsFromSubmit';
import * as topScrollBtn from './js/top-btn-scroll';
import changeHeader from './js/header/change-view-header';
import { onAddQueueBtnClick } from './js/library/add-to-queu-btn';
import { onAddWatchedBtnClick } from './js/library/add-to-watched-btn';
import switchTheme from './js/switch-theme';
import galleryCards from './handlebars/gallery.hbs';
import articleCard from './handlebars/article.hbs';
import axios from 'axios';
import Notiflix from 'notiflix';
import debounce from 'lodash.debounce';
import { getYear } from 'date-fns';
import Pagination from 'tui-pagination';
import 'lazysizes';
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';

getGenres();
APIs.fetchGenres();

const lSAPI = new localStorageAPI();
lSAPI.makeEmptyWatchedArr();
lSAPI.makeEmptyQueueArr();
