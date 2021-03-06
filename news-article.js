class NewsArticle extends HTMLElement{
    constructor(){
        super();
        this.root = this.attachShadow({mode:'open'});
    }

    set news(data){
        this.root.innerHTML = `
        <style>
            h3 {
                color:black;
                font-family: arial;
            }
        </style>
        <div>
            <h3> ${data.title} </h3>
            <hr>
        </div>`
    }
}
customElements.define('news-article',NewsArticle);