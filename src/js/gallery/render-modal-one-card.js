import { refs } from "../refs";

export default function renderMarkupModal(markup) {
  const modal = refs.modalEl;
  modal.innerHTML = markup;
}