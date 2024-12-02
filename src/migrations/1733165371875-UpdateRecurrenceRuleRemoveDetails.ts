import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdateRecurrenceRuleRemoveDetails1733165371875 implements MigrationInterface {
    name = 'UpdateRecurrenceRuleRemoveDetails1733165371875'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "recurrence_rule" DROP COLUMN "days_of_week"`);
        await queryRunner.query(`ALTER TABLE "recurrence_rule" DROP COLUMN "day_of_month"`);
        await queryRunner.query(`ALTER TABLE "recurrence_rule" DROP COLUMN "day_occurrence_in_month"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "recurrence_rule" ADD "day_occurrence_in_month" character varying`);
        await queryRunner.query(`ALTER TABLE "recurrence_rule" ADD "day_of_month" character varying`);
        await queryRunner.query(`ALTER TABLE "recurrence_rule" ADD "days_of_week" character varying`);
    }

}
