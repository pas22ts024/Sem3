import { CatsService } from './cats.service';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';
import { Cat } from './entities/cat.entity';
export declare class CatsController {
    private readonly catsService;
    constructor(catsService: CatsService);
    create(createCatDto: CreateCatDto): void;
    findAll(name?: string): Cat[];
    findOne(id: string): Cat | null;
    update(id: string, updateCatDto: UpdateCatDto): void;
    remove(id: string): void;
}
