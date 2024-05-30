import { Libro } from "../../libro/entities/libro.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Categoria {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    nombreCategoria: string;
    @OneToMany(()=> Libro, (lib)=> lib.categoria)
    libro:Libro[]
    }