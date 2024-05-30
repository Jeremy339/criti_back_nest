import { Categoria } from "../../categoria/entities/categoria.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Libro {
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    titulo:string;

    @Column()
    autor:string;

    @Column()
    sinopsis:string;
    
    @Column()
    libroFav:Boolean;

    @ManyToOne(()=> Categoria, (cat) => cat.libro) 
    categoria:Categoria
}
