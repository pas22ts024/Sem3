export class CatCardComponent {
    constructor(parent) {
        this.parent = parent;
    }

    getHTML(data) {
        return (
            `
            <div class="carousel-item ${data.id == 1 ? "active" : ""}"">
                <img src="${data.src}" class="d-block w-100" alt="text" id="click-card-${data.id}">
                <div class="carousel-caption d-none d-md-block">
                    <h5>${data.name}</h5>
                    <p>${data.color}</p>
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

    render(data, listener) {
        const html = this.getHTML(data);
        this.parent.insertAdjacentHTML('beforeend', html);
        this.addListeners(data, listener);
    }
}
