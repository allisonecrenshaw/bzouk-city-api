import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateRecurrenceDetails1733168525794
  implements MigrationInterface
{
  name = 'CreateRecurrenceDetails1733168525794';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "recurrence_details" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_date" TIMESTAMP NOT NULL DEFAULT now(), "updated_date" TIMESTAMP NOT NULL DEFAULT now(), "deleted_date" TIMESTAMP, "type" character varying NOT NULL, "value" character varying NOT NULL, "recurrenceRuleId" uuid, CONSTRAINT "PK_668f65b4c72f54bab2b01345c76" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `ALTER TABLE "recurrence_details" ADD CONSTRAINT "FK_a4792ee4de5d15ffbd4d746cf91" FOREIGN KEY ("recurrenceRuleId") REFERENCES "recurrence_rule"("id") ON DELETE CASCADE ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "recurrence_details" DROP CONSTRAINT "FK_a4792ee4de5d15ffbd4d746cf91"`,
    );
    await queryRunner.query(`DROP TABLE "recurrence_details"`);
  }
}
