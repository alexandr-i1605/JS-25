import {ProductCardComponent} from "../../components/product-card/index.js";
import {ProductPage} from "../product/index.js";

export class MainPage {
    static cards = [];

    constructor(parent) {
        this.parent = parent;
        this.cards = MainPage.cards.length ? MainPage.cards : this.getData();
        MainPage.cards = this.cards;
    } 
    get pageRoot() {
        return document.getElementById('main-page')
    }

    getHTML() {
        return `
            <header class="d-flex justify-content-between align-items-center mb-2 bg-light rounded">
                <button class="btn btn-primary" id="home-btn"style="border-radius: .4rem;
                        background: #e4002b;
                        color:#ffffff;
                        border: none;
                        font-size: 16px;
                        font-weight: 700;">Домой</button>
            </header>
            <div class="d-flex mb-3">
                <button class="btn btn-success me-2" id="add-card-btn"style="border-radius: .4rem;
                        background: #e4002b;
                        color:#ffffff;
                        border: none;
                        font-size: 16px;
                        font-weight: 700;">
                    <i class="bi bi-plus-circle" ></i> Добавить карточку
                </button>
            </div>
            <div id="main-page" class="row row-cols-1 row-cols-md-3 g-4"></div>
        `;
    }

    clickCard(e) {
        const cardId = parseInt(e.target.dataset.id);
        const cardData = this.cards.find(card => card.id === cardId);
        const productPage = new ProductPage(this.parent, cardId, cardData);
        productPage.render();
    }

    getData() {
        return [
            {
                id: 1,  
                src: "https://s82079.cdn.ngenix.net/330x0/nj2vadvgm15xyvo0skd56rwutiqd",
                title: "ЛанчБаскет 5 за 400",
                text: "Реально за 400Р"
            },
            {
                id: 2,
                src: "https://s82079.cdn.ngenix.net/330x0/np4ztd9gx1kmncjxs7ehd7wh9ldm",
                title: "Баскет L 24",
                text: "А было 30"
            },
            {
                id: 3,
                src: "https://s82079.cdn.ngenix.net/330x0/9w5b3rhssyyzo8fnhds14cjrqezt",
                title: "Чизбургер",
                text: "Легенда"
            }
        ];
    }

    addCard() {
        let newCard = {...this.cards[0]}
        newCard.id=this.cards.length+1
        this.cards.push(newCard)
        console.log(this.cards)
        MainPage.cards = this.cards;
        this.renderCards();
    }

    removeCard(cardId) {
        this.cards = this.cards.filter(card => card.id !== cardId);
        MainPage.cards = this.cards;
        this.renderCards();
    }

    renderCards() {
        const container = this.pageRoot;
        container.innerHTML = '';
        
        this.cards.forEach((item) => {
            const productCard = new ProductCardComponent(container);
            productCard.render(
                item, 
                (e) => this.clickCard(e),
                () => this.removeCard(item.id)
            );
        });
    }
        
    render() {
        this.parent.innerHTML = '';
        this.parent.insertAdjacentHTML('beforeend', this.getHTML());
        
        this.renderCards();
        
        document.getElementById('add-card-btn').addEventListener('click', () => this.addCard());
        document.getElementById('home-btn').addEventListener('click', () => {
            this.render();
        });
    }
}