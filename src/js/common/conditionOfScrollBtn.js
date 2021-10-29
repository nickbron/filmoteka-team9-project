import { refs } from '../refs';

function hideButton() {
	refs.topScrollBtn.classList.add('hide');
}

function showButton() {
	refs.topScrollBtn.classList.remove('hide');
}

export { hideButton, showButton };