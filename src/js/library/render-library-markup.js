import { refs } from "../refs";

export default function renderMarkup(markup) {
  refs.galleryEl.innerHTML = markup;
}

