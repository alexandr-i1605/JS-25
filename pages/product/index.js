import { ajax } from "../../modules/ajax.js";
import { stockUrls } from "../../modules/stockUrls.js";
import { MainPage } from "../main/index.js";
import {ProductCardComponent} from "../../components/product-card/index.js";
import {BackButtonComponent} from "../../components/back-button/index.js";

export class ProductPage {
    constructor(parent, id) {
        this.parent = parent
        this.id = id
        this.cardData = null
    }

    getData() {
        ajax.get(stockUrls.getStockById(this.id), (data) => {
            this.cardData = data;
            this.renderData(this.cardData)
        })
    }
    
    renderData(item) {
        const product = new ProductCardComponent(this.pageRoot, false)
        product.render(item)
    }

    get pageRoot() {
        return document.getElementById('product-page')
    }

    get backBtn(){
        return document.getElementById("backButton")
    }

    getHTML() {
        return `
        <header class="d-flex justify-content-between align-items-center bg-light rounded">
            <div id="backButton" </div>
            <h2 class="mb-0"></h2>
            <div></div>
        </header>
        <div id="product-page" class="d-flex justify-content-center"></div>
    `;
    }

    clickBack() {
        const mainPage = new MainPage(this.parent);
        mainPage.render();
    }

    render() {
        this.parent.innerHTML = '';
        const html = this.getHTML();
        this.parent.insertAdjacentHTML('beforeend', html);
            
        const backButton = new BackButtonComponent(this.backBtn)
        backButton.render(this.clickBack.bind(this))

        this.getData()
    }
}
