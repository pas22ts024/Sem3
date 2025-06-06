import { Injectable } from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';
import { Cat } from './entities/cat.entity';
import { FileService } from '../file/file.service';

@Injectable()
export class CatsService {
  constructor(private fileService: FileService<Cat[]>) {}

  create(createCatDto: CreateCatDto) {
    const cats = this.fileService.read();

    const cat = { ...createCatDto, id: cats.length + 1 };

    this.fileService.add(cat);
  }

  findAll(name?: string): Cat[] {
    const cats = this.fileService.read();

    return name
      ? cats.filter((cat) =>
          cat.name.toLowerCase().includes(name.toLowerCase()),
        )
      : cats;
  }

  findOne(id: number): Cat | null {
    const cats = this.fileService.read();

    return cats.find((cat) => cat.id === id) ?? null;
  }

  update(id: number, updateCatDto: UpdateCatDto): void {
    const cats = this.fileService.read();

    const updatedCats = cats.map((cat) =>
      cat.id === id ? { ...cat, ...updateCatDto } : cat,
    );

    this.fileService.write(updatedCats);
  }

  removeById(id: number): void {
    const filteredCats = this.fileService
      .read()
      .filter((cat) => cat.id !== id);

    this.fileService.write(filteredCats);
  }

  removeByName(name: string): void {
    const filteredCats = this.fileService
      .read()
      .filter((cat) => cat.name.toLowerCase() !== name.toLowerCase());

    this.fileService.write(filteredCats);
  }
}
