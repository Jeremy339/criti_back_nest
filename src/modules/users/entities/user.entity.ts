import { Persona } from "../../persona/entities/persona.entity";
import { Entity, Column, PrimaryGeneratedColumn, OneToOne } from "typeorm";


@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 50 })
    name: string;

    @Column({ type: 'varchar', length: 255, unique: true })
    mail: string;

    @Column({ type: 'varchar', length: 200 })
    password: string;

    @Column()
    telefono: string;

    @OneToOne(() => Persona, persona => persona.user, { cascade: true })
    persona: Persona;

}

