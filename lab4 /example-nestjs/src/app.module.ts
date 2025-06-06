import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StocksModule } from './stocks/stocks.module';
import { FileService } from './file/file.service';

@Module({
  imports: [StocksModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
