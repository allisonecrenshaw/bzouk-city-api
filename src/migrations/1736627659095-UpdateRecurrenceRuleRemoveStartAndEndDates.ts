import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdateRecurrenceRuleRemoveStartAndEndDates1736627659095 implements MigrationInterface {
    name = 'UpdateRecurrenceRuleRemoveStartAndEndDates1736627659095'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "recurrence_rule" DROP COLUMN "start_date"`);
        await queryRunner.query(`ALTER TABLE "recurrence_rule" DROP COLUMN "end_date"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "recurrence_rule" ADD "end_date" character varying`);
        await queryRunner.query(`ALTER TABLE "recurrence_rule" ADD "start_date" character varying`);
    }

}
