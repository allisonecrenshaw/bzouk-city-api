import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateLocationTable1720649228542 implements MigrationInterface {
  name = 'CreateLocationTable1720649228542';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "location" (
        "id" uuid NOT NULL DEFAULT uuid_generate_v4(), 
        "created_date" TIMESTAMP NOT NULL DEFAULT now(), 
        "updated_date" TIMESTAMP NOT NULL DEFAULT now(), 
        "deleted_date" TIMESTAMP, "title" character varying, 
        "address_line1" character varying, 
        "address_line2" character varying, 
        "city" character varying, 
        "state" character varying, 
        "country" character varying NOT NULL, 
        "postal_code" character varying, 
        CONSTRAINT "PK_876d7bdba03c72251ec4c2dc827" PRIMARY KEY ("id")
      )`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "location"`);
  }
}
