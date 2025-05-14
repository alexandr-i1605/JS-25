(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))r(n);new MutationObserver(n=>{for(const d of n)if(d.type==="childList")for(const a of d.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function e(n){const d={};return n.integrity&&(d.integrity=n.integrity),n.referrerPolicy&&(d.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?d.credentials="include":n.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function r(n){if(n.ep)return;n.ep=!0;const d=e(n);fetch(n.href,d)}})();class u{constructor(t,e=!0){this.parent=t,this.btnsFlag=e?"flex":"none"}getHTML(t){return`
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
                <button class="btn btn-floating btn-sm" type="button" id="dropdownMenuButton1"
                data-bs-toggle="dropdown" aria-expanded="false" style="
                        font-size: 16px;
                        font-weight: 900">
                     ⋮
                </button>
                <ul class="dropdown-menu dropdown-menu-lg-end" aria-labelledby="dropdownMenuButton1">
                    <li><button class="dropdown-item" id="edit-card-${t.id}"
                        data-id="${t.id}" type="button">Редактировать</button></li>
                </ul>
            </div>
            <img class="card-img-top" style="
                object-fit: contain;
                height: 100%;
                object-fit: contain;
                border-radius: .4rem .4rem 0 0;
            width: 100%;" src="${t.src}" alt="картинка">
            <div class="card-body">
                 <div style="text-align: center; margin-bottom: 1rem; font-size: 13px; font-weight: 500;">
                    <h5 class="card-title">${t.title}</h5>
                    <p class="card-text">${t.text}</p>
                </div>
                <div class="mt-auto" style="
                    display: ${this.btnsFlag};
                    justify-content: space-between;">
                    <button class="btn btn-danger" 
                        id="remove-card-${t.id}"
                        data-id="${t.id}"
                        style="border-radius: .4rem;
                            border: none;
                            background: #ffffff;
                            color: rgb(52, 52, 52);
                            font-size: 16px;
                            font-weight: 700;">
                        <i class="bi bi-trash"></i> Удалить
                    </button>
                    <button class="btn btn-primary" 
                        id="click-card-${t.id}" 
                        data-id="${t.id}"
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
    `}addListeners(t,e,r,n){document.getElementById(`click-card-${t.id}`).addEventListener("click",e),document.getElementById(`remove-card-${t.id}`).addEventListener("click",r),document.getElementById(`edit-card-${t.id}`).addEventListener("click",n)}render(t,e,r,n){this.parent.insertAdjacentHTML("beforeend",this.getHTML(t)),this.addListeners(t,e,r,n)}}class c{constructor(t){this.parent=t}addListeners(t){document.getElementById("back-button").addEventListener("click",t)}getHTML(){return`
                <button class="btn btn-primary" id="back-button"style="border-radius: .4rem;
                        background: #e4002b;
                        color:#ffffff;
                        border: none;
                        font-size: 16px;
                        font-weight: 700;">Домой</button>
            `}render(t){const e=this.getHTML();this.parent.insertAdjacentHTML("beforeend",e),this.addListeners(t)}}class h{constructor(){this.baseUrl="http://localhost:3000"}getStocks(){return`${this.baseUrl}/stocks`}getStockById(t){return`${this.baseUrl}/stocks/${t}`}createStock(){return`${this.baseUrl}/stocks`}removeStockById(t){return`${this.baseUrl}/stocks/${t}`}updateStockById(t){return`${this.baseUrl}/stocks/${t}`}}const s=new h;class b{constructor(t,e){this.parent=t,this.id=e,this.cardData=null}getData(){fetch(s.getStockById(this.id)).then(t=>t.json()).then(t=>{this.cardData=t,this.renderData(this.cardData)}).catch(t=>{console.error("Ошибка при получени карточки: ",t)})}renderData(t){new u(this.pageRoot,!1).render(t)}get pageRoot(){return document.getElementById("product-page")}get backBtn(){return document.getElementById("backButton")}getHTML(){return`
        <header class="d-flex justify-content-between align-items-center bg-light rounded">
            <div id="backButton" </div>
        </header>
        <div id="product-page" class="d-flex justify-content-center"></div>
    `}clickBack(){new o(this.parent).render()}render(){this.parent.innerHTML="";const t=this.getHTML();this.parent.insertAdjacentHTML("beforeend",t),new c(this.backBtn).render(this.clickBack.bind(this)),this.getData()}}class g{constructor(t){this.parent=t}getHTML(t){return`
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
            <div style="text-align: center; margin-bottom: 1rem; font-size: 13px; font-weight: 500;">
                <input type="text" maxlength="100" class="h5" 
                    id="card-img-${t?t.id:"null"}" placeholder="URL картинки" value="${t?t.src:""}" style="
                        text-align: center;
                        width: 100%
                    ">
            </div>
            <img class="card-img-top" style="
                object-fit: contain;
                height: 100%;
                object-fit: contain;
                border-radius: .4rem .4rem 0 0;
                max-width: 100%;" 
            src="https://s82079.cdn.ngenix.net/330x0/nj2vadvgm15xyvo0skd56rwutiqd" alt="картинка">
            <div class="card-body">
                <div style="text-align: center; margin-bottom: 1rem; font-size: 13px; font-weight: 500;">
                    <input type="text" maxlength="20" class="h5" 
                    id="card-title-${t?t.id:"null"}" placeholder="Заголовок" value="${t?t.title:""}" style="
                        text-align: center;
                        width: 100%


                    "><br> 
                    <input type="text" maxlength="34" class="p"
                    id="card-text-${t?t.id:"null"}" placeholder="Описание" value="${t?t.text:""}" style="
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
                        style="border-radius: .4rem;
                            border: none;
                            background: #ffffff;
                            color: rgb(52, 52, 52);
                            font-size: 16px;
                            font-weight: 700;">
                        <i class="bi bi-trash"></i> Удалить
                    </button>
                    <button class="btn btn-primary disabled" 
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
    `}render(t){this.parent.insertAdjacentHTML("beforeend",this.getHTML(t))}}class l{constructor(t,e=null){this.parent=t,this.id=e,this.cardData=null}getData(){this.id?fetch(s.getStockById(this.id)).then(t=>t.json()).then(t=>{this.cardData=t,this.renderData(this.cardData)}).catch(t=>{console.error("Ошибка при получении карточки: ",t)}):this.renderData(this.cardData)}renderData(t){new g(this.pageRoot).render(t)}get pageRoot(){return document.getElementById("editor-page")}get backBtn(){return document.getElementById("backButton")}get saveBtn(){return document.getElementById("save-card-btn")}getHTML(){return`
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
    `}clickBack(){new o(this.parent).render()}saveData(){this.cardData.src=document.getElementById(`card-img-${this.cardData.id}`).value,this.cardData.title=document.getElementById(`card-title-${this.cardData.id}`).value,this.cardData.text=document.getElementById(`card-text-${this.cardData.id}`).value,fetch(s.getStockById(this.id),{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(this.cardData)}).then(()=>{this.render()}).catch(t=>{console.error("Ошибка при изменении карточки: ",t)})}get getFormData(){return{src:document.getElementById("card-img-null").value,title:document.getElementById("card-title-null").value,text:document.getElementById("card-text-null").value}}addData(){fetch(s.createStock(),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(this.getFormData)}).then(()=>{this.render()}).catch(t=>{console.error("Ошибка при сохранении карточки: ",t)})}render(){this.parent.innerHTML="";const t=this.getHTML();this.parent.insertAdjacentHTML("beforeend",t),new c(this.backBtn).render(this.clickBack.bind(this)),document.getElementById("save-card-btn").addEventListener("click",()=>this.id?this.saveData():this.addData()),this.getData()}}class o{constructor(t){this.parent=t}get pageRoot(){return document.getElementById("main-page")}get backBtn(){return document.getElementById("backButton")}getHTML(){return`
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
        `}clickCard(t){const e=parseInt(t.target.dataset.id);new b(this.parent,e).render()}getData(){fetch(s.getStocks()).then(t=>t.json()).then(t=>{this.renderData(t)}).catch(t=>{console.error("Ошибка при получении карточек: ",t)})}renderData(t){t.forEach(e=>{new u(this.pageRoot).render(e,this.clickCard.bind(this),this.removeCard.bind(this),this.editCard.bind(this))})}addCard(){new l(this.parent).render()}editCard(t){const e=parseInt(t.target.dataset.id);new l(this.parent,e).render()}removeCard(t){const e=parseInt(t.target.dataset.id);fetch(s.getStockById(e),{method:"DELETE"}).then(r=>{this.render()}).catch(r=>{console.error("Ошибка при удалении карточки: ",r)})}clickBack(){new o(this.parent).render()}render(){this.parent.innerHTML="";const t=this.getHTML();this.parent.insertAdjacentHTML("beforeend",t),new c(this.backBtn).render(this.clickBack.bind(this)),this.getData(),document.getElementById("add-card-btn").addEventListener("click",()=>this.addCard())}}const f=document.getElementById("root"),m=new o(f);m.render();
