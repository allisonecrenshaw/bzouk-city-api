import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateEventTable1736633815331 implements MigrationInterface {
  name = 'CreateEventTable1736633815331';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "event" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_date" TIMESTAMP NOT NULL DEFAULT now(), "updated_date" TIMESTAMP NOT NULL DEFAULT now(), "deleted_date" TIMESTAMP, "title" character varying NOT NULL, "description" text, "location_id" uuid NOT NULL, "start_date_time" TIMESTAMP WITH TIME ZONE NOT NULL, "end_date_time" TIMESTAMP WITH TIME ZONE NOT NULL, "is_recurring" boolean NOT NULL, "type" character varying NOT NULL, "website_url" character varying, "registration_url" character varying, CONSTRAINT "PK_30c2f3bbaf6d34a55f8ae6e4614" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `ALTER TABLE "event" ADD CONSTRAINT "FK_ff5c43e186f7faf15a975004d76" FOREIGN KEY ("location_id") REFERENCES "location"("id") ON DELETE RESTRICT ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "event" DROP CONSTRAINT "FK_ff5c43e186f7faf15a975004d76"`,
    );
    await queryRunner.query(`DROP TABLE "event"`);
  }
}
