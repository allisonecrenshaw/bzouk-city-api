import { MigrationInterface, QueryRunner } from 'typeorm';

export class DropDayOfWeek1731692775587 implements MigrationInterface {
  name = 'DropDayOfWeek1731692775587';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "day_of_week"`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "day_of_week" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_date" TIMESTAMP NOT NULL DEFAULT now(), "updated_date" TIMESTAMP NOT NULL DEFAULT now(), "deleted_date" TIMESTAMP, "number" integer NOT NULL, "day_name" character varying NOT NULL, CONSTRAINT "PK_0e915d6910c68f10e3e73005e73" PRIMARY KEY ("id"))`,
    );
  }
}
