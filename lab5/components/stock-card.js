export class StockCardComponent {
    constructor(parent) {
        this.parent = parent;
    }

    getHTML(data, isFirst) {
        return (
            `
            <div class="carousel-item ${isFirst ? "active" : ""}"">
                <img src="${data.src}" class="d-block w-100" alt="text" id="click-card-${data.id}">
                <div class="carousel-caption d-none d-md-block">
                    <h5>${data.title}</h5>
                    <p>${data.text}</p>
                </div>
            </div>
            `
        );
    }

    addListeners(data, listener) {
        document
            .getElementById(`click-card-${data.id}`)
            .addEventListener("click", listener);
    }

    render(data, isFirst, listener) {
        const html = this.getHTML(data, isFirst);
        this.parent.insertAdjacentHTML('beforeend', html);
        this.addListeners(data, listener);
    }
}
