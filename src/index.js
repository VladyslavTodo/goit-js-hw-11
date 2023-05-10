import './css/styles.css';
import { Notify } from 'notiflix';
import { fetchImages } from './js/fetch';
import { marcupPictures } from './js/rander';
// // Описаний в документації
// import SimpleLightbox from 'simplelightbox';
// // Додатковий імпорт стилів
// import 'simplelightbox/dist/simple-lightbox.min.css';

const form = document.querySelector('.search-form');
const input = document.querySelector('[type="text"]');
const gallery = document.querySelector('.gallery');
const button = document.querySelector('.load-more');

form.addEventListener('submit', searchInputPictures);
button.addEventListener('click', moreImputPictures);

button.classList.add('is-hidden');

const state = {
  page: 1,
  limitpage: 40,
  totalHits: null,
  inputValue: '',
};

async function searchInputPictures(event) {
  event.preventDefault();
  state.inputValue = input.value;
  state.page = 1;

  gallery.innerHTML = '';

  const data = await fetchImages(state);
  button.classList.remove('is-hidden');

  if (data.hits.length === 0) {
    Notify.failure(
      'Sorry, there are no images matching your search query. Please try again.'
    );
  }
  state.totalHits = data.totalHits;
  gallery.insertAdjacentHTML('beforeend', marcupPictures(data.hits));
}

async function moreImputPictures() {
  state.page += 1;

  state.inputValue = input.value;

  const data = await fetchImages(state);
  const sumPictures = state.page * state.limitpage;
  if (sumPictures >= state.totalHits) {
    button.classList.add('is-hidden');
    Notify.warning(
      "We're sorry, but you've reached the end of search results."
    );
  } else {
    button.classList.remove('is-hidden');
  }
  gallery.insertAdjacentHTML('beforeend', marcupPictures(data.hits));
}

// const lightbox = new SimpleLightbox('.gallery a', {
//   captionDelay: 250,
// });
