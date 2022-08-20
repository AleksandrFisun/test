import './css/styles.css';
import apiSearch from './js/apiSearch';
import cards from './templates/cards.hbs';

// Через кнопку лоад мор Загрузить далее и при прокрутке страницы
const listElement = document.querySelector('.country-list');
const buttonLoadMore = document.querySelector('.load');
const guard = document.querySelector('.js-guard');

let page = 1;

// Опции для прокрутки страницы, мы настроили рут маргин за сколько пикселей будет подгружаться
const options = {
  root: null,
  rootMargin: '300px',
  threshold: 1,
};
const observer = new IntersectionObserver(updateList, options);
apiSearch().then(data => {
  //  Проверка элемента на пустоту если пустой то Андефаинт
  data.docs.forEach(obj => {
    obj.hair ? obj.hair : (obj.hair = 'Undefinde');
  });
  // Берем полученые данные и закидываем их в конец
  const markup = cards(data.docs);
  listElement.insertAdjacentHTML('beforeend', markup);
  observer.observe(guard);
});
// Кнопка Лоад мор
// function onLoadMore() {
//   // При каждом нажатии добалаяет 1 к запросу на сервер
//   apiSearch((page += 1)).then(data => {
//     const markup = cards(data.docs);
//     // Болуеный обьект закидываем в конец
//     listElement.insertAdjacentHTML('beforeend', markup);
//   });
// }
function updateList(entries) {
  entries.forEach(entry => {
    console.log(entry);
    if (entry.isIntersecting) {
      apiSearch((page += 1)).then(data => {
        const markup = cards(data.docs);
        listElement.insertAdjacentHTML('beforeend', markup);
      });
    }
  });
}
// buttonLoadMore.addEventListener('click', onLoadMore);
