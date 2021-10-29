const refs = {
  //Home-----header
  homePageBtn: document.querySelector('#navlink-home'),
  homePageLogo: document.querySelector('.header__link'),
  searchSectionEl: document.querySelector('.search__section'),
  formEl: document.querySelector('.search__form'),
  inputEl: document.querySelector('#search-input'),
  notifyEl: document.querySelector('#search-hint'),
  wrapperBtnInHeader: document.querySelector('.library__section'),
  myLib: document.querySelector('#navlink-library'),
  header: document.querySelector('.header'),
  body: document.querySelector('body'),
  //Library-----header
  headBtnWachedEl: document.querySelector('#button-watched'),
  headBtnQueueEl: document.querySelector('#button-queue'),
  ///Home-----gallery
  galleryEl: document.querySelector('.gallery__list'),
  backdropEl: document.querySelector('.backdrop'),
  modalEl: document.querySelector('.modal'),
  modalCloseEl: document.querySelector('[data-modal-movie-card]'),
  dateEl: document.querySelector('.gallery__date'),
  modalWrap: document.querySelector('.modal__wrapper'),
  //Library-----gallery

  //Footer
  developerLink: document.querySelector('.developers__link'),
  //Footer-----modal
  backdropFooter: document.querySelector('.footer-backdrop'),
  modalFooter: document.querySelector('.footer-backdrop__modal'),
  closeModalBtn: document.querySelector('.close-btn-modal'),
  footerBackdropClose: document.querySelector('.close-btn'),
  teamList: document.querySelector('.team-list'),
  teamCardList: document.querySelector('.footer-modal__wrap__upper'),
  teamCard: document.querySelector('.footer-team-card-wrap'),
  photoLink: document.querySelector('.team-list'),

  //TopScroll
  topScrollBtn: document.querySelector('#scroll-btn'),
  tPagination: document.getElementById('tui-pagination-container'),
};

export { refs };
