import countryTmp from '../templates/one-country.hbs';
import countriesTmp from '../templates/ten-countries.hbs';
import searchRefs from '../js/refs';
import error from '../js/pnotify'

const addMarkup = arr => {

  searchRefs.list.innerHTML = '';

  if (arr.status === 404) {
    error({
      title: 'This country not found.',
      text: 'Please try again.',
    });
    return;
  }

  if (arr.length === 1) {
    searchRefs.list.innerHTML = countryTmp(arr[0]);
  }

  if (arr.length > 1 && arr.length <= 10) {
    const markup = arr.reduce((acc, item) => {
      const listItem = countriesTmp(item);
      acc += listItem;
      return acc;
    }, '');

    searchRefs.list.insertAdjacentHTML('beforeend', markup);
  }

  if (arr.length > 10) {
    error({
      title: 'Too many matches found.',
      text: 'Please enter a more specific query!',
    });
  }
};

export default addMarkup;