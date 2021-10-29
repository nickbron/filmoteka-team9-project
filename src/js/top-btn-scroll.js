import { refs } from './refs';

const topBtn = document.getElementById('scroll-btn');
topBtn.classList.add('scroll-btn-hide');
topBtn.addEventListener('click', ScrollTop);
const addingScrollEvent = window.addEventListener('scroll', hangScrollBtn);

function hangScrollBtn() {
  const { scrollTop, scrollHeight } = document.documentElement;

  scrollTop <= 1000
    ? refs.topScrollBtn.classList.add('scroll-btn-hide')
    : refs.topScrollBtn.classList.replace('scroll-btn-hide','hidden__btn');
}

function ScrollTop() {
  window.scroll({ top: 0, behavior: 'smooth' });
}

export { addingScrollEvent, hangScrollBtn };
