import { Persona } from "../../persona/entities/persona.entity";
import { Entity, Column, PrimaryGeneratedColumn, OneToOne } from "typeorm";


@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    lastname:string;

    @Column()
    mail: string;

    @Column()
    password: string;

    @Column()
    fechaNacimiento: string;

    @OneToOne(() => Persona, persona => persona.user, { cascade: true })
    persona: Persona;

}

