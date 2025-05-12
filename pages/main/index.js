import {ProductCardComponent} from "../../components/product-card/index.js";
import {BackButtonComponent} from "../../components/back-button/index.js";
import {ProductPage} from "../product/index.js";
import {ajax} from "../../modules/ajax.js";
import {stockUrls} from "../../modules/stockUrls.js";
import {EditorPage} from "../editor/index.js";

export class MainPage {

    constructor(parent) {
        this.parent = parent;
    } 
    get pageRoot() {
        return document.getElementById('main-page')
    }

    get backBtn(){
        return document.getElementById("backButton")
    }

    getHTML() {
        return `
            <header class="d-flex justify-content-between align-items-center mb-2 bg-light rounded">
                <div id="backButton" </div>
            </header>
            <div class="d-flex mb-3">
                <button class="btn btn-success me-2" id="add-card-btn"style="border-radius: .4rem;
                        background: #e4002b;
                        color:#ffffff;
                        border: none;
                        font-size: 16px;
                        font-weight: 700;">
                    Добавить карточку
                </button>
            </div>
            <div id="main-page" class="row row-cols-1 row-cols-md-3 g-4"></div>
        `;
    }

    clickCard(e) {
        const cardId = parseInt(e.target.dataset.id);
        const productPage = new ProductPage(this.parent, cardId);
        productPage.render();
    }

    // getData() {
    //     return [
    //         {
    //             id: 1,  
    //             src: "https://s82079.cdn.ngenix.net/330x0/nj2vadvgm15xyvo0skd56rwutiqd",
    //             title: "ЛанчБаскет 5 за 400",
    //             text: "Реально за 400Р"
    //         },
    //         {
    //             id: 2,
    //             src: "https://s82079.cdn.ngenix.net/330x0/np4ztd9gx1kmncjxs7ehd7wh9ldm",
    //             title: "Баскет L 24",
    //             text: "А было 30"
    //         },
    //         {
    //             id: 3,
    //             src: "https://s82079.cdn.ngenix.net/330x0/9w5b3rhssyyzo8fnhds14cjrqezt",
    //             title: "Чизбургер",
    //             text: "Легенда"
    //         }
    //     ];
    // }

    getData() {
        ajax.get(stockUrls.getStocks(), (data) => {
            this.renderData(data);
        })
    }

    renderData(items) {
        items.forEach((item) => {
            const productCard = new ProductCardComponent(this.pageRoot)
            productCard.render(item, this.clickCard.bind(this), this.removeCard.bind(this), this.editCard.bind(this))
        })
    }

    editCard(e) {
        const cardId = parseInt(e.target.dataset.id);
        const editorPage = new EditorPage(this.parent, cardId);
        editorPage.render();
    }

    removeCard(e) {
        const cardId = parseInt(e.target.dataset.id);
        ajax.delete(stockUrls.getStockById(cardId), (data) => {
            this.render();
        })
    }

    clickBack() {
        const mainPage = new MainPage(this.parent)
        mainPage.render()
    }

    render() {
        this.parent.innerHTML = ''
        const html = this.getHTML()
        this.parent.insertAdjacentHTML('beforeend', html)

        const backButton = new BackButtonComponent(this.backBtn)
        backButton.render(this.clickBack.bind(this))
        
        this.getData()

        document.getElementById('add-card-btn').addEventListener('click', () => this.addCard());
        
    }
}