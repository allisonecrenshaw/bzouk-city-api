import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdateRecurrenceRuleAddTimezone1737006853205 implements MigrationInterface {
    name = 'UpdateRecurrenceRuleAddTimezone1737006853205'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "recurrence_rule" ADD "timezone" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "recurrence_rule" DROP COLUMN "timezone"`);
    }

}
