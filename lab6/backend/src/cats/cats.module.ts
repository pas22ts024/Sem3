import { Module } from '@nestjs/common';
import { CatsService } from './cats.service';
import { CatsController } from './cats.controller';
import { Cat } from './entities/cat.entity';
import { FileService } from '../file/file.service';

@Module({
  controllers: [CatsController],
  providers: [
    CatsService,
    {
      provide: FileService,
      useFactory: () => { return new FileService<Cat[]>('../assets/cats.json'); },
    },
  ],
})
export class CatsModule {}
