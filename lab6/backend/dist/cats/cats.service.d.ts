import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';
import { Cat } from './entities/cat.entity';
import { FileService } from '../file/file.service';
export declare class CatsService {
    private fileService;
    constructor(fileService: FileService<Cat[]>);
    create(createCatDto: CreateCatDto): void;
    findAll(name?: string): Cat[];
    findOne(id: number): Cat | null;
    update(id: number, updateCatDto: UpdateCatDto): void;
    removeById(id: number): void;
    removeByName(name: string): void;
}
