import { IsDecimal, IsInt, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateLibroDto {

    @IsString()
    @IsNotEmpty()
    titulo: string;

    @IsOptional()
    @IsString()
    autor: string;

    @IsOptional()
    @IsString()
    sinopsis: string;

    @IsOptional()
    @IsString()
    libroFav: Boolean;

    @IsInt()
    @IsNotEmpty()
    categoriaId: number;

}
