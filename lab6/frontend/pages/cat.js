import {BackButtonComponent} from "../components/back-button.js";
import {MainPage} from "./main.js";
import { catUrls } from "../modules/catUrls.js";

export class CatPage {
    constructor(parent, data) {
        this.parent = parent;
        this.data = data;
    }

    getHTML() {
        return (
            `
            <div class="card mb-3" style="width: 540px;">
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src="${this.data.src}" class="img-fluid" alt="картинка">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">${this.data.name}</h5>
                            <p class="card-text">Цвет: ${this.data.color}</p>
                            <p class="card-text">Возраст: ${this.data.age} год</p>
                            <p class="card-text">Пол: ${this.data.female ? "Ж" : "М"}</p>
                        </div>
                    </div>
                </div>
                <div class="alert ${this.data.adopted ? "alert-success" : "alert-warning"}" role="alert">
                    ${ this.data.adopted ? "Эта кошечка уже нашла свой приют" : "Эта кошечка ищет свой новый дом. Успейте её забрать!" }
                </div>
            </div>
            <button id="delete-button" class="btn btn-danger" type="button">Удалить</button>
            `
        )
    }

    get pageRoot() {
        return document.getElementById('root')
    }

    clickBack() {
        const mainPage = new MainPage(this.parent)
        mainPage.render()
    }

    render() {
        this.parent.innerHTML = ''
        const html = this.getHTML()
        this.parent.insertAdjacentHTML('beforeend', html)

        const backButton = new BackButtonComponent(this.pageRoot);
        backButton.render(this.clickBack.bind(this));

        const deleteButton = document.getElementById("delete-button");
        deleteButton.addEventListener("click", async e => {
            await fetch(catUrls.removeCatById(this.data.id), { method: "DELETE" });
            this.clickBack();
        });
    }
}
