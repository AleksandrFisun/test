import './css/styles.css';
import apiSearch from './js/apiSearch'
import cards from "./templates/cards.hbs"
refs={
  listElement: document.querySelector('.country-list'),
  buttonLoadMore: document.querySelector('.load'),
}

apiSearch().then(data =>{
  console.log(data)
  const markup = cards(data.docs)
  console.log(markup)
})
