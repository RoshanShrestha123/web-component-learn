import './news-article.js';
import './test-btn.js';
window.addEventListener('load',()=>{
    const main = document.querySelector('main');
    const URL ='https://jsonplaceholder.typicode.com/todos/';
    fetch(URL)
    .then(response => response.json())
    .then(data => {
        displayResult(data);
    });
    function displayResult(data) {
        console.log(data);
        data.forEach(data => {
           const el = document.createElement('news-article');
           el.news = data;
           main.appendChild(el);
           const btn = document.createElement('test-btn');
           btn.testBtn ='click me!';
           main.appendChild(btn);
       }) 
    }
})
