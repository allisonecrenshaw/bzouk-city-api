import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateRecurrenceRule1731692775586 implements MigrationInterface {
    name = 'CreateRecurrenceRule1731692775586'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "recurrence_rule" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_date" TIMESTAMP NOT NULL DEFAULT now(), "updated_date" TIMESTAMP NOT NULL DEFAULT now(), "deleted_date" TIMESTAMP, "frequency" character varying NOT NULL, "interval" integer NOT NULL, "days_of_week" character varying, "day_of_month" character varying, "day_occurrence_in_month" character varying, "start_date" character varying, "end_date" character varying, CONSTRAINT "PK_556f2fc4eb4c05a0b6dc6602919" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "recurrence_rule"`);
    }

}
