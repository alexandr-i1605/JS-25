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
            <div class="d-flex flex-row mb-3">
                <button class="btn btn-success me-2" id="add-card-btn"style="border-radius: .4rem;
                        background: #e4002b;
                        color:#ffffff;
                        border: none;
                        font-size: 16px;
                        font-weight: 700;">
                    <i class="bi bi-plus-circle" ></i> Добавить карточку
                </button>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="Radios" id="AllCards" value="option1" checked>
                    <label class="form-check-label" for="AllCards">
                        Все карточки
                        </label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="Radios" id="CleanCards" value="option2">
                    <label class="form-check-label" for="CleanCards">
                        Скрыть неполные карточки
                    </label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="Radios" id="Palindroms" value="option3">
                    <label class="form-check-label" for="Palindroms">
                        Найти палиндромы
                    </label>
                </div>

                <div class="input-group me-3" style="width: 250px;">
                    <div class="input-group-prepend">
                        <div class="input-group-text p-0 border-0 bg-transparent">
                            <input class="form-check-input mt-0" type="radio" name="Radios" id="Splitter" value="option4" 
                            style="margin-left: 10px; margin-right: 5px;">
                        </div>
                    </div>
                    <input type="text" class="form-control" placeholder="Разделитель" 
                    style="border-radius: 0 .4rem .4rem 0;">
                </div>

                <div class="input-group" style="width: 250px;">
                    <div class="input-group-prepend">
                        <div class="input-group-text p-0 border-0 bg-transparent">
                            <input class="form-check-input mt-0" type="radio" name="Radios" id="Coupl" value="option5" 
                            style="margin-left: 10px; margin-right: 5px;">
                        </div>
                    </div>
                    <input type="text" class="form-control" placeholder="Найти пару" 
                    style="border-radius: 0 .4rem .4rem 0;">
                </div>
            </div>
            <div id="main-page" class="row row-cols-1 row-cols-md-3 g-4"></div>

            <style>
                .form-check-input:checked[type=radio] {
                    background-color: #e4002b;
                    border-color: #e4002b;
                }
                .form-check-input:focus[type=radio] {
                    box-shadow: 0 0 0 1px #fff, 0 0 0 0.2rem rgba(255, 0, 13, 0.25);
                }
                .input-group-text {
                    background-color: transparent;
                }
            </style>
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
                text: "400"
            },
            {
                id: 2,
                src: "https://s82079.cdn.ngenix.net/330x0/np4ztd9gx1kmncjxs7ehd7wh9ldm",
                title: "Баскет L 24",
                text: "1551"
            },
            {
                id: 3,
                src: "https://s82079.cdn.ngenix.net/330x0/9w5b3rhssyyzo8fnhds14cjrqezt",
                title: "Чизбургер",
                text: "Шалаш"
            },
            {
                id: 4,
                src: "https://s82079.cdn.ngenix.net/330x0/7m7ja14p9nuufnl2hz2c5ts65252",
                title: "TacoCat",
                text: "200"
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