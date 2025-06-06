"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CatsService = void 0;
const common_1 = require("@nestjs/common");
const file_service_1 = require("../file/file.service");
let CatsService = class CatsService {
    fileService;
    constructor(fileService) {
        this.fileService = fileService;
    }
    create(createCatDto) {
        const cats = this.fileService.read();
        const cat = { ...createCatDto, id: cats.length + 1 };
        this.fileService.add(cat);
    }
    findAll(name) {
        const cats = this.fileService.read();
        return name
            ? cats.filter((cat) => cat.name.toLowerCase().includes(name.toLowerCase()))
            : cats;
    }
    findOne(id) {
        const cats = this.fileService.read();
        return cats.find((cat) => cat.id === id) ?? null;
    }
    update(id, updateCatDto) {
        const cats = this.fileService.read();
        const updatedCats = cats.map((cat) => cat.id === id ? { ...cat, ...updateCatDto } : cat);
        this.fileService.write(updatedCats);
    }
    removeById(id) {
        const filteredCats = this.fileService
            .read()
            .filter((cat) => cat.id !== id);
        this.fileService.write(filteredCats);
    }
    removeByName(name) {
        const filteredCats = this.fileService
            .read()
            .filter((cat) => cat.name.toLowerCase() !== name.toLowerCase());
        this.fileService.write(filteredCats);
    }
};
exports.CatsService = CatsService;
exports.CatsService = CatsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [file_service_1.FileService])
], CatsService);
//# sourceMappingURL=cats.service.js.map