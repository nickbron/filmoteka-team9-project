import { refs } from '../refs';
import { footModalClose } from './footer_modal';
import { currentSlide, plusSlide, minusSlide } from './slider';
import { hideCloseButton, showCloseButton } from '../common/conditionOfCrossButton';
import { teamItems } from './info-about-team';
import icons from '../../images/sprite.svg';
const gitIcon = `${icons}#git_icon`;
const mailIcon = `${icons}#mail_icon`;
const linkedInIcon = `${icons}#icon-linkedin`;
const phoneIcon = `${icons}#mobile-phone_icon`;
const closeBtmUpperModal = document.querySelector('.close-btn__upper_modal');
const photoLink = document.querySelector('.team-list');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
let slideIndex;

//! Создание разметки карточки
/* Индекс слайда по умолчанию */
const createTeamCardElements = teamItems.map(
  ({
    photoLink,
    teamItemName,
    teamPosition,
    gitLink,
    emailLink,
    linkedinLink,
    telNumber,
    mainDuties,
  }) => {
    return `
  <li class="team-item__container item">
  <div class="img-wrp">
    <img src="${photoLink}" alt="member" class="team-item__photo__upper" />

    <div class="item-descr">
      <p class="team-item__name__upper">${teamItemName}</p>
      <p class="team-item__position__upper">${teamPosition}</p>

    <div class="team-item__social__upper">
      <a href="${gitLink}" target="_blank" class="team-item__social-link__upper"
        ><svg class="team-social__icon__upper" width="30" height="30">
          <use href="${gitIcon}"></use>
        </svg>
      </a>
      <a href="mailto:${emailLink}" class="team-item__social-link__upper"
        ><svg class="team-social__icon__upper" width="30" height="30">
          <use href="${mailIcon}"></use></svg
      ></a>
      <a href="${linkedinLink}" target="_blank" class="team-item__social-link__upper"
        ><svg class="team-social__icon__upper" width="30" height="30">
          <use href="${linkedInIcon}"></use></svg
      ></a>
      <a href="tel:${telNumber})" class="team-item__social-link__upper"
        ><svg class="team-social__icon__upper" width="30" height="30">
          <use href="${phoneIcon}"></use></svg
      ></a>
    </div>
    </div>
  </div>
  <div class="team-item__inform">
    <div class="team-item__upper2">
      <p class="team-item__feature">Ключевые особенности на проекте</p>
    </div>
    <div class="team-item__upper3">
      <p class="team-item__discr__upper">${mainDuties}</p>
    </div>
  </div>
</li>`;
  },
);

refs.teamCardList.insertAdjacentHTML('afterbegin', createTeamCardElements.join(''));

// ! ОТОБРАЖЕНИЕ ВТОРОЙ МОДАЛКИ

photoLink.addEventListener('click', showUpperModal);

function showUpperModal(e) {
  if (!refs.modalFooter.classList.contains('modal--close') && e.target.nodeName === 'IMG') {
    hideCloseButton();
    const cardId = e.target.dataset.id;
    return currentSlide(cardId);
  }
}

//* скрытие второй  модалки

//Закрытие по ESC и работа стрелок
function onKeyEscLeftRightPress(e) {
  if (e.code === 'Escape') {
    if (!refs.teamCard.classList.contains('modal--close')) {
      onUpperBackdropClose();
    } else {
      footModalClose();
    }
  }
  if (e.code === 'ArrowLeft') {
    minusSlide();
  }
  if (e.code === 'ArrowRight') {
    plusSlide();
  }
}

//скрытие по клику бэкдроп
refs.teamCard.addEventListener('click', onUpperBackdropClick);
function onUpperBackdropClick(e) {
  if (e.target === e.currentTarget) {
    onUpperBackdropClose();
  }
}

//  скрытие по крестику
closeBtmUpperModal.addEventListener('click', onUpperBackdropClose);

// сама функция скрытия второй модалки
function onUpperBackdropClose(e) {
  refs.teamCard.classList.add('modal--close');
  slideIndex = null;
  prev.removeEventListener('keydown', onKeyEscLeftRightPress);
  next.removeEventListener('keydown', onKeyEscLeftRightPress);
  showCloseButton();
}

prev.addEventListener('click', minusSlide);
next.addEventListener('click', plusSlide);
prev.addEventListener('keydown', onKeyEscLeftRightPress);
next.addEventListener('keydown', onKeyEscLeftRightPress);

export { showUpperModal, onKeyEscLeftRightPress, onUpperBackdropClick, onUpperBackdropClose };
