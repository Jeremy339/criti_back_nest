import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateCategoriaLibro1717034880178 implements MigrationInterface {
    name = 'CreateCategoriaLibro1717034880178'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "categoria" ("id" SERIAL NOT NULL, "nombreCategoria" character varying NOT NULL, CONSTRAINT "PK_f027836b77b84fb4c3a374dc70d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "libro" ("id" SERIAL NOT NULL, "titulo" character varying NOT NULL, "autor" character varying NOT NULL, "sinopsis" character varying NOT NULL, "libroFav" boolean NOT NULL, "categoriaId" integer, CONSTRAINT "PK_47ec60a1186696b36e76f499516" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "libro" ADD CONSTRAINT "FK_1a2f09c6efab334e77ba95cd9b3" FOREIGN KEY ("categoriaId") REFERENCES "categoria"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "libro" DROP CONSTRAINT "FK_1a2f09c6efab334e77ba95cd9b3"`);
        await queryRunner.query(`DROP TABLE "libro"`);
        await queryRunner.query(`DROP TABLE "categoria"`);
    }

}
