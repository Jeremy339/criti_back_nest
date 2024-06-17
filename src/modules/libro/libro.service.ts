import { Injectable } from '@nestjs/common';
import { CreateLibroDto } from './dto/create-libro.dto';
import { UpdateLibroDto } from './dto/update-libro.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Libro } from './entities/libro.entity';
import { Repository } from 'typeorm';

@Injectable()
export class LibroService {
  constructor(@InjectRepository(Libro) private libroRepository: Repository<Libro>){}
  
  queryBuilder(alias:string){
    return this.libroRepository.createQueryBuilder(alias);
  }
  
  create(createLibroDto: CreateLibroDto) {
    return this.libroRepository.save(createLibroDto);
  }

  findAll() {
    return this.libroRepository.find();
  }

  findOne(id: number) {
    return this.libroRepository.findOne({
      where:{
        id:id
      }
    });
  }

  update(id: number, updateLibroDto: UpdateLibroDto) {
    return this.libroRepository.update(id, updateLibroDto);
  }

  remove(id: number) {
    return this.libroRepository.delete(id);
  }
}
