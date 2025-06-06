import { StocksService } from './stocks.service';
import { CreateStockDto } from './dto/create-stock.dto';
import { UpdateStockDto } from './dto/update-stock.dto';
import { Stock } from './entities/stock.entity';
export declare class StocksController {
    private readonly stocksService;
    constructor(stocksService: StocksService);
    create(createStockDto: CreateStockDto): void;
    findAll(title?: string): Stock[];
    findOne(id: string): Stock | null;
    update(id: string, updateStockDto: UpdateStockDto): void;
    remove(id: string): void;
}
