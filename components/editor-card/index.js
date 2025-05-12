export class EditorCardComponent {
    constructor(parent) {
        this.parent = parent;
    }

    getHTML(data) {
        return (
            `
        <div class="card" style="
            width: 300px;
            margin: 1rem 0 1.5rem 1.5rem;
            border-radius: .4rem;
            border: none;
            cursor: default;
            background: #ffffff;
            color: rgb(0, 0, 0);
            box-shadow: 0 8px 30px rgba(0, 0, 0, .08);
            transition: all .6s;
            display: flex;
            flex-direction: column;
            padding: 0px 12px;
        ">
            <div class="dropdown" style="
                display: flex;
                flex-direction: row-reverse ;
            ">
                <button class="btn btn-floating btn-sm disabled" type="button" id="dropdownMenuButton1"
                data-bs-toggle="dropdown" aria-expanded="false" style="
                    border: none;
                    font-size: 16px;
                    font-weight: 900">
                    ⋮
                </button>
            </div>
            <img class="card-img-top" style="
                object-fit: contain;
                height: 100%;
                object-fit: contain;
                border-radius: .4rem .4rem 0 0;
                max-width: 100%;" 
            src="${data.src}" alt="картинка">
            <div class="card-body">
                <div style="text-align: center; margin-bottom: 1rem; font-size: 13px; font-weight: 500;">
                    <input type="text" maxlength="20" class="h5" id="card-title-${data.id}" value="${data.title}" style="
                        text-align: center;
                        width: 100%


                    "><br> 
                    <input type="text" maxlength="34" class="p" id="card-text-${data.id}" value="${data.text}" style="
                        text-align: center;
                        font-size: 13px;
                        font-weight: 500;
                        width: 100%

                    "><br>
                </div>
                <div class="mt-auto" style="
                    display: flex;
                    justify-content: space-between;">
                    <button class="btn btn-danger disabled" 
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
                    <button class="btn btn-primary disabled" 
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
    
    render(data) {
        this.parent.insertAdjacentHTML('beforeend', this.getHTML(data));
    }
    
}
