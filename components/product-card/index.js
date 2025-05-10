export class ProductCardComponent {
    constructor(parent, btnsFlag = true) {
        this.parent = parent;
        this.btnsFlag = btnsFlag ? "flex":"none" //флаг для отображения кнопок на карточке
    }

    getHTML(data) {
        return (
            `
        <div class="card" style="
            width: 300px;
            margin: 1rem 0 1.5rem 1.5rem;
            border-radius: .4rem;
            border: none;
            cursor: pointer;
            background: #ffffff;
            color: rgb(0, 0, 0);
            box-shadow: 0 8px 30px rgba(0, 0, 0, .08);
            transition: all .6s;
            display: flex;
            flex-direction: column;
        ">
            <img class="card-img-top" style="
            object-fit: contain;
            height: 100%;
            object-fit: contain;
            width: 100%;" src="${data.src}" alt="картинка" style="border-radius: .4rem .4rem 0 0;">
            <div class="card-body">
                 <div style="text-align: center; margin-bottom: 1rem; font-size: 13px; font-weight: 500;">
                    <h5 class="card-title">${data.title}</h5>
                    <p class="card-text">${data.text}</p>
                </div>
                <div class="mt-auto" style="
                    display: ${this.btnsFlag};
                    justify-content: space-between;">
                    <button class="btn btn-danger" 
                        id="remove-card-${data.id}"
                        data-id="${data.id}"
                        style="border-radius: .4rem;
                            border: none;
                            background: #ffffff;
                            color: rgb(52, 52, 52);
                            font-size: 16px;
                            font-weight: 700;">
                        <i class="bi bi-trash"></i> Удалить
                    </button>
                    <button class="btn btn-primary" 
                        id="click-card-${data.id}" 
                        data-id="${data.id}"
                        style="border-radius: .4rem;
                        background: #e4002b;
                        color:#ffffff;
                        border: none;
                        font-size: 16px;
                        font-weight: 700;">
                        Подробнее
                    </button>
                </div>
            </div>
        </div>
    `
        )
    }

    addListeners(data, clickListener, removeListener) {
        document
            .getElementById(`click-card-${data.id}`)
            .addEventListener("click", clickListener);
            
        document
            .getElementById(`remove-card-${data.id}`)
            .addEventListener("click", removeListener);
    }
    
    render(data, clickListener, removeListener) {
        this.parent.insertAdjacentHTML('beforeend', this.getHTML(data));
        this.addListeners(data, clickListener, removeListener);
    }
    
}
