import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdateEventAddParentEvent1737404749019 implements MigrationInterface {
    name = 'UpdateEventAddParentEvent1737404749019'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "event" ADD "parent_event_id" uuid`);
        await queryRunner.query(`ALTER TABLE "event" ADD CONSTRAINT "FK_048c3bd9c25e4a5a845ff14361e" FOREIGN KEY ("parent_event_id") REFERENCES "event"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "event" DROP CONSTRAINT "FK_048c3bd9c25e4a5a845ff14361e"`);
        await queryRunner.query(`ALTER TABLE "event" DROP COLUMN "parent_event_id"`);
    }

}
