import { Controller, Get, Post, Body, Patch, Param, Delete, Req, UseGuards } from '@nestjs/common';
import { LibroService } from './libro.service';
import { CreateLibroDto } from './dto/create-libro.dto';
import { UpdateLibroDto } from './dto/update-libro.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Request } from 'express';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

//@UseGuards(JwtAuthGuard)
//@ApiBearerAuth()
@ApiTags('libro')
@Controller('libro')
export class LibroController {
  constructor(private readonly libroService: LibroService) {}

  @Post()
  create(@Body() createLibroDto: CreateLibroDto) {
    return this.libroService.create(createLibroDto);
  }

  @Get()
  findAll() {
    return this.libroService.findAll();
  }
  @Get('back')
  async backend(@Req() req: Request) {
    const builder = this.libroService.queryBuilder('libros');
    const query: any = req.query;
    if (query.q) {
      const q = query.q as string;
      builder.where('libros.titulo LIKE :q', { q: `${q}%` });
    }

    const page: number = parseInt(req.query.page as any) || 1

    const limit = 10;
    builder.offset((page - 1) * limit).limit(limit)

    const total = await builder.getCount();
    return {
      data: await builder.getMany(),
      total: total,
      page,
      last_page: Math.ceil(total / limit)
    }
  }


  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.libroService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLibroDto: UpdateLibroDto) {
    return this.libroService.update(+id, updateLibroDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.libroService.remove(+id);
  }
}
