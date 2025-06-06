import { CatCardComponent } from "../components/cat-card.js";
import { CatPage } from "./cat.js";
import {catUrls} from "../modules/catUrls.js";

export class MainPage {
    constructor(parent) {
        this.parent = parent;
    }

    get pageRoot() {
        return document.getElementById('main-page') .getElementsByClassName("carousel-inner")[0];
    }

    getHTML() {
        return (
            `
            <div class="input-group mb-3">
                <button class="btn btn-outline-secondary" type="button" id="search-button">Поиск...</button>
                <input type="text" class="form-control" id="search-input" aria-describedby="basic-addon1">
            </div>

            <div id="main-page" class="container">
                <div id="carouselExampleCaptions" class="carousel slide">
                    <div class="carousel-inner">
                    </div>

                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
            `
        );
    }

    async clickCard(e) {
        const catId = e.target.id.slice(11);

        const cats = await (await fetch(catUrls.getCats())).json()
        const catData = cats.find(cat => cat.id == catId);
        const catPage = new CatPage(this.parent, catData);
        catPage.render();
    }

    async render() {
        this.parent.innerHTML = '';
        const html = this.getHTML();
        this.parent.insertAdjacentHTML('beforeend', html);

        const cats = await (await fetch(catUrls.getCats())).json();
        cats.forEach((cat, i) => {
            const catCard = new CatCardComponent(this.pageRoot);
            catCard.render(cat, i == 0, this.clickCard.bind(this));
        });

        const searchButton = document.getElementById("search-button");
        searchButton.addEventListener("click", async e => {
            const searchInput = document.getElementById("search-input");
            const search = searchInput.value;

            const cats = await (await fetch(catUrls.getCatsByName(search))).json();
            this.pageRoot.innerHTML = '';
            cats.forEach((cat, i) => {
                const catCard = new CatCardComponent(this.pageRoot);
                catCard.render(cat, i == 0, this.clickCard.bind(this));
            });
        });
    }
}
