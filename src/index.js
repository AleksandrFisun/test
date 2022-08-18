import './css/styles.css';
import apiSearch from './js/apiSearch';
import cards from './templates/cards.hbs';

const listElement = document.querySelector('.country-list');
const buttonLoadMore = document.querySelector('.load');

apiSearch().then(data => {
  const markup = cards(data.docs);
  refs.listElement.insertAdjacentHTML('beforeend', markup);
});
