import {CatCardComponent} from "../components/cat-card.js";
import { CatPage } from "./cat.js";

export class MainPage {
    constructor(parent) {
        this.parent = parent;
    }

    getData() {
        return [
            {
                id: 1,
                src: "https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_3x2.jpg",
                name: "Пушок",
                age: 2,
                color: "Серый",
                female: false,
                adopted: false,
            },
            {
                id: 2,
                src: "https://cdn.britannica.com/39/226539-050-D21D7721/Portrait-of-a-cat-with-whiskers-visible.jpg",
                name: "Буся",
                age: 1,
                color: "Коричневый",
                female: true,
                adopted: false,
            },
            {
                id: 3,
                src: "https://www.alleycat.org/wp-content/uploads/2019/03/FELV-cat.jpg",
                name: "Ася",
                age: 5,
                color: "Рыжий",
                female: true,
                adopted: true,
            },
            {
                id: 4,
                src: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/640px-Cat03.jpg",
                name: "Мурка",
                age: 8,
                color: "Рыжий",
                female: false,
                adopted: true,
            },
            {
                id: 5,
                src: "https://storage.yandexcloud.net/yac-wh-sb-prod-s3-media-03007/uploads/article/67/43bd8819b80d4e5df56ea6d76f55240c.webp",
                name: "Барсик",
                age: 3,
                color: "Серый",
                female: false,
                adopted: false,
            },
        ];
    }

    get pageRoot() {
        return document.getElementById('main-page') .getElementsByClassName("carousel-inner")[0];
    }

    getHTML() {
        return (
            `
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
        const catId = e.target.id.slice(11);
        const catData = this.getData().find((cat) => cat.id == catId);

        const catPage = new CatPage(this.parent, catData);
        catPage.render();
    }

    render() {
        this.parent.innerHTML = '';
        const html = this.getHTML();
        this.parent.insertAdjacentHTML('beforeend', html);

        const cats = this.getData();
        cats.forEach((cat, i) => {
            const catCard = new CatCardComponent(this.pageRoot);
            catCard.render(cat, this.clickCard.bind(this));
        });
    }
}
