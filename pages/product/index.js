import {MainPage} from "../main/index.js";

export class ProductPage {
    constructor(parent, id, cardData) {
        this.parent = parent
        this.id = id
        this.cardData = cardData
    }

    getData() {
        return {
            id: 1,
            src: this.cardData.src,
            title: this.cardData.title,
            text: this.cardData.text
        }
    }

    get pageRoot() {
        return document.getElementById('product-page')
    }

    getHTML() {
        return `
        <header class="d-flex justify-content-between align-items-center bg-light rounded">
            <button class="btn btn-primary" id="home-btn">Домой</button>
            <h2 class="mb-0">${this.cardData.title}</h2>
            <div></div>
        </header>
        <div class="d-flex justify-content-center">
            ${this.getCardHTML(this.cardData)}
        </div>
    `;
    }

    getCardHTML(cardData) {
        return `
        <div class="card" style="
            width: 300px;
            margin: 2rem;
            border-radius: .4rem;
            border: none;
            background: #ffffff;
            color: rgb(0, 0, 0);
            box-shadow: 0 8px 30px rgba(0, 0, 0, .08);
        ">
            <img class="card-img-top" 
                 src="${cardData.src}" 
                 alt="картинка"
                 style="border-radius: .4rem .4rem 0 0; height: 250px; object-fit: contain;">
            <div class="card-body">
                <div style="text-align: center; margin-bottom: 1rem; font-size: 13px; font-weight: 500;">
                    <h5 class="card-title">${cardData.title}</h5>
                    <p class="card-text">${cardData.text}</p>
                </div>
            </div>
        </div>
        `;
    }
    
    render() {
        this.parent.innerHTML = this.getHTML();
        
        document.getElementById('home-btn').addEventListener('click', () => {
            const mainPage = new MainPage(this.parent);
            mainPage.render();
        });
    }
}
