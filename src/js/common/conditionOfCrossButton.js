
function hideCloseButton() {
	document.querySelector('.close-btn-modal').classList.add('hide');
}

function showCloseButton() {
	document.querySelector('.close-btn-modal').classList.remove('hide');
}

export { hideCloseButton, showCloseButton };