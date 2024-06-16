import { Calificacion } from "../../calificacion/entities/calificacion.entity";
import { Categoria } from "../../categoria/entities/categoria.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Libro {
    @PrimaryGeneratedColumn()
    id:number;

    @Column({type:'varchar', length:250})
    titulo:string;

    @Column({type:'varchar', length:250})
    autor:string;

    @Column({type:'varchar', length:250})
    sinopsis:string;
    
    @Column({type:'boolean', default:true})
    libroFav:Boolean;

    @ManyToOne(()=> Categoria, (cat) => cat.libro) 
    categoria:Categoria

    @OneToMany(() => Calificacion, (cal) => cal.libro)
    calificaciones: Calificacion[];
    
}

