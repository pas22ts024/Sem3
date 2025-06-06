import {BackButtonComponent} from "../components/back-button.js";
import {MainPage} from "./main.js";
import {ajax} from "../../modules/ajax.js";
import { stockUrls } from "../modules/stockUrls.js";

export class StockPage {
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
                            <h5 class="card-title">${this.data.title}</h5>
                        </div>
                    </div>
                </div>
                <div class="alert alert-success" role="alert">
                    ${this.data.text}
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
        deleteButton.addEventListener("click", e => {
            ajax.delete(stockUrls.removeStockById(this.data.id), d => this.clickBack());
        });
    }
}
