class TestBtn extends HTMLElement{
    constructor(){
        super();
        this.root = this.attachShadow({mode:'open'});
    }

    set testBtn(name){
        this.root.innerHTML=`
        <button>${name}</button>`
    }
    
}
customElements.define('test-btn',TestBtn);