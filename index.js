import './news-article.js';

window.addEventListener('load',()=>{
    // console.log(" this is working");
    const main = document.querySelector('main');
    // const news ;
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
       }) 
    }


})
