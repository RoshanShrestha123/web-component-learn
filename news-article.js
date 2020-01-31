class NewsArticle extends HTMLElement{
    set news(news){
        this.innerHTML = `<div>
            <h3> ${news.title} </h3>
            <hr>
        </div>`
    }
}
customElements.define('news-article',NewsArticle);