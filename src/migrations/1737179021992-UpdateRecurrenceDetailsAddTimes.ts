import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdateRecurrenceDetailsAddTimes1737179021992 implements MigrationInterface {
    name = 'UpdateRecurrenceDetailsAddTimes1737179021992'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "recurrence_details" ADD "start_time" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "recurrence_details" ADD "end_time" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "recurrence_details" ADD "spans_next_day" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "recurrence_details" DROP COLUMN "spans_next_day"`);
        await queryRunner.query(`ALTER TABLE "recurrence_details" DROP COLUMN "end_time"`);
        await queryRunner.query(`ALTER TABLE "recurrence_details" DROP COLUMN "start_time"`);
    }

}
