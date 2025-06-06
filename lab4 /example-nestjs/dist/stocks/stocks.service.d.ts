import { CreateStockDto } from './dto/create-stock.dto';
import { UpdateStockDto } from './dto/update-stock.dto';
import { Stock } from './entities/stock.entity';
import { FileService } from '../file/file.service';
export declare class StocksService {
    private fileService;
    constructor(fileService: FileService<Stock[]>);
    create(createStockDto: CreateStockDto): void;
    findAll(title?: string): Stock[];
    findOne(id: number): Stock | null;
    update(id: number, updateStockDto: UpdateStockDto): void;
    removeById(id: number): void;
    removeByTitle(title: string): void;
}
