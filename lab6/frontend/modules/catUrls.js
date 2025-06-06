class CatUrls {
    constructor() {
        this.baseUrl = 'http://localhost:3000';
    }

    getCats() {
        return `${this.baseUrl}/cats`;
    }

    getCatsByName(name) {
        return `${this.baseUrl}/cats/?name=${name}`;
    }

    getCatById(id) {
        return `${this.baseUrl}/cats/${id}`;
    }

    createCat() {
        return `${this.baseUrl}/cats`;
    }

    removeCatById(id) {
        return `${this.baseUrl}/cats/${id}`;
    }

    updateCatById() {
        return `${this.baseUrl}/cats/${id}`;
    }
}

export const catUrls = new CatUrls();