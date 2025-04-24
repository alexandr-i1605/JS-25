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
                            <input class="form-check-input mt-0" type="radio" name="Radios" id="Splitter" 
                            style="margin-left: 10px; margin-right: 5px;">
                        </div>
                    </div>
                    <input type="text" id="SplitterInput" class="form-control" placeholder="Разделитель" 
                    style="border-radius: 0 .4rem .4rem 0;">
                </div>

                <div class="input-group" style="width: 250px;">
                    <div class="input-group-prepend">
                        <div class="input-group-text p-0 border-0 bg-transparent">
                            <input class="form-check-input mt-0" type="radio" name="Radios" id="Coupl"
                            style="margin-left: 10px; margin-right: 5px;">
                        </div>
                    </div>
                    <input type="text" id="CouplInput" class="form-control" placeholder="Найти пару" 
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
            },
            {
                id: 5,
                src: "https://s82079.cdn.ngenix.net/330x0/9w5b3rhssyyzo8fnhds14cjrqezt",
                title: "undefined",
                text: "200"
            },
            {
                id: 6,
                src: "https://s82079.cdn.ngenix.net/330x0/7m7ja14p9nuufnl2hz2c5ts65252",
                title: "TacoCat",
                text: "null"
            },
            {
                id: 7,
                src: "https://s82079.cdn.ngenix.net/330x0/7m7ja14p9nuufnl2hz2c5ts65252",
                title: "TacoCat",
                text: "0"
            },
            {
                id: 8,
                src: "https://s82079.cdn.ngenix.net/330x0/7m7ja14p9nuufnl2hz2c5ts65252",
                title: "TacoCat",
                text: "false"
            },
            {
                id: 9,
                src: "https://s82079.cdn.ngenix.net/330x0/7m7ja14p9nuufnl2hz2c5ts65252",
                title: "TacoCat",
                text: "1"
            },
            {
                id: 10,
                src: "https://s82079.cdn.ngenix.net/330x0/7m7ja14p9nuufnl2hz2c5ts65252",
                title: "TacoCat",
                text: "2"
            },
            {
                id: 11,
                src: "https://s82079.cdn.ngenix.net/330x0/7m7ja14p9nuufnl2hz2c5ts65252",
                title: "TacoCat",
                text: "3"
            },
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

    renderCards(cards = this.cards) {
        const container = this.pageRoot;
        container.innerHTML = '';
        
        cards.forEach((item) => {
            const productCard = new ProductCardComponent(container);
            productCard.render(
                item, 
                (e) => this.clickCard(e),
                () => this.removeCard(item.id)
            );
        });
    }

    // Напишите функцию erase, которая очищает массив от нежелательных значений, таких как false,
    //  undefined, пустые строки, ноль, null.
    erase() {
        return this.cards.filter(card => {
            return card.title !== 'undefined' && 
                   card.title !== 'null' && 
                   card.text !== 'undefined' && 
                   card.text !== 'null' && 
                   card.title !== 'false' && 
                   card.text !== 'false' &&
                   card.title !== 'true' && 
                   card.text !== 'true' &&
                   card.title !== '' && 
                   card.text !== '' &&
                   card.title !== '0' && 
                   card.text !== '0';
                   
        });
    }

    // Проверить что строка является палиндромом. Палиндромом называется строка,
    // которая пишется одинаково слева направо и справа налево.
    isPalindrome(str) {
        const cleanStr = str.toLowerCase().replace(' ', '');
        let left = 0;
        let right = cleanStr.length - 1;
    
        while (left < right) {
            if (cleanStr[left] !== cleanStr[right]) {
                return false;
            }
            left++;
            right--;
        }
        return true;
    }

    // Второе решение
    // isPalindrome(str) {
    //     const cleanStr = str.toLowerCase().replace(' ', '');
    //     return cleanStr === cleanStr.split('').reverse().join('');
    // }

    getPalindroms(){
        return this.cards.filter(card => {
            const title = this.isPalindrome(card.title);
            const text = this.isPalindrome(card.text);
            return title || text;
        });
    }

    concatenate(separator) {
        const allTitles = this.cards.map(card => card.title)
        const allTexts = this.cards.map(card => card.text)

        const combinedTitle = allTitles.join(separator)
        const combinedText = allTexts.join(separator)

        const Card = {
          id: this.cards.length+1,
          src: "https://s82079.cdn.ngenix.net/330x0/9w5b3rhssyyzo8fnhds14cjrqezt",
          title: combinedTitle,
          text: combinedText,
          flag: true
        };
      
        return Card;
    }
      
    findCouple(number) {
        const allTexts = this.cards.map(card => card.text);
        const AllNum = new Set();
        for (const num of allTexts) {
            if (!isNaN(num)){
                AllNum.add(Number(num))
            }
        }
        const pairs = [];
        for (const num of AllNum) {
            const complement =number - num;
            console.log(complement, num)
            if (AllNum.has(complement)) {
                pairs.push(`${complement}+${num}`);
                AllNum.delete(complement);
            } else {
                AllNum.add(num);
            }
        }
        const resultString = pairs.join(', ');
        const newCard = {
            id: this.cards.length + 1,
            src: "https://s82079.cdn.ngenix.net/330x0/9w5b3rhssyyzo8fnhds14cjrqezt",
            title: 'Couples',
            text: resultString,
            flag: true
        };
        return newCard;
    }

    render() {
        this.parent.innerHTML = '';
        this.parent.insertAdjacentHTML('beforeend', this.getHTML());
        
        this.renderCards();
        
        document.getElementById('add-card-btn').addEventListener('click', () => this.addCard());
        document.getElementById('home-btn').addEventListener('click', () => {
            this.render();
        });

        document.getElementById('AllCards').addEventListener('change', () => {
            this.renderCards();
        });
        
        document.getElementById('CleanCards').addEventListener('change', () => {
            const filteredCards = this.erase();
            this.renderCards(filteredCards);
        });

        document.getElementById('Palindroms').addEventListener('change', () => {
            const filteredCards = this.getPalindroms();
            this.renderCards(filteredCards);
        });

        document.getElementById('Splitter').addEventListener('change', () => {
            const separator =  document.getElementById('SplitterInput').value;
            const combinedCard = this.concatenate(separator);
            const filteredCards = this.cards.filter(c => c.flag);
            filteredCards.push(combinedCard);
            this.renderCards(filteredCards);
        });
    
        document.getElementById('Coupl').addEventListener('change', () => {
            const number =  document.getElementById('CouplInput').value;
            const combinedCard = this.findCouple(number);
            const filteredCards = this.cards.filter(c => c.flag);
            filteredCards.push(combinedCard);
            this.renderCards(filteredCards);
        });
    }
}