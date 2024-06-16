import { Libro } from "../../libro/entities/libro.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Categoria {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({type: 'varchar', length: 50})
    nombreCategoria: string;
    @Column({ type: 'text', nullable: true })
    detalle: string;
    
    @OneToMany(()=> Libro, (lib)=> lib.categoria)
    libro:Libro[]
    }
