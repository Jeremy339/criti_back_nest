import { Libro } from "../../libro/entities/libro.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Calificacion {
   
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    valorCalificacion: string;
    @Column()
    detalle:string;
    
    @ManyToOne(() => Libro, (lib) => lib.calificaciones)
    libro: Libro;

    
    }

