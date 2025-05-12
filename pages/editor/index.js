import { ajax } from "../../modules/ajax.js";
import { stockUrls } from "../../modules/stockUrls.js";
import { MainPage } from "../main/index.js";
import {BackButtonComponent} from "../../components/back-button/index.js";
import {EditorCardComponent} from "../../components/editor-card/index.js"

export class EditorPage {
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
        const editorCard = new EditorCardComponent(this.pageRoot)
        editorCard.render(item)
    }

    get pageRoot() {
        return document.getElementById('editor-page')
    }

    get backBtn(){
        return document.getElementById("backButton")
    }

    get saveBtn(){
        return document.getElementById("save-card-btn")
    }

    getHTML() {
        return `
        <header class="d-flex justify-content-between align-items-center mb-2 bg-light rounded">
            <div id="backButton" </div>
        </header>
        <div class="d-flex mb-3">
                <button class="btn btn-success me-2" id="save-card-btn" style="
                        border-radius: .4rem;
                        background: #e4002b;
                        color:#ffffff;
                        border: none;
                        font-size: 16px;
                        font-weight: 700;">
                    Сохранить
                </button>
            </div>
        <div id="editor-page" class="d-flex justify-content-center"></div>
    `;
    }

    clickBack() {
        const mainPage = new MainPage(this.parent);
        mainPage.render();
    }

    saveData(){
        this.cardData.title=document.getElementById(`card-title-${this.cardData.id}`).value
        this.cardData.text=document.getElementById(`card-text-${this.cardData.id}`).value
        ajax.patch(stockUrls.getStockById(this.id), (this.cardData), (data) => {
            this.render();
        })
    }

    render() {
        this.parent.innerHTML = '';
        const html = this.getHTML();
        this.parent.insertAdjacentHTML('beforeend', html);
            
        const backButton = new BackButtonComponent(this.backBtn)
        backButton.render(this.clickBack.bind(this))

        document.getElementById('save-card-btn').addEventListener('click', () => this.saveData());

        this.getData()
    }

}