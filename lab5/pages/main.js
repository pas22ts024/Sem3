import { StockCardComponent } from "../components/stock-card.js";
import { StockPage } from "./stock.js";
import {ajax} from "../../modules/ajax.js";
import {stockUrls} from "../../modules/stockUrls.js";

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

    clickCard(e) {
        const stockId = e.target.id.slice(11);

        ajax.get(stockUrls.getStocks(), stocks => {
            const stockData = stocks.find(stock => stock.id == stockId);
            const stockPage = new StockPage(this.parent, stockData);
            stockPage.render();
        });
    }

    render() {
        this.parent.innerHTML = '';
        const html = this.getHTML();
        this.parent.insertAdjacentHTML('beforeend', html);

        ajax.get(stockUrls.getStocks(), stocks => {
            stocks.forEach((stock, i) => {
                const stockCard = new StockCardComponent(this.pageRoot);
                stockCard.render(stock, i == 0, this.clickCard.bind(this));
            });
        });

        const searchButton = document.getElementById("search-button");
        searchButton.addEventListener("click", e => {
            const searchInput = document.getElementById("search-input");
            const search = searchInput.value;

            ajax.get(stockUrls.getStocksByTitle(search), stocks => {
                this.pageRoot.innerHTML = '';
                stocks.forEach((stock, i) => {
                    const stockCard = new StockCardComponent(this.pageRoot);
                    stockCard.render(stock, i == 0, this.clickCard.bind(this));
                });
            });
        });
    }
}
