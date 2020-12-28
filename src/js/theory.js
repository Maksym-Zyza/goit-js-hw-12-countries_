// import articlesTpl from './templates/articles.hbs'

// const articlesRef = document.querySelector('.js-articles')

/*
 * - HTTP-запросы в браузере
 *  - Fetch API
 *  - Владка Network
 *  - HTTP-методы
 *  - Заголовки
 *  - MIME-типы
 *  - Параметры запроса
 * - Документация REST API
 * - Обработка 404 с fetch
 * - Аутентификация
 * - Библиотеки-обёртки
 * - https://pokeapi.co/
 */

// //  ===== Response - мета информация о коде
// fetch('https://jsonplaceholder.typicode.com/todos/1')
//   .then(console.log)

// //  ===== fetch и сторока запроса:
// fetch('https://jsonplaceholder.typicode.com/todos/1')
//   .then(response => response.json())
//   .then(json => console.log(json))

// fetch('http://hn.algolia.com/api/v1/search?query=react&tags=story')
//     .then(res => res.json())
//     .then(data => console.log(data));

// ====== Авторизация - вход через ключ: apiKey=ec3f8e67e...
// const apiKey = 'ec3f8e67e46c4755846ccf9dca77f6c6';
// // const url = `http://newsapi.org/v2/everything?q=bitcoin&language=en&apiKey=${apiKey}`;
// const url = `http://newsapi.org/v2/everything?q=bitcoin&language=en`;

// //  ===== Авторизация через заголовок:
// const options = {
//     headers: {
//         'Authorization': apiKey
//     }
// }

// fetch(url, options)
//     .then(res => res.json())
//     .then(({ articles }) => {
//         console.log(articles)
        
//         const markup = articlesTpl(articles);
//         console.log(markup);

//         articlesRef.insertAdjacentElement('beforeend', markup);
//     })
//     .catch(error=> console.log(error))