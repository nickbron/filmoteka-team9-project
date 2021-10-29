import '../sass/dark-theme/_dark-theme.scss';

const themeToggle = document.getElementById('theme-switch-toggle');
const tuiToggle = document.getElementById('tui-pagination-container');
const footer = document.getElementById('footer');
const modalWrapper = document.getElementById('modal-wrapper');

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const Footer = {
  LIGHT: 'footer__theme--light',
  DARK: 'footer__theme--dark',
}

const Modal = {
  LIGHT: 'theme--light',
  DARK: 'theme--dark',
}

function changeMainTheme(element, newClass, oldClass) {
  element.classList.add(newClass);
  element.classList.remove(oldClass);
}

themeToggle.addEventListener('click', onToggleClick);

function onToggleClick(evt) {
  const checked = evt.currentTarget.checked;
  if (checked) {
    changeMainTheme(document.body, Theme.DARK, Theme.LIGHT);
    changeMainTheme(modalWrapper, Modal.DARK, Modal.LIGHT);
    changeMainTheme(footer, Footer.DARK, Footer.LIGHT);
    changeMainTheme(tuiToggle, Theme.DARK, Theme.LIGHT);

    localStorage.setItem('bodyTheme', Theme.DARK);
    themeToggle.checked = true;
    
  } else {
    changeMainTheme(document.body, Theme.LIGHT, Theme.DARK);
    changeMainTheme(modalWrapper, Modal.LIGHT, Modal.DARK);
    changeMainTheme(footer, Footer.LIGHT, Footer.DARK);
    changeMainTheme(tuiToggle, Theme.LIGHT, Theme.DARK);

    localStorage.setItem('bodyTheme', Theme.LIGHT);
    themeToggle.checked = false;
  }
}

checkBodyTheme();

function checkBodyTheme() {
  const currentThemeMod = localStorage.getItem('bodyTheme');
  if (currentThemeMod === Theme.DARK) {
    changeMainTheme(document.body, Theme.DARK, Theme.LIGHT);
    changeMainTheme(modalWrapper, Modal.DARK, Modal.LIGHT);
    changeMainTheme(footer, Footer.DARK, Footer.LIGHT);
    
    localStorage.setItem('bodyTheme', Theme.DARK);
    themeToggle.checked = true;
  }
  if (currentThemeMod === Theme.LIGHT) {
    changeMainTheme(document.body, Theme.LIGHT, Theme.DARK);
    changeMainTheme(modalWrapper, Modal.LIGHT, Modal.DARK);
    changeMainTheme(footer, Footer.LIGHT, Footer.DARK);

    localStorage.setItem('bodyTheme', Theme.LIGHT);
    themeToggle.checked = false;
  }
}

export { changeMainTheme };
