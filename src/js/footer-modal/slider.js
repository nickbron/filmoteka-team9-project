let slideIndex = null;
const teamCard = document.querySelector('.footer-team-card-wrap');

/* Устанавливает текущий слайд */
function currentSlide(cardId) {
  showSlides((slideIndex = cardId));
  teamCard.classList.remove('modal--close');
}

/* Основная функция слайдера */

function showSlides(n) {
  let i = 0;
  const slides = document.getElementsByClassName('item');
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
    slideIndex++;

    if (slideIndex > slides.length) {
      slideIndex = 1;
    }
  }
  slides[slideIndex - 1].style.display = 'block';
  if (document.body.classList.contains('dark-theme')) {
    slides[slideIndex - 1].classList.add('modal-theme__dark');
  } else {
    slides[slideIndex - 1].classList.remove('modal-theme__dark');
  }
}

/* Функция увеличивает индекс на 1, показывает следующй слайд*/
function plusSlide(e) {
  showSlides((slideIndex += 1));
}

/* Функция уменьшяет индекс на 1, показывает предыдущий слайд*/
function minusSlide(e) {
  showSlides((slideIndex -= 1));
}

export { currentSlide, showSlides, plusSlide, minusSlide };
