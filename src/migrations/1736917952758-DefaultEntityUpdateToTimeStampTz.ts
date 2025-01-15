import { MigrationInterface, QueryRunner } from "typeorm";

export class DefaultEntityUpdateToTimeStampTz1736917952758 implements MigrationInterface {
    name = 'DefaultEntityUpdateToTimeStampTz1736917952758'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "location" DROP COLUMN "created_date"`);
        await queryRunner.query(`ALTER TABLE "location" ADD "created_date" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "location" DROP COLUMN "updated_date"`);
        await queryRunner.query(`ALTER TABLE "location" ADD "updated_date" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "location" DROP COLUMN "deleted_date"`);
        await queryRunner.query(`ALTER TABLE "location" ADD "deleted_date" TIMESTAMP WITH TIME ZONE`);
        await queryRunner.query(`ALTER TABLE "event" DROP COLUMN "created_date"`);
        await queryRunner.query(`ALTER TABLE "event" ADD "created_date" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "event" DROP COLUMN "updated_date"`);
        await queryRunner.query(`ALTER TABLE "event" ADD "updated_date" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "event" DROP COLUMN "deleted_date"`);
        await queryRunner.query(`ALTER TABLE "event" ADD "deleted_date" TIMESTAMP WITH TIME ZONE`);
        await queryRunner.query(`ALTER TABLE "recurrence_rule" DROP COLUMN "created_date"`);
        await queryRunner.query(`ALTER TABLE "recurrence_rule" ADD "created_date" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "recurrence_rule" DROP COLUMN "updated_date"`);
        await queryRunner.query(`ALTER TABLE "recurrence_rule" ADD "updated_date" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "recurrence_rule" DROP COLUMN "deleted_date"`);
        await queryRunner.query(`ALTER TABLE "recurrence_rule" ADD "deleted_date" TIMESTAMP WITH TIME ZONE`);
        await queryRunner.query(`ALTER TABLE "recurrence_details" DROP COLUMN "created_date"`);
        await queryRunner.query(`ALTER TABLE "recurrence_details" ADD "created_date" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "recurrence_details" DROP COLUMN "updated_date"`);
        await queryRunner.query(`ALTER TABLE "recurrence_details" ADD "updated_date" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "recurrence_details" DROP COLUMN "deleted_date"`);
        await queryRunner.query(`ALTER TABLE "recurrence_details" ADD "deleted_date" TIMESTAMP WITH TIME ZONE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "recurrence_details" DROP COLUMN "deleted_date"`);
        await queryRunner.query(`ALTER TABLE "recurrence_details" ADD "deleted_date" TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE "recurrence_details" DROP COLUMN "updated_date"`);
        await queryRunner.query(`ALTER TABLE "recurrence_details" ADD "updated_date" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "recurrence_details" DROP COLUMN "created_date"`);
        await queryRunner.query(`ALTER TABLE "recurrence_details" ADD "created_date" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "recurrence_rule" DROP COLUMN "deleted_date"`);
        await queryRunner.query(`ALTER TABLE "recurrence_rule" ADD "deleted_date" TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE "recurrence_rule" DROP COLUMN "updated_date"`);
        await queryRunner.query(`ALTER TABLE "recurrence_rule" ADD "updated_date" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "recurrence_rule" DROP COLUMN "created_date"`);
        await queryRunner.query(`ALTER TABLE "recurrence_rule" ADD "created_date" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "event" DROP COLUMN "deleted_date"`);
        await queryRunner.query(`ALTER TABLE "event" ADD "deleted_date" TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE "event" DROP COLUMN "updated_date"`);
        await queryRunner.query(`ALTER TABLE "event" ADD "updated_date" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "event" DROP COLUMN "created_date"`);
        await queryRunner.query(`ALTER TABLE "event" ADD "created_date" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "location" DROP COLUMN "deleted_date"`);
        await queryRunner.query(`ALTER TABLE "location" ADD "deleted_date" TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE "location" DROP COLUMN "updated_date"`);
        await queryRunner.query(`ALTER TABLE "location" ADD "updated_date" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "location" DROP COLUMN "created_date"`);
        await queryRunner.query(`ALTER TABLE "location" ADD "created_date" TIMESTAMP NOT NULL DEFAULT now()`);
    }

}
