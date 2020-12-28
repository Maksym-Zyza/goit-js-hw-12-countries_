import './styles.css';
import refs from './js/refs';
import fetchCountries from './js/fetch-countries';
import addMarkup from './js/add-мarkup';

const debounce = require('lodash.debounce');

refs.input.addEventListener('input', debounce(handleInput, 500));

function handleInput(event) {
  const searchQuery = event.target.value;

  refs.list.innerHTML = '';

  fetchCountries(searchQuery).then(addMarkup);
}